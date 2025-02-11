document.addEventListener("DOMContentLoaded", function() {
    // انیمیشن لودینگ
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
        alert("Welcome to My Web Info");
    }, 2000);

    // ساعت و تاریخ
    function updateClock() {
        const now = new Date();
        const options = { timeZone: 'Asia/Tehran' };
        document.getElementById('clock').innerText = now.toLocaleTimeString('fa-IR', options);

        const jalaliDate = new Intl.DateTimeFormat('fa-IR').format(now);
        document.getElementById('jalali-date').innerText = jalaliDate;

        const gregorianDate = now.toLocaleDateString('en-GB');
        document.getElementById('gregorian-date').innerText = gregorianDate;

        const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic').format(now);
        document.getElementById('hijri-date').innerText = hijriDate;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // لرزش دکمه‌ها
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            if (navigator.vibrate) {
                navigator.vibrate(100);
            }
        });
    });
});
