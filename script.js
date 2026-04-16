// جلب IP المستخدم
async function getUserIP() {
    try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        document.getElementById('ip').textContent = data.ip;
    } catch {
        document.getElementById('ip').textContent = 'غير معروف';
    }
}

// تشغيل عند تحميل الصفحة
window.addEventListener('load', getUserIP);
