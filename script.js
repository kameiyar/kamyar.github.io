// به‌روزرسانی زنده ساعت و تاریخ شمسی
function updateClockAndDate() {
    const now = new Date();

    // نمایش ساعت
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('clock').innerText = now.toLocaleTimeString('fa-IR', timeOptions);

    // نمایش تاریخ شمسی
    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    document.getElementById('date').innerText = now.toLocaleDateString('fa-IR', dateOptions);
}

// هر ثانیه یک بار ساعت و تاریخ به‌روزرسانی می‌شود
setInterval(updateClockAndDate, 1000);
updateClockAndDate();
