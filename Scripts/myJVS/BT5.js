document.addEventListener("DOMContentLoaded", function () {
    var btnStart = document.getElementById("btnStart");
    var btnReset = document.getElementById("btnReset");

    // Hàm chạy tiến trình tới mức % chỉ định
    function runProgress(id, targetPercent) {
        var elem = document.getElementById(id);
        var width = 0;
        var timer = setInterval(function () {
            if (width >= targetPercent) {
                clearInterval(timer);
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerText = width + "%";
            }
        }, 20);
    }

    // Hàm chạy tất cả các thanh
    function startAllProgress() {
        runProgress("bar1", 75);
        runProgress("bar2", 88);
        runProgress("bar3", 44);
    }

    // Hàm đặt lại trạng thái ban đầu
    function resetAllProgress() {
        ["bar1", "bar2", "bar3"].forEach(function (id) {
            var elem = document.getElementById(id);
            elem.style.width = "0%";
            elem.innerText = "0%";
        });
    }

    // Gán sự kiện cho các nút
    btnStart.addEventListener("click", startAllProgress);
    btnReset.addEventListener("click", resetAllProgress);

    // Tự động chạy ngay khi mở trang
    startAllProgress();
});