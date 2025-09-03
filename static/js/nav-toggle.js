document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.nav-toggle');
    if (!toggles.length) return;

    toggles.forEach(btn => {
        const menuId = btn.getAttribute('aria-controls') || btn.dataset.target;
        const menu = menuId ? document.getElementById(menuId) : btn.closest('header')?.querySelector('.nav-menu');
        if (!menu) return;

        // initialize state if missing
        if (!menu.hasAttribute('role')) menu.setAttribute('role', 'navigation');
        if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
        if (!menu.hasAttribute('hidden')) menu.setAttribute('hidden', '');

        btn.addEventListener('click', () => {
            const isOpen = menu.hasAttribute('hidden') === false;
            if (isOpen) {
                menu.setAttribute('hidden', '');
                btn.setAttribute('aria-expanded', 'false');
            } else {
                menu.removeAttribute('hidden');
                btn.setAttribute('aria-expanded', 'true');
            }
            menu.classList.toggle('open');
        });

        // optional: close when clicking outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target) && menu.hasAttribute('hidden') === false) {
                menu.setAttribute('hidden', '');
                btn.setAttribute('aria-expanded', 'false');
                menu.classList.remove('open');
            }
        });

        // optional: close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.hasAttribute('hidden') === false) {
                menu.setAttribute('hidden', '');
                btn.setAttribute('aria-expanded', 'false');
                menu.classList.remove('open');
            }
        });
    });
});