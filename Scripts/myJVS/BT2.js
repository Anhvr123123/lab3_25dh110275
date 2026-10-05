// Yêu cầu 1: Hàm dùng chung kiểm tra không cho phép rỗng cho các textbox
function checkRequiredField(inputId, errorId, fieldName) {
    var inputVal = document.getElementById(inputId).value.trim();
    var errElement = document.getElementById(errorId);

    if (inputVal === "") {
        errElement.innerText = "Vui lòng nhập " + fieldName;
        return false;
    } else {
        errElement.innerText = "";
        return true;
    }
}

// Yêu cầu 2: Hàm kiểm tra số điện thoại từ 10 ký số trở lên
function checkPhone() {
    var phoneVal = document.getElementById("txtPhone").value.trim();
    var errElement = document.getElementById("errPhone");

    // Kiểm tra định dạng số và độ dài >= 10
    var phoneRegex = /^[0-9]+$/;

    if (phoneVal === "") {
        errElement.innerText = "Vui lòng nhập số điện thoại";
        return false;
    } else if (!phoneRegex.test(phoneVal) || phoneVal.length < 10) {
        errElement.innerText = "Số điện thoại phải từ 10 ký số trở lên";
        return false;
    } else {
        errElement.innerText = "";
        return true;
    }
}

// Yêu cầu 3: Hàm dùng chung cho 2 nút button "Văn phòng" và "Nhà riêng"
function showLocationAlert(type) {
    if (type === "Văn phòng") {
        alert("Bạn chọn giao hàng tại văn phòng");
    } else if (type === "Nhà riêng") {
        alert("Bạn chọn giao hàng tại nhà riêng");
    }
}

// Yêu cầu 4: Hàm xử lý khi nhấn "Lưu"
function handleSave() {
    // Gọi kiểm tra cho từng trường
    var isNameValid = checkRequiredField("txtName", "errName", "tên");
    var isAddressValid = checkRequiredField("txtAddress", "errAddress", "địa chỉ nhận hàng");
    var isCityValid = checkRequiredField("txtCity", "errCity", "tỉnh/thành phố");
    var isDistrictValid = checkRequiredField("txtDistrict", "errDistrict", "quận/huyện");
    var isWardValid = checkRequiredField("txtWard", "errWard", "phường/xã");

    // Kiểm tra riêng cho số điện thoại
    var isPhoneValid = checkPhone();

    // Kiểm tra tổng thể
    if (isNameValid && isAddressValid && isCityValid && isDistrictValid && isWardValid && isPhoneValid) {
        alert("Lưu thông tin thành công");
    } else {
        alert("Thông tin nhập không hợp lệ");
    }
}