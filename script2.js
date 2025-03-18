document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    submitButton.style.display = "none";

    // Khóa các ô nhập và hiển thị đáp án đã chọn
    document.querySelectorAll(".infor").forEach((input) => {
      input.setAttribute("disabled", true);
      input.style.backgroundColor = "#e0e0e0";

      // Nếu input được chọn, hiển thị đáp án
      if (
        input.checked ||
        (input.type === "textarea" && input.value.trim() !== "")
      ) {
        const questionContainer = input.closest(".option").parentElement;
        const selectedAnswerElement =
          questionContainer.querySelector(".selected-answer");

        if (selectedAnswerElement) {
          selectedAnswerElement.style.display = "inline-block";
          selectedAnswerElement.textContent = `Your answer: ${input.value}`;
        }
      }
    });

    // Xử lý textarea
    document.querySelectorAll("textarea.infor").forEach((textarea) => {
      const questionContainer = textarea.closest(".option").parentElement;
      const selectedAnswerElement =
        questionContainer.querySelector(".selected-answer");

      if (textarea.value.trim() !== "") {
        selectedAnswerElement.style.display = "inline";
        selectedAnswerElement.textContent = `Your answer: ${textarea.value}`;
      }
    });
  });
});
