// نسخ IP السيرفر
function copyIP() {
    navigator.clipboard.writeText('rynox.mcsh.io').then(() => {
        alert('✅ تم نسخ IP: rynox.mcsh.io');
    });
}

// نسخ روابط التواصل الاجتماعي
document.querySelectorAll('.value a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText(this.href).then(() => {
            const originalText = this.textContent;
            this.textContent = '✅ تم النسخ!';
            this.style.color = '#00ff88';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.color = '#667eea';
            }, 1500);
        });
        window.open(this.href, '_blank');
    });
});
