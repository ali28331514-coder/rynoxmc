function copyIP() {
    navigator.clipboard.writeText('rynox.mcsh.io').then(() => {
        const btn = document.querySelector('.copy-ip');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> تم النسخ!';
        btn.style.background = '#00ff88';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'rgba(255, 255, 255, 0.2)';
        }, 2000);
    });
}

// تأثير حركة عند التحميل
window.addEventListener('load', () => {
    document.querySelectorAll('.info-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.animation = 'slideUp 0.5s ease-out forwards';
    });
});
