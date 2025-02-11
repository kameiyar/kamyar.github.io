// به‌روزرسانی ساعت
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// نمایش شماره تلفن
function showNumber() {
    const phoneNumber = "+989399743277";
    document.getElementById('phoneNumber').textContent = phoneNumber;
}
