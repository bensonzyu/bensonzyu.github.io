const roles = ["Data & AI Consultant", "Analytics Consultant", "Data Engineer"];
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
