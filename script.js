// Clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Jalali Date
function updateDate() {
    const now = new Date();
    const jDate = jalaali.toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate());
    document.getElementById('date').textContent = `${jDate.jy}/${jDate.jm}/${jDate.jd}`;
}
updateDate();
