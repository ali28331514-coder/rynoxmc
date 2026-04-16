// جلب الـ IP فقط
async function fetchIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        document.getElementById('ip').textContent = data.ip || 'غير معروف';
    } catch (error) {
        document.getElementById('ip').textContent = 'خطأ';
    }
}

window.addEventListener('load', fetchIP);
