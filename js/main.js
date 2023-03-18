function formValidation() {
  var fullName = document.getElementById("fullName").value;
  var singUpMail = document.getElementById("singUpMail").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var errorTxt = "";

  if (fullName.length < 3) {
    errorTxt = "Please Enter Valid UserName";
    error.innerHTML = errorTxt;
    error.style.color = "rgb(100, 2, 2)";
  } else if (singUpMail.indexOf("@") == -1) {
    errorTxt = "Please Enter Valid Email";
    error.innerHTML = errorTxt;
    error.style.color = "rgb(100, 2, 2)";
  } else if (password.length < 8) {
    errorTxt = "Please Enter more than 8 character in your Password";
    error.innerHTML = errorTxt;
    error.style.color = "rgb(100, 2, 2)";
  } else {
    errorTxt = "Success";
    error.innerHTML = errorTxt;
    error.style.color = "black";
  }
}

function loginFormValidation() {
  var loginMail = document.getElementById("loginMail").value;
  var loginPassword = document.getElementById("loginPassword").value;
  var error = document.getElementById("err");
  var errorTxt = "";

  if (loginMail.indexOf("@") == -1) {
    errorTxt = "Please Enter Valid Email";
    error.innerHTML = errorTxt;
    error.style.color = "red";
  } else if (loginPassword.length < 8) {
    errorTxt = "Please Enter more than 8 character in your Password";
    error.innerHTML = errorTxt;
    error.style.color = "red";
  } else {
    errorTxt = "Success";
    error.innerHTML = errorTxt;
    error.style.color = "green";
  }
}
