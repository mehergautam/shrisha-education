(function () {
  const grid = document.getElementById('coursesGrid');
  courses.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'c-card reveal';
    card.innerHTML = `
      <div class="c-img">
        <img src="${c.img}" alt="${c.title}" loading="lazy">
        <span class="c-badge">${c.tag}</span>
      </div>
      <div class="c-body">
        <div class="c-title">${c.title}</div>
        <div class="c-desc">${c.desc.substring(0, 90)}…</div>
        <div class="c-meta">
          <span class="c-hrs">⏱ ${c.hrs}</span>
          <button class="c-btn" onclick="openModal(${i})">Know More</button>
        </div>
      </div>`;
    grid.appendChild(card);
    revealObserver.observe(card);
  });
})();
