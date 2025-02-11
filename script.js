// نمایش شماره تلفن
function showNumber() {
    const phoneNumber = "+989399743277";
    document.getElementById('phone-number').innerText = phoneNumber;
}

// نمایش ساعت لحظه‌ای
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
