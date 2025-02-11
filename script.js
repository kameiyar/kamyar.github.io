// نمایش ساعت دیجیتالی
function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// به‌روزرسانی ساعت هر ثانیه
setInterval(updateClock, 1000);

// نمایش ساعت بلافاصله بعد از بارگذاری صفحه
updateClock();
