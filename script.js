document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const oldStatus = btn.nextElementSibling;
        if (oldStatus && oldStatus.id === 'status') oldStatus.remove();

        let status = document.createElement('div');
        status.id = 'status';
        status.innerHTML = '<span class="spinner"></>spanOpening link...';
        btn.insertAdjacentElement('afterend', status);

        setTimeout(() => {
            window.open(btn.href, '_blank');
        status.remove();
        }, 800);
    });
});
