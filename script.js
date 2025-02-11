// انیمیشن لودینگ
window.onload = function() {
    document.getElementById("preloader").style.display = "none";
};

// ساعت ایران
function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('clock').innerText = now.toLocaleTimeString('fa-IR', options);
}
setInterval(updateClock, 1000);
updateClock();

// تاریخ شمسی، میلادی و قمری
function updateDate() {
    const now = new Date();
    document.getElementById('jalali-date').innerText = new Intl.DateTimeFormat('fa-IR').format(now);
    document.getElementById('gregorian-date').innerText = new Intl.DateTimeFormat('en-GB').format(now);
    document.getElementById('hijri-date').innerText = new Intl.DateTimeFormat('ar-TN-u-ca-islamic').format(now);
}
updateDate();
