const roles = ["Data Analyst", "Data Engineer","Data & AI Consultant"];
const typedEl = document.getElementById('typed');
if (typedEl) {
  let roleIdx = 0, charIdx = 0, deleting = false;
  function type() {
    const current = roles[roleIdx];
    if (!deleting) {
      typedEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) { deleting = true; setTimeout(type, 1400); return; }
    } else {
      typedEl.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
    }
    setTimeout(type, deleting ? 40 : 65);
  }
  type();
}

function initTabs(groupSelector) {
  document.querySelectorAll(groupSelector).forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const target = group.getAttribute('data-target');
    const panels = document.querySelectorAll(target + ' .tab-panel');
    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  });
}
initTabs('.tab-row');

document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.previousElementSibling.querySelector('.job-details') || btn.parentElement.querySelector('.job-details');
    details.classList.toggle('open');
    btn.textContent = details.classList.contains('open') ? 'Read Less' : 'Read More';
  });
});