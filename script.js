document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const oldStatus = btn.nextElementSibling;
        if (oldStatus && oldStatus.id === 'status') oldStatus.remove();

        let status = document.createElement('div');
        status.id = 'status';
        status.innerHTML = '<span class="spinner"></>spanOpening link...';
        btn.insertAdjacentElement('afterend', status);

        const url = btn.href;
        setTimeout(() => {
            window.open(url, '_blank');
        }, 10000);
        
        setTimeout(() => status.remove(), 10000);
    });
});