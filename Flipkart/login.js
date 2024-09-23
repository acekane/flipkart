const mobileNumberInput = document.querySelector(".mobile-number");
const requestOtpButton = document.querySelector(".request");

requestOtpButton.addEventListener("click", () => {
  const mobileNumber = mobileNumberInput.value;
  localStorage.setItem("mobileNumber", mobileNumber);

  // Check if the mobile number is correct
  if (mobileNumber === "8318112489") {
    mobileNumberInput.value = "";

    mobileNumberInput.type = "number";
    mobileNumberInput.placeholder = "Enter OTP";

    // Change the requestOtpButton text to Login
    requestOtpButton.innerText = "Login";

    // Add an event listener to the requestOtpButton to handle login
    requestOtpButton.addEventListener("click", () => {
      const otp = mobileNumberInput.value;
      // Check if the OTP is correct
      if (otp === "123456") {
        // Login successfully, redirect to Index.html
        window.location.href = "Index.html";
        alert("Login successful");
      } else {
        alert("Invalid OTP");
      }
    });
  }
});
