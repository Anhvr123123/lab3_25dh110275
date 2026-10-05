function updateClock() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Chuyển đổi sang định dạng 12 giờ (12-hour format)
    hours = hours % 12;
    hours = hours ? hours : 12; // Giờ '0' sẽ chuyển thành '12'

    // Thêm số 0 phía trước nếu giá trị nhỏ hơn 10 (ví dụ: 04, 09)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Định dạng chuỗi hiển thị HH:MM:SS AM/PM
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    // Gán dữ liệu vào thẻ HTML
    document.getElementById('digitalClock').innerText = timeString;
}

// Gọi hàm cập nhật thời gian mỗi 1000ms (1 giây)
setInterval(updateClock, 1000);

// Chạy hàm ngay lập tức khi tải trang để không bị trễ 1 giây đầu tiên
updateClock();