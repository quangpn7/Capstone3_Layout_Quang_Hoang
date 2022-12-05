function Validation() {
  // CHECK BLANK
  this.checkBlank = (value, divErr, message) => {
    if (value === "") {
      document.querySelector(divErr).innerHTML = message;
      document.querySelector(divErr).style = "display: inline-block";
      return false;
    }
    document.querySelector(divErr).innerHTML = "";
    document.querySelector(divErr).style = "display: none";
    return true;
  };
  //CHECK LENGTH
  this.checkLength = (value, min, max, divErr, message) => {
    if (value >= min && value <= max) {
      document.querySelector(divErr).innerHTML = "";
      document.querySelector(divErr).style = "display: none";
      return true;
    }
    document.querySelector(divErr).innerHTML = message;
    document.querySelector(divErr).style = "display: inline-block";
    return false;
  };

  // CHECK REGEXP VALIDATION (MAIL, PASSWORD, NAME, PHONE)
  this.checkReg = (value, regExp, divErr, message) => {
    var validChar = new RegExp(regExp);
    if (validChar.test(value)) {
      document.querySelector(divErr).innerHTML = "";
      document.querySelector(divErr).style = "display: none";
      return true;
    }
    document.querySelector(divErr).innerHTML = message;
    document.querySelector(divErr).style = "display: inline-block";
    return false;
  };
  // CHECK CONFIRM PASS
  this.checkConfirmPass = (password, confirmPass, divErr, message) => {
    if (password === confirmPass) {
      document.querySelector(divErr).innerHTML = "";
      document.querySelector(divErr).style = "display: none";
      return true;
    }
    document.querySelector(divErr).innerHTML = message;
    document.querySelector(divErr).style = "display: inline-block";
    return false;
  };
  // CHECK RADIO INPUT
  this.checkRadio = (value, divErr, message) => {
    if (value === null) {
      document.querySelector(divErr).innerHTML = message;
      document.querySelector(divErr).style = "display: inline-block";
      return false;
    }
    document.querySelector(divErr).innerHTML = "";
    document.querySelector(divErr).style = "display: none";
    return true;
  };
}
//FUNCTION REMOVE ASTERISK
let removeAsterisk = (divCheck, divAddress) => {
  if (divCheck.value !== "") {
    document.querySelector(divAddress).style = "display: none;";
  } else {
    document.querySelector(divAddress).style = "display: inline-block;";
  }
};
