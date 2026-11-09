#!/usr/bin/env python3
"""Local static file server with HTTP Range support (required for audio/video playback)."""
import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
RANGE_RE = re.compile(r"bytes=(\d*)-(\d*)")


class RangeHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def send_head(self):
        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().send_head()

        with open(path, "rb") as f:
            pass  # check readable

        size = os.path.getsize(path)
        ctype = self.guess_type(path)
        m = RANGE_RE.match(self.headers.get("Range", "") or "")
        start, end = 0, size - 1

        if m:
            if m.group(1):
                start = int(m.group(1))
            if m.group(2):
                end = min(int(m.group(2)), size - 1)
                if not m.group(1):
                    start = size - int(m.group(2))
            if start > end or start >= size:
                self.send_response(416)
                self.send_header("Content-Range", f"bytes */{size}")
                self.end_headers()
                return None
            status = 206
        else:
            status = 200

        f = open(path, "rb")
        f.seek(start)
        length = end - start + 1

        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(length))
        self.send_header("Accept-Ranges", "bytes")
        if status == 206:
            self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Last-Modified", self.date_time_string(os.path.getmtime(path)))
        self.end_headers()
        self._range_left = length
        return f

    def copyfile(self, source, outputfile):
        if self._range_left is None:
            return super().copyfile(source, outputfile)
        left = self._range_left
        self._range_left = None
        while left > 0:
            chunk = source.read(min(65536, left))
            if not chunk:
                break
            outputfile.write(chunk)
            left -= len(chunk)

    def __init__(self, *args, **kwargs):
        self._range_left = None
        super().__init__(*args, **kwargs)

    def log_message(self, fmt, *args):
        pass


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    os.chdir(ROOT)
    srv = ThreadingHTTPServer(("127.0.0.1", port), RangeHandler)
    print(f"Serving {ROOT} on http://localhost:{port} (Range supported)")
    srv.serve_forever()
