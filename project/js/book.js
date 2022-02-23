function validateForm() {

    var tennguoidat = document.forms["myForm"]["TenNguoiDat"].value;
    var sodienthoai = document.forms["myForm"]["SoDienThoai"].value;
    var datkhunggio = document.forms["myForm"]["DatKhungGio"].value;
    var songuoichoi = document.forms["myForm"]["SoNguoiChoi"].value;
    var sodoichoi = document.forms["myForm"]["SoDoiChoi"].value;
    var sogio = document.forms["myForm"]["SoGio"].value;



    /////////////////////////////



    if (tennguoidat == "") {
        document.getElementById("error-TenNguoiDat").innerHTML = "Hãy điền tên của bạn.";

    } else if (tennguoidat.length > 50) {
        document.getElementById("error-TenNguoiDat").innerHTML = "Tên không dài quá 50 kí tự.";


    } else {
        document.getElementById("error-TenNguoiDat").innerHTML = "";

    }
    //SoDienThoai

    if (sodienthoai == "") {
        document.getElementById("error-SoDienThoai").innerHTML = "Hãy điền số điện thoại của bạn.";

    } else if (sodienthoai.length > 50) {
        document.getElementById("error-SoDienThoai").innerHTML = "Số điện thoại không dài quá 50 kí tự.";


    } else {
        document.getElementById("error-SoDienThoai").innerHTML = "";
    }
    //DatKhungGio


    if (datkhunggio == "--Chọn khung giờ--") {
        document.getElementById("error-DatKhungGio").innerHTML = "Hãy chọn khung giờ muốn đặt sân.";

    } else {
        document.getElementById("error-DatKhungGio").innerHTML = "";
    }

    //SoGio

    if (sogio == "") {
        document.getElementById("error-SoGio").innerHTML = "Hãy nhập số giờ muốn đặt sân.";
    } else if (!((sogio > 0))) {
        document.getElementById("error-SoGio").innerHTML = "Chỉ được phép nhập số dương.";
    } else {
        document.getElementById("error-SoGio").innerHTML = "";
    }

    //SoNguoiChoi

    if (songuoichoi == "") {
        document.getElementById("error-SoNguoiChoi").innerHTML = "Hãy nhập số người chơi.";
    } else if (!((songuoichoi > 0) && (songuoichoi % 1 == 0))) {
        document.getElementById("error-SoGio").innerHTML = "Chỉ được phép nhập số nguyên dương.";
    } else {
        document.getElementById("error-SoNguoiChoi").innerHTML = "";
    }
    //SoDoiChoi

    if (sodoichoi == "") {
        document.getElementById("error-SoDoiChoi").innerHTML = "Hãy nhập số đội chơi.";
    } else if (!((sodoichoi > 0) && (sodoichoi % 1 == 0))) {
        document.getElementById("error-sodoichoi").innerHTML = "Chỉ được phép nhập số nguyên dương.";
    } else {
        document.getElementById("error-SoDoiChoi").innerHTML = "";
    }

    if ((tennguoidat == "") || (sodienthoai == "") || (datkhunggio == "") || (sogio == "") || (songuoichoi == "") || (sodoichoi == "")) {
        return false;
    } else {
        return true;
    }


}