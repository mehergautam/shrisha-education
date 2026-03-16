function openModal(i) {
  const c = courses[i];
  document.getElementById('modalTag').textContent = c.sector;
  document.getElementById('modalTitle').textContent = c.title;
  document.getElementById('modalImg').src = c.img;
  document.getElementById('modalDesc').textContent = c.desc;
  document.getElementById('modalDetails').innerHTML = c.details.map(d => `<div class="md-row"><div class="md-icon">✓</div>${d}</div>`).join('');
  document.getElementById('modalFormArea').style.display = 'block';
  document.getElementById('successMsg').style.display = 'none';
  document.getElementById('courseModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) { if (e.target === document.getElementById('courseModal')) closeModalDirect(); }
function closeModalDirect() { document.getElementById('courseModal').classList.remove('open'); document.body.style.overflow = ''; }