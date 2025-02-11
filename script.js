// نمایش شماره تلفن
function showNumber() {
    const phoneNumber = "+989399743277";
    const phoneElement = document.getElementById('phone-number');

    // بررسی اینکه آیا شماره قبلاً نمایش داده شده یا نه
    if (phoneElement.innerText === "") {
        phoneElement.innerText = phoneNumber;
        phoneElement.style.animation = "colorChange 3s infinite alternate";
    } else {
        phoneElement.innerText = "";  // اگر دوباره کلیک بشه شماره پنهان میشه
    }
}

// نمایش ساعت لحظه‌ای
document.addEventListener("DOMContentLoaded", function() {
    updateTime();
    setInterval(updateTime, 1000);
});

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}
