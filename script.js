function formValidation() {
  let uemail = document.register.email;
  if (validateEmail(uemail)) {

  }
  return false;
}


function validateEmail(uemail) {
  let uemail_len = uemail.value.length;
  let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail_len == 0) {
    alert("Email should not be empty!");
    uemail.focus();
    return false;
  }
  if (uemail.value.match(emailformat)) {
    alert("Thankyou!");
    window.location.reload();
    return true;
  }
  else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}