document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn reload trang

    // Ẩn nút xác nhận
    submitButton.style.display = "none";

    // Khóa các ô nhập để người dùng không thể chỉnh sửa sau khi xác nhận
    document.querySelectorAll(".infor").forEach((input) => {
      input.setAttribute("disabled", true);
      input.style.backgroundColor = "#e0e0e0"; // Đổi màu để nhìn rõ đã khóa
    });
  });
});
