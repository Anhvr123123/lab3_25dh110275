function updateSoTruong() {
    var chuyenNganh = document.getElementById("ddlChuyenNganh").value;
    var lblSoTruong = document.getElementById("lblSoTruong");

    if (chuyenNganh === "Hệ thống") {
        lblSoTruong.innerText = "Phân tích & Thiết kế";
    } else if (chuyenNganh === "Phần mềm") {
        lblSoTruong.innerText = "Lập trình";
    } else if (chuyenNganh === "Mạng máy tính") {
        lblSoTruong.innerText = "Quản lý mạng";
    }
}

function validateForm() {
    var isValid = true;

    // 1. Kiểm tra Mã sinh viên
    var maSV = document.getElementById("txtMaSV").value.trim();
    var errMaSV = document.getElementById("errMaSV");
    if (maSV.length !== 10) {
        errMaSV.innerText = "Mã sinh viên gồm 10 ký tự";
        isValid = false;
    } else {
        errMaSV.innerText = "";
    }

    // 2. Kiểm tra Họ tên
    var hoTen = document.getElementById("txtHoTen").value.trim();
    var errHoTen = document.getElementById("errHoTen");
    if (hoTen === "" || hoTen.length >= 30) {
        errHoTen.innerText = "Họ tên không rỗng và < 30 ký tự";
        isValid = false;
    } else {
        errHoTen.innerText = "";
    }

    // 3. Kiểm tra Tuổi
    var tuoiVal = document.getElementById("txtTuoi").value.trim();
    var tuoi = parseInt(tuoiVal, 10);
    var errTuoi = document.getElementById("errTuoi");

    if (isNaN(tuoi) || tuoi < 18) {
        errTuoi.innerText = "Tuổi phải 18 trở lên";
        isValid = false;
    } else {
        errTuoi.innerText = "";
    }

    // 4. Ngoại ngữ
    var chkBoxes = document.getElementsByName("chkNgoaiNgu");
    var selectedLanguages = [];
    for (var i = 0; i < chkBoxes.length; i++) {
        if (chkBoxes[i].checked) {
            selectedLanguages.push(chkBoxes[i].value);
        }
    }

    var resNgoaiNgu = document.getElementById("resNgoaiNgu");
    if (selectedLanguages.length > 0) {
        resNgoaiNgu.innerText = selectedLanguages.join(" và ");
    } else {
        resNgoaiNgu.innerText = "";
    }

    // 5. Trạng thái Đăng ký
    var lblStatus = document.getElementById("lblStatus");
    if (isValid) {
        lblStatus.className = "success-msg";
        lblStatus.innerText = "Bạn đã đăng ký thành công";
    } else {
        lblStatus.className = "err-msg";
        lblStatus.innerText = "Bạn phải nhập lại cho đúng";
    }
}