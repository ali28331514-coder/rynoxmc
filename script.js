// جلب معلومات الـ IP والموقع
async function fetchIPInfo() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        document.getElementById('ip').textContent = data.ip || 'Unknown';
        document.getElementById('country').textContent = data.country_name || 'Unknown';
        document.getElementById('city').textContent = data.city || 'Unknown';
        document.getElementById('isp').textContent = data.org || 'Unknown';
        
    } catch (error) {
        console.error('Error fetching IP info:', error);
        document.getElementById('ip').textContent = 'Error';
        document.getElementById('country').textContent = 'Error';
        document.getElementById('city').textContent = 'Error';
        document.getElementById('isp').textContent = 'Error';
    }
}

window.addEventListener('load', fetchIPInfo);
