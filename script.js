document.addEventListener("DOMContentLoaded", function () {
    function updateClock() {
        const now = new Date();
        document.getElementById('clock').innerText = now.toLocaleTimeString('fa-IR');

        const jalaliDate = new Intl.DateTimeFormat('fa-IR').format(now);
        document.getElementById('date').innerText = jalaliDate;
    }

    setInterval(updateClock, 1000);
    updateClock();
});
