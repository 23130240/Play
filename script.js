function openBookingForm(restaurantName) {
    document.getElementById("selected-restaurant").innerText = "Bạn đang đặt chỗ tại: " + restaurantName;
    document.getElementById("booking-form").style.display = "block";
}

function submitBooking() {
    let name = document.getElementById("name").value;
    let people = document.getElementById("people").value;
    
    if (name === "" || people === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    
    alert("Đặt chỗ thành công!\nTên: " + name + "\nSố người: " + people);
    document.getElementById("booking-form").style.display = "none";
}