
  /* ──────────────────────────────────────
     DATA
  ────────────────────────────────────── */
  const playlists = [
    { name: "Chill Vibes",     emoji: "🌙", bg: "#1a1a2e" },
    { name: "Top Hits 2024",   emoji: "🔥", bg: "#2d1b00" },
    { name: "Workout Mix",     emoji: "⚡", bg: "#1a1a1a" },
    { name: "Study Focus",     emoji: "📚", bg: "#0d2b1a" },
    { name: "Late Night Drive",emoji: "🚗", bg: "#001022" },
    { name: "Weekend Mood",    emoji: "🎉", bg: "#200020" },
  ];
   const audio = document.getElementById("audio-player");

  const quickItems = [
    { label: "Liked Songs",    emoji: "💜", bg: "linear-gradient(135deg,#450af5,#c4efd9)" },
    { label: "Chill Vibes",    emoji: "🌙", bg: "#1a1a2e" },
    { label: "Top Hits 2024",  emoji: "🔥", bg: "#2d1b00" },
    { label: "Workout Mix",    emoji: "⚡", bg: "#1a1a1a" },
    { label: "Study Focus",    emoji: "📚", bg: "#0d2b1a" },
    { label: "Daily Mix 3",    emoji: "🎵", bg: "#1a0d2b" },
  ];
 
  const recentTracks = [
    { title: "Blinding Lights",      artist: "The Weeknd",          emoji: "🌃", bg: "#1a0a0a", src: "songs/𝑺𝑳𝑨𝑽𝑨-𝑭𝑼𝑵𝑲.mp3" },
    { title: "Levitating",           artist: "Dua Lipa",            emoji: "🪐", bg: "#0a0a2a" },
    { title: "Stay",                 artist: "The Kid LAROI",        emoji: "✨", bg: "#1a1a00" },
    { title: "Peaches",              artist: "Justin Bieber",        emoji: "🍑", bg: "#2a1a00" },
    { title: "Good 4 U",             artist: "Olivia Rodrigo",       emoji: "💔", bg: "#1a0010" },
    { title: "MONTERO",              artist: "Lil Nas X",            emoji: "🐍", bg: "#100020" },
  ];
 
  const mfyTracks = [
    { title: "Daily Mix 1",    artist: "The Weeknd, Drake & more", emoji: "🎯", bg: "#0d1a2a" },
    { title: "Daily Mix 2",    artist: "Dua Lipa, Doja Cat & more",emoji: "💎", bg: "#1a0d2a" },
    { title: "Discover Weekly",artist: "Your weekly mixtape",       emoji: "🔭", bg: "#0a1a0a" },
    { title: "Release Radar",  artist: "New music for you",         emoji: "📡", bg: "#1a1a0a" },
    { title: "On Repeat",      artist: "Songs you love most",       emoji: "🔄", bg: "#2a0a0a" },
  ];
 
  const artists = [
    { title: "The Weeknd",      artist: "Artist",  emoji: "🎤", bg: "#1a0a0a", circle: true },
    { title: "Taylor Swift",    artist: "Artist",  emoji: "🌟", bg: "#1a1500", circle: true },
    { title: "Drake",           artist: "Artist",  emoji: "👑", bg: "#150a1a", circle: true },
    { title: "Dua Lipa",        artist: "Artist",  emoji: "💫", bg: "#0a0a2a", circle: true },
    { title: "Ed Sheeran",      artist: "Artist",  emoji: "🎸", bg: "#0a1a0a", circle: true },
  ];
 
  const trendingTracks = [
    { title: "Espresso",          artist: "Sabrina Carpenter", emoji: "☕", bg: "#1a0a00" },
    { title: "Cruel Summer",      artist: "Taylor Swift",      emoji: "🌞", bg: "#1a1500" },
    { title: "vampire",           artist: "Olivia Rodrigo",    emoji: "🩸", bg: "#1a0000" },
    { title: "Flowers",           artist: "Miley Cyrus",       emoji: "🌸", bg: "#1a0010" },
    { title: "As It Was",         artist: "Harry Styles",      emoji: "🌊", bg: "#001a1a" },
    { title: "Anti-Hero",         artist: "Taylor Swift",      emoji: "🦸", bg: "#0d0d1a" },
  ];
 
  /* ──────────────────────────────────────
     BUILD UI
  ────────────────────────────────────── */
  function buildSidebarPlaylists() {
    const container = document.getElementById("sidebar-playlists");
    playlists.forEach(pl => {
      const el = document.createElement("div");
      el.className = "playlist-item";
      el.innerHTML = `
        <div class="pl-thumb" style="background:${pl.bg}">${pl.emoji}</div>
        <div class="pl-info">
          <div class="pl-name">${pl.name}</div>
          <div class="pl-meta">Playlist</div>
        </div>`;
      el.onclick = () => {
        document.querySelectorAll(".playlist-item").forEach(p => p.classList.remove("active"));
        el.classList.add("active");
        const t = recentTracks[Math.floor(Math.random() * recentTracks.length)];
        loadTrack(t.title, t.artist, t.emoji, t.bg);
      };
      container.appendChild(el);
    });
  }
 
  function buildQuickGrid() {
    const grid = document.getElementById("quick-grid");
    quickItems.forEach(item => {
      const el = document.createElement("div");
      el.className = "quick-card";
      el.innerHTML = `
        <div class="qc-thumb" style="background:${item.bg}">${item.emoji}</div>
        <span class="qc-label">${item.label}</span>
        <div class="qc-play"><i class="ti ti-player-play-filled"></i></div>`;
      el.onclick = () => {
        const t = recentTracks[Math.floor(Math.random() * recentTracks.length)];
        loadTrack(item.label, "Various Artists", item.emoji, item.bg);
      };
      grid.appendChild(el);
    });
  }
 
  function buildCards(dataArr, containerId) {
    const row = document.getElementById(containerId);
    row.innerHTML = "";
    dataArr.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-art${item.circle ? " circle" : ""}" style="background:${item.bg}">${item.emoji}</div>
        <div class="card-title">${item.title}</div>
        <div class="card-sub">${item.artist}</div>
        <div class="card-play"><i class="ti ti-player-play-filled"></i></div>`;
      card.onclick = () => loadTrack(item.title, item.artist, item.emoji, item.bg);
      row.appendChild(card);
    });
  }
 
  /* ──────────────────────────────────────
     GREETING
  ────────────────────────────────────── */
  function setGreeting() {
    const h = new Date().getHours();
    document.getElementById("greeting").textContent =
      h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
  }
 
  /* ──────────────────────────────────────
     PLAYER STATE
  ────────────────────────────────────── */
  let isPlaying  = false;
  let isShuffle  = false;
  let isRepeat   = false;
  let isMuted    = false;
  let isLiked    = false;
  let progress   = 0;   // seconds elapsed
  let duration   = 200; // seconds total
  let volume     = 65;  // 0–100
  let timer      = null;
  let currentTrackData = null;
 

function loadTrack(title, artist, emoji, bg, src) {
    document.getElementById("np-title").textContent = title;
    document.getElementById("np-artist").textContent = artist;

    audio.src = src;
    audio.play();
}
 
  function startPlaying() {
    isPlaying = true;
    updatePlayBtn();
    clearInterval(timer);
    timer = setInterval(() => {
      if (!isPlaying) return;
      progress++;
      if (progress >= duration) {
        if (isRepeat) { progress = 0; }
        else { autoNextTrack(); return; }
      }
      updateProgress();
    }, 1000);
  }
 
  function togglePlay() {
    if (!currentTrackData) {
      const t = recentTracks[0];
      loadTrack(t.title, t.artist, t.emoji, t.bg);
      return;
    }
    isPlaying = !isPlaying;
    updatePlayBtn();
  }
 
  function updatePlayBtn() {
    const icon = document.getElementById("play-icon");
    icon.className = isPlaying ? "ti ti-player-pause-filled" : "ti ti-player-play-filled";
  }
 
  function autoNextTrack() {
    const all = [...recentTracks, ...trendingTracks];
    const t = all[Math.floor(Math.random() * all.length)];
    loadTrack(t.title, t.artist, t.emoji, t.bg);
  }
 
  function nextTrack() { autoNextTrack(); }
  function prevTrack() {
    if (progress > 4) { progress = 0; updateProgress(); return; }
    autoNextTrack();
  }
 
  function updateProgress() {
    const pct = duration > 0 ? (progress / duration) * 100 : 0;
    document.getElementById("prog-fill").style.width = pct + "%";
    document.getElementById("cur-time").textContent  = fmtTime(progress);
    document.getElementById("dur-time").textContent  = fmtTime(duration);
    // Move dot
    const dot = document.getElementById("prog-dot");
    dot.style.left = pct + "%";
    dot.style.right = "auto";
    dot.style.transform = "translate(-50%, -50%)";
  }
 
  function fmtTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m + ":" + (sec < 10 ? "0" : "") + sec;
  }
 
  function seekTo(e) {
    const bar  = document.getElementById("prog-track");
    const rect = bar.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    progress   = Math.floor(pct * duration);
    updateProgress();
  }
 
  /* ── Like ── */
  function toggleLike() {
    isLiked = !isLiked;
    updateLikeBtn();
  }
  function updateLikeBtn() {
    const btn  = document.getElementById("like-btn");
    const icon = document.getElementById("like-icon");
    if (isLiked) {
      btn.classList.add("liked");
      icon.className = "ti ti-heart-filled";
    } else {
      btn.classList.remove("liked");
      icon.className = "ti ti-heart";
    }
  }
 
  /* ── Shuffle ── */
  function toggleShuffle() {
    isShuffle = !isShuffle;
    const btn = document.getElementById("shuffle-btn");
    isShuffle ? btn.classList.add("active") : btn.classList.remove("active");
  }
 
  /* ── Repeat ── */
  function toggleRepeat() {
    isRepeat = !isRepeat;
    const btn = document.getElementById("repeat-btn");
    isRepeat ? btn.classList.add("active") : btn.classList.remove("active");
  }
 
  /* ── Mute ── */
  function toggleMute() {
    isMuted = !isMuted;
    const icon = document.getElementById("vol-icon");
    const fill = document.getElementById("vol-fill");
    icon.className   = isMuted ? "ti ti-volume-off" : "ti ti-volume";
    fill.style.width = isMuted ? "0%" : volume + "%";
  }
 
  /* ── Volume ── */
  function setVol(e) {
    const bar  = document.getElementById("vol-track");
    const rect = bar.getBoundingClientRect();
    volume = Math.round(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
    document.getElementById("vol-fill").style.width = volume + "%";
    if (volume === 0) {
      isMuted = true;
      document.getElementById("vol-icon").className = "ti ti-volume-off";
    } else {
      isMuted = false;
      document.getElementById("vol-icon").className = "ti ti-volume";
    }
  }
 
  /* ── Sidebar nav ── */
  function setNav(el) {
    document.querySelectorAll(".nav-link").forEach(n => n.classList.remove("active"));
    el.classList.add("active");
  }
 
  /* ──────────────────────────────────────
     INIT
  ────────────────────────────────────── */
  setGreeting();
  buildSidebarPlaylists();
  buildQuickGrid();
  buildCards(recentTracks,  "row-recent");
  buildCards(mfyTracks,     "row-mfy");
  buildCards(artists,       "row-artists");
  buildCards(trendingTracks,"row-trending");
 
  // Update greeting every minute
  setInterval(setGreeting, 60000);