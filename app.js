/* ============================================================
   王德雯 · 简历网站 交互与作品数据
   歌词文本均来自用户提供的 docx 原稿，段落标记以 # 开头
   ============================================================ */

const TRACKS = [
  {
    id: 'yale', no: '01', title: '哑了', en: 'GONE QUIET',
    dur: '2:39', file: 'assets/audio/yale.mp3', hue: 220, cover: 'assets/img/cover-yale.jpg',
    tags: ['抒情', '沉默关系', '情绪克制'],
    note: '写两个人同时选择沉默的关系。Bridge「热闹是假装 / 冷静是伪装」是全曲转折，副歌反复的「我们都哑了」把告别降到最轻。',
    lyrics: [
      '#A1',
      '习惯把情绪 折成安静形状',
      '不吵不闹 不奢望不勉强',
      '对话剩半句 就自然收场',
      '连遗憾都变的很端庄',
      '#A2',
      '你把温柔 说得那么大方',
      '却连问候 都觉那么慌张',
      '都很有默契 都不先讲',
      '这关系早已陷入缺氧',
      '#Bridge',
      '热闹是假装 冷静是伪装',
      '我们都擅长对彼此说谎',
      '明明心还烫 明明还难忘',
      '却用沉默 把一切 埋葬',
      '#B',
      '我们都哑了',
      '我们走远了',
      '就连难过 都变得 克制了',
      '努力热闹着 你安静看着',
      '多陌生 这时刻',
      '我们都哑了',
      '我们走远了',
      '就连告别 都懒得 再曲折',
      '我们懂事了 也都麻木了',
      '不声不响了'
    ]
  },
  {
    id: 'xiangsi', no: '02', title: '相思寄梧桐', en: 'LETTER TO THE PARASOL TREE',
    dur: '2:12', file: 'assets/audio/xiangsi.mp3', hue: 158, cover: 'assets/img/cover-xiangsi.jpg',
    tags: ['国风', '孤月潮汐', '企划概念'],
    note: '西风、旧巷、残卷、孤灯，一串古典物象铺出「书生不懂」的时间差。Bridge 把镜头拉到长空与岁岁凭栏，再落回人海西东。',
    idea: '孤月和潮汐相逢其实和《海与天之间》的概念相似，或者飞鸟和鱼。故事大概是女主爱慕男主，但奈何时间太匆匆，书生还不懂情意。',
    lyrics: [
      '#Verse',
      '西风过旧巷 落叶悄无声',
      '拿相思换梧桐 奈何匆匆',
      '声声唤别离 书生他不懂',
      '孤灯照残卷 墨干透几重',
      '#Bridge',
      '燕过长空',
      '提笔写春秋',
      '岁岁凭栏处',
      '旧梦总成空',
      '人海茫茫各自去西东',
      '偏回忆 吻得 最深重',
      '#Chorus 1',
      '孤月落 潮海生 似相逢',
      '短短一眼 还是一场空',
      '隔着光阴遥望那一盏',
      '烧不尽的腮红',
      '#Chorus 2',
      '灯摇曳 剪不断 是离愁',
      '错把 擦肩 当作了旧梦',
      '叹悲欢寄浮生一场梦',
      '相思 寄梧桐'
    ]
  },
  {
    id: 'xuedinge', no: '03', title: '薛定谔与你', en: 'SCHRÖDINGER & YOU',
    dur: '1:55', file: 'assets/audio/xuedinge.mp3', hue: 312, cover: 'assets/img/cover-xuedinge.jpg',
    tags: ['流行电子', '中英混排', '概念'],
    note: '用「薛定谔」的未确定性写暧昧关系。中英混排的副歌做记忆点，Verse 用短句堆叠推进情绪，是一首偏流媒体取向的作品。',
    lyrics: [
      '#Chorus 1',
      '爱你是沦陷在迷宫的游戏',
      '向左或向右寻找你的痕迹',
      '像一场小雨打湿了心底',
      '你是我 戒不掉的回忆',
      '#Chorus 2',
      '哪怕这场爱只是一个陷阱',
      '也想和你困在同一个梦境',
      '你是我解不开的谜底',
      'Let me stay, let me fall in your eyes tonight',
      '#Verse 1',
      '想念绝不是我故意的',
      '怪你在我脑海太深刻',
      '你轻易搅动我世界',
      '无可奈何',
      '情绪来回拉扯',
      '消息反复揣测',
      'Can you feel it，这份炙热',
      '多想把这距离抹成零',
      '与你片刻安宁 而你捉摸不定',
      '爱是悬在半空的谜底',
      '只为你',
      '只为等你一句回应',
      '#Chorus · Reprise',
      '爱你是沦陷在迷宫的游戏',
      '哪怕这场爱只是一个陷阱',
      '你是我解不开的谜底',
      'Let me stay, let me fall in your eyes tonight'
    ]
  },
  {
    id: 'yuji', no: '04', title: '雨季滞留期', en: 'STRANDED IN THE RAIN SEASON',
    dur: '3:30', file: 'assets/audio/yuji.mp3', hue: 190, cover: 'assets/img/cover-yuji.jpg',
    tags: ['长叙事', 'Rap', '雨季意象'],
    note: '篇幅最长的叙事作品。三段 B 段层层推进，中间插入 Rap 完成视角切换与情绪爆发，结尾回到对性格的自我归因。',
    lyrics: [
      '#A',
      '爱你这件事情',
      '像雨漫过眼底',
      '一整个季节都在沉溺',
      '乌云盖住我的心',
      '#A · II',
      '是该选择逃避',
      '是该选择回应',
      '每当我脆弱的时候',
      '都在重复你的姓名',
      '#Bridge',
      '就让这场大雨 模糊 掉 我的清醒',
      '明知是场陷阱 却沦陷的彻底',
      '如果爱你是一种病',
      '我宁愿在雨里 不求放晴',
      '#B',
      '怎么说 怎么做你才能回来',
      '我承认 我从未有想过耍赖',
      '散不开 这片爱带来的阴霾',
      '深秋了 还等下一片花开',
      '我 宁愿陷在雨季里寂寞的发呆',
      '也不想 把你从我记忆里淘汰',
      '#B · II',
      '醒不来 心事被雨层层覆盖',
      '落下来 雨滴敲碎所有期待',
      '我走在 没有你的茫茫人海',
      '等一个转身 等一个可能',
      '可能你撑着雨伞在角落里辗转',
      '风吹过白色裙摆 你依然灿烂',
      '笑着等我说爱',
      '#Rap',
      '朋友劝我醒来',
      '你已去了沿海地带',
      '如何摆脱掉依赖',
      '你是否也在期待',
      '有天我会出现在你身边',
      '悄悄走过来把你手牵',
      '可惜你早已离开',
      '可惜爱没有未来',
      '这首歌你也不喜欢',
      '若疼痛是种习惯',
      '也不会遗憾',
      '躲在整个夜晚',
      '撕开我零碎的不堪',
      '#B · III',
      '潮湿的 冷空气像你的存在',
      '那香味 惩罚我过去的不该',
      '松开你的手 你适合某位更好的',
      '我早该明白',
      '都怪我这缺陷的性格',
      '都怪我的自私和懦弱',
      '围绕我们之间那片灰色',
      '该抹去了'
    ]
  },
  {
    id: 'jiumo', no: '05', title: '旧墨', en: 'OLD INK',
    dur: '3:10', file: 'assets/audio/jiumo.mp3', hue: 38, cover: 'assets/img/cover-jiumo.jpg',
    tags: ['国风', '水墨叙事', '企划概念'],
    note: '国风叙事作品。用砚、墨、纸背与画中人搭一组互为观看者的意象，两段 Chorus 分别从「画中人老去」与「弹曲失意」推进。',
    idea: '画中人和画人的故事，以及画人也是画中人的故事。',
    lyrics: [
      '#Verse 1',
      '砚底沉着 当年月色',
      '墨入长河 晕开你轮廓',
      '写破纸背 难解落默',
      '#Verse 2',
      '一世蹉跎 故事多几折',
      '情深言浅 藏多少起落',
      '是否还念我',
      '#Chorus 1',
      '是谁在画中老去',
      '一撇一捺剥落了朝夕',
      '山水迢迢，寻找你足迹',
      '守着回忆',
      '#Chorus 2',
      '是谁又弹一曲失意',
      '连眼泪都失去了声音',
      '你眼底笑意',
      '能否再为我停留一厘'
    ]
  },
  {
    id: 'renshe', no: '06', title: '人设', en: 'THE PERSONA',
    dur: '2:18', file: 'assets/audio/renshe.mp3', hue: 272, cover: 'assets/img/cover-renshe.jpg',
    tags: ['流行', '自我剖白', '面具隐喻'],
    note: '用「滤镜」「面具」「人设」写亲密关系里的表演性。B1 想卸下、B2 又求对方别戳破，两段形成完整的自我拉扯。',
    lyrics: [
      '#A1',
      '我的确无法获得自由',
      '在感情里懦弱的过了头',
      '没有缘由',
      '陷入这过失的冲动',
      '缝制着面具 一层一层',
      '#A2',
      '雨打湿双眼模糊了霓虹',
      '眼泪划过伤口泛起了疼',
      '揭开了所有',
      '爱让人难以形容',
      '滤镜下早已经千疮百孔',
      '#B1',
      '如果我卸下虚伪的人设',
      '你是否还会爱我的执着',
      '不自觉表演逃不脱',
      '连难过都藏匿着',
      '做你眼里完美的那个',
      '失去了自我',
      '#B2',
      '请在痛楚蔓延前逃离我',
      '麻烦你不要戳破这脆弱',
      '我只能远远推开你',
      '维持着人设',
      '为何越爱你谎言越多',
      '也就越难过',
      '越难过'
    ]
  },
  {
    id: 'fencun', no: '07', title: '分寸', en: 'SENSE OF PROPORTION',
    dur: '2:24', file: 'assets/audio/fencun.mp3', hue: 24, cover: 'assets/img/cover-fencun.jpg',
    tags: ['都市抒情', '克制', '恋人未满'],
    note: '以「朋友以上、恋人未满」的距离感写成。主歌用糖果、口吻这类轻的物件称量感情，副歌一句「最体面最残忍」把整首歌的克制收住。',
    lyrics: [
      '#A',
      '礼貌的问候 克制的口吻',
      '关系停在 朋友以上部分',
      '你给我的糖果 不多也不沉',
      '刚好够我 念念不忘一阵',
      '#B',
      '我 假装清醒 试着抽身',
      '不说破 是我最后的自尊',
      '多么本分',
      '太靠近会出神',
      '太贪心不单纯',
      '情绪 发号 指令 在安静中 翻滚',
      '#C',
      '我守着分寸 藏着认真',
      '怕热情 不诚恳',
      '一步步靠近 我就当真',
      '一后退 就转身',
      '不追问 也不敢承认',
      '动心只能安分',
      '做一个 最懂事 的陌生人',
      '#C · II',
      '我守着分寸 藏着伤痕',
      '却还不肯脱身',
      '故事没剧本 何必较真',
      '重逢几点几分',
      '遗憾留给自己默认',
      '清醒爱着多无声',
      '恋人未满 最体面最残忍',
      '做个温柔的局外人'
    ]
  },
  {
    id: 'wu', no: '08', title: '雾', en: 'FOG',
    dur: '2:32', file: 'assets/audio/wu.mp3', hue: 202, cover: 'assets/img/cover-wu.jpg',
    tags: ['迷幻抒情', '若即若离', '迷雾意象'],
    note: '以「房间生病了很久」开场，把失恋后的停滞写成沙漏。C1 / C2 用囚笼、潮湿、朦胧三层意象，把看不清的关系推到副歌。',
    lyrics: [
      '#A',
      '你走之后',
      '房间生病了很久',
      '懒懒的 被卷入一阵沙漏',
      '有太多理由',
      '说你是不好的人',
      '都被我 打上了言不由衷',
      '#B',
      '电话 还是没打通',
      '做不回情人能不能作朋友？',
      '我猜 你是否还想我 会疼',
      '是否还在原地默默等我',
      '#C1',
      '爱让人陷入若即若离的囚笼',
      '冷冷的困在有你的迷雾雨中',
      '潮湿侵蚀着我的',
      '最初的感动',
      '却又自甘堕落在其中',
      '#C2',
      '爱让人背叛意志挟持着伤口',
      '期待你还会抚平着我的伤痛',
      '可惜你身影朦胧',
      '消失在雾中',
      '却留给我笑容'
    ]
  }
];

const VIDEO_MAP = {
  LOSE:    { src: 'assets/video/LOSE.mp4',    poster: 'assets/img/lose-cover.png',    title: 'LOSE（时差）', meta: '02:58 · 9:16 竖屏 · DEMO 视觉' },
  GOODBYE: { src: 'assets/video/goodbye.mp4', poster: 'assets/img/goodbye-cover.png', title: '还不想说再见', meta: '02:53 · 9:16 竖屏 · DEMO 视觉' },
  MOON:    { src: 'assets/video/moon.mp4',    poster: 'assets/img/moon-cover.png',    title: '谁偷走了月亮', meta: '01:30 · 9:16 竖屏 · DEMO 视觉' }
};

/* ---------- helpers ---------- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

function seededBars(seed, n, min = 14, max = 100) {
  let s = seed;
  const out = [];
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280;
    const shape = 0.42 + 0.58 * Math.abs(Math.sin(i * 0.47 + seed * 0.013));
    out.push(Math.max(min, Math.min(max, min + (max - min) * r * shape)));
  }
  return out;
}

function coverHTML(track, compact = false) {
  // 有封面图时直接用图，否则回退到程序化色块
  if (track.cover) {
    return `<div class="cover-inner cover-photo">
      <img src="${track.cover}" alt="《${track.title}》封面" loading="lazy" decoding="async">
    </div>`;
  }
  // Extrafazant 式色块轮换：蓝 → 橙 → 粉 → 黑
  const PALETTE = ['#0038ff', '#ff5f04', '#ff77cd', '#101010'];
  const color = PALETTE[(parseInt(track.no, 10) - 1) % PALETTE.length];
  const bars = seededBars(parseInt(track.no, 10) * 977, compact ? 16 : 22, 12, 70);
  const wave = bars.map(v => `<i style="height:${v}%"></i>`).join('');
  return `<div class="cover-inner" style="background:${color}">
    <span class="cover-ring"></span>
    <span class="cover-glyph">${track.title.charAt(0)}</span>
    <div class="cover-wave">${wave}</div>
    <span class="cover-no">${track.no}</span>
  </div>`;
}

function fmtTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

/* ---------- works: list & detail ---------- */
const workList = $('#workList');
const audio = $('#audio');
const waveform = $('#waveform');
const playBtn = $('#playBtn');
const lyricsEl = $('#lyrics');
let current = 0;
let waveBars = [];
let isDragging = false;

function renderList() {
  workList.innerHTML = TRACKS.map((t, i) => `
    <button class="work-item${i === current ? ' active' : ''}" role="option" aria-selected="${i === current}" data-index="${i}">
      <span class="wi-no">${t.no}</span>
      <span class="wi-cover">${coverHTML(t, true)}</span>
      <span class="wi-title"><b>${t.title}</b><small>${t.tags.join(' · ')}</small></span>
      <span class="wi-dur">${t.dur}</span>
      <span class="wi-play"><svg viewBox="0 0 20 20"><path d="M6 3.5 16.5 10 6 16.5v-13Z" fill="currentColor"/></svg></span>
    </button>`).join('');

  $$('.work-item', workList).forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      if (idx === current) { togglePlay(); return; }
      selectTrack(idx, true);
    });
  });
}

function renderDetail() {
  const t = TRACKS[current];
  $('#detailCover').innerHTML = coverHTML(t);
  $('#detailKicker').textContent = `NOW PLAYING / ${t.no}`;
  $('#detailTitle').textContent = t.title;
  $('#detailEn').textContent = t.en;
  $('#detailTags').innerHTML = t.tags.map(x => `<span>${x}</span>`).join('');
  $('#detailNote').textContent = t.note;
  $('#durTime').textContent = t.dur;

  lyricsEl.innerHTML = t.lyrics.map(line => {
    if (line.startsWith('#')) return `<div class="ly-section">${line.slice(1)}</div>`;
    return `<div class="ly-line">${line}</div>`;
  }).join('') + (t.idea ? `<div class="ly-idea"><b>企划 / CONCEPT</b>${t.idea}</div>` : '');
  lyricsEl.scrollTop = 0;
}

function renderWave() {
  waveBars = seededBars(parseInt(TRACKS[current].no, 10) * 613 + 7, 72, 12, 100);
  waveform.innerHTML = waveBars.map(v => `<i style="height:${v}%"></i>`).join('');
  updateWave(0);
}

function updateWave(progress) {
  const bars = waveform.children;
  const filled = Math.round(progress * bars.length);
  for (let i = 0; i < bars.length; i++) bars[i].classList.toggle('played', i < filled);
  waveform.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
}

function selectTrack(idx, autoplay = false) {
  const wasPlaying = !audio.paused;
  current = (idx + TRACKS.length) % TRACKS.length;
  const t = TRACKS[current];

  audio.src = t.file;
  audio.load();
  renderList();
  renderDetail();
  renderWave();
  $('#curTime').textContent = '0:00';
  $('#durTime').textContent = t.dur;

  if (autoplay || wasPlaying) {
    audio.play().catch(() => setPlayState(false));
  } else {
    setPlayState(false);
  }
}

function togglePlay() {
  if (audio.paused) audio.play().catch(() => setPlayState(false));
  else audio.pause();
}

function setPlayState(playing) {
  playBtn.classList.toggle('playing', playing);
  playBtn.setAttribute('aria-label', playing ? '暂停' : '播放');
  $$('.work-item', workList).forEach((b, i) => {
    const icon = $('.wi-play svg', b);
    if (icon) icon.innerHTML = (playing && i === current)
      ? '<path d="M5.5 3.5h3.2v13H5.5zM11.3 3.5h3.2v13h-3.2z" fill="currentColor"/>'
      : '<path d="M6 3.5 16.5 10 6 16.5v-13Z" fill="currentColor"/>';
  });
}

/* audio events */
audio.addEventListener('play', () => setPlayState(true));
audio.addEventListener('pause', () => setPlayState(false));
audio.addEventListener('loadedmetadata', () => {
  if (isFinite(audio.duration)) $('#durTime').textContent = fmtTime(audio.duration);
});
audio.addEventListener('timeupdate', () => {
  const p = audio.duration ? audio.currentTime / audio.duration : 0;
  $('#curTime').textContent = fmtTime(audio.currentTime);
  updateWave(p);
});
audio.addEventListener('ended', () => selectTrack(current + 1, true));
audio.addEventListener('error', () => {
  $('#curTime').textContent = '音频未加载';
  setPlayState(false);
});

/* waveform seek */
function seekFromEvent(e) {
  const rect = waveform.getBoundingClientRect();
  const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
  const ratio = x / rect.width;
  if (audio.duration && isFinite(audio.duration)) audio.currentTime = ratio * audio.duration;
  updateWave(ratio);
}
waveform.addEventListener('pointerdown', e => { isDragging = true; waveform.setPointerCapture(e.pointerId); seekFromEvent(e); });
waveform.addEventListener('pointermove', e => { if (isDragging) seekFromEvent(e); });
waveform.addEventListener('pointerup', () => { isDragging = false; });
waveform.addEventListener('pointercancel', () => { isDragging = false; });
waveform.addEventListener('keydown', e => {
  if (!audio.duration) return;
  if (e.key === 'ArrowRight') { audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); e.preventDefault(); }
  if (e.key === 'ArrowLeft') { audio.currentTime = Math.max(0, audio.currentTime - 5); e.preventDefault(); }
});

playBtn.addEventListener('click', togglePlay);
$('#prevBtn').addEventListener('click', () => selectTrack(current - 1, !audio.paused));
$('#nextBtn').addEventListener('click', () => selectTrack(current + 1, !audio.paused));

const volume = $('#volume');
const muteBtn = $('#muteBtn');
audio.volume = Number(volume.value);
volume.addEventListener('input', () => {
  audio.volume = Number(volume.value);
  audio.muted = false;
  muteBtn.classList.toggle('muted', audio.volume === 0);
});
muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  const off = audio.muted || audio.volume === 0;
  muteBtn.classList.toggle('muted', off);
  muteBtn.setAttribute('aria-label', off ? '取消静音' : '静音');
});

const lyricsToggle = $('#lyricsToggle');
lyricsToggle.addEventListener('click', () => {
  const collapsed = lyricsEl.classList.toggle('collapsed');
  lyricsToggle.textContent = collapsed ? '展开' : '收起';
  lyricsToggle.setAttribute('aria-expanded', String(!collapsed));
});

renderList();
renderDetail();
renderWave();
audio.src = TRACKS[0].file;
audio.load();

/* ---------- video modal ---------- */
const modal = $('#videoModal');
const modalWrap = $('#modalVideoWrap');
const modalCaption = $('#modalCaption');

function openVideo(key) {
  const v = VIDEO_MAP[key];
  if (!v) return;
  modalWrap.innerHTML = `<video controls autoplay playsinline preload="metadata" poster="${v.poster}"><source src="${v.src}" type="video/mp4">您的浏览器不支持视频播放。</video>`;
  modalCaption.innerHTML = `<span>${v.title}</span><span>${v.meta}</span>`;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  $('#modalClose').focus();
}
function closeVideo() {
  const vid = $('video', modalWrap);
  if (vid) { vid.pause(); vid.removeAttribute('src'); vid.load(); }
  modalWrap.innerHTML = '';
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  if (!audio.paused) return;
}
$$('.video-card').forEach(card => {
  $('.video-poster', card).addEventListener('click', () => openVideo(card.dataset.video));
});
$('#modalClose').addEventListener('click', closeVideo);
$('[data-close]', modal).addEventListener('click', closeVideo);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeVideo();
  if (e.code === 'Space' && !modal.hidden) return;
  if (e.code === 'Space' && ['INPUT', 'BUTTON', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
  if (e.code === 'Space' && e.target === document.body) { e.preventDefault(); togglePlay(); }
});

/* ---------- scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), Math.min(i * 70, 210));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- nav ---------- */
const nav = $('#nav');
const navLinks = $('#navLinks');
const navToggle = $('#navToggle');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
$$('a', navLinks).forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

const sections = ['about', 'works', 'videos', 'career', 'contact'].map(id => document.getElementById(id));
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    $$('a', navLinks).forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => sectionObserver.observe(s));

/* ---------- copy contact ---------- */
const toast = $('#copyToast');
let toastTimer;
$$('[data-copy]').forEach(el => {
  el.addEventListener('click', async e => {
    const text = el.dataset.copy;
    if (el.tagName === 'BUTTON') e.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (__) {}
      ta.remove();
    }
    if (el.tagName === 'BUTTON') {
      toast.textContent = `已复制 ${text}`;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
    }
  });
});

/* ---------- cursor glow ---------- */
const glow = $('#cursorGlow');
if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let raf;
  window.addEventListener('pointermove', e => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.opacity = '1';
    });
  }, { passive: true });
  window.addEventListener('pointerleave', () => { glow.style.opacity = '0'; });
}
