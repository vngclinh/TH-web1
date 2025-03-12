flatpickr("#datepicker", {
  dateFormat: "d-m-Y", // Định dạng ngày tháng
  enableTime: false, // Tắt chọn giờ
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll(".field .item");
  const errorTexts = document.querySelectorAll(".error-txt");

  // Ẩn lỗi ban đầu
  errorTexts.forEach((error) => (error.style.display = "none"));

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    let isValid = true;

    inputs.forEach((input, index) => {
      if (input.value.trim() === "") {
        errorTexts[index].style.display = "block";
        isValid = false;
      } else {
        errorTexts[index].style.display = "none";
      }
    });
    // Kiểm tra định dạng sđt
    const cccdInput = document.getElementById("cccd");
    const cccdError = cccdInput.nextElementSibling;
    const cccdRegex = /^\d{9,12}$/; // Chỉ chấp nhận số và có độ dài từ 9-15 ký tự

    if (cccdInput.value.trim() === "") {
      cccdError.style.display = "block";
      isValid = false;
    } else if (!cccdRegex.test(cccdInput.value.trim())) {
      cccdError.textContent = "Incorrect CCCD format! Must be 9-12 digits.";
      cccdError.style.display = "block";
      isValid = false;
    } else {
      cccdError.style.display = "none";
    }
    if (isValid) {
      setTimeout(() => {
        window.location.href = "test.html"; // Chuyển hướng sau 1 giây
      }, 1000);
    }
  });
});
