let createUser = new CreateUser();
let validation = new Validation();
//FUNCTION GET USER INFO
let getUserInfo = () => {
  let userEmail = document.querySelector("#email").value;
  let userPass = document.querySelector("#password").value;
  let userConfPass = document.querySelector("#confirmPassword").value;
  let userName = document.querySelector("#name").value;
  let userPhone = document.querySelector("#phone").value;
  // TRY CATCH: using to prevent user inpects and edit 'checked' at the input element.
  try {
    var userGenderInp = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    if (userGenderInp === "true") {
      userGenderInp = true;
    } else {
      userGenderInp = false;
    }
  } catch (error) {
    var userGenderInp = null;
  }
  let userGender = userGenderInp;

  //   <----------------------------------------->
  //CHECK VALIDATION
  var isValid = true;

  // EMAIL
  isValid &=
    validation.checkBlank(userEmail, "#emailErr", "* Email không để trống") &&
    validation.checkReg(
      userEmail,
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "#emailErr",
      "* Email không hợp lệ"
    );

  // PASS
  isValid &=
    validation.checkBlank(userPass, "#passErr", "* Vui lòng nhập mật khẩu") &&
    validation.checkLength(
      userPass.length,
      8,
      16,
      "#passErr",
      "* Độ dài mật khẩu từ 8-16 ký tự (Có ký tự in Hoa, số và ký tự đặc biệt)"
    ) &&
    validation.checkReg(
      userPass,
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/,
      "#passErr",
      "* Mật khẩu phải có chữ in Hoa, số và ký tự đặc biệt"
    ) &&
    validation.checkConfirmPass(
      userPass,
      userConfPass,
      "#confirmPassErr",
      "* Mật khẩu không trùng khớp"
    );

  // NAME
  isValid &=
    validation.checkBlank(userName, "#nameErr", "* Vui lòng nhập tên") &&
    validation.checkReg(
      userName,
      "^[A-Za-z ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$",
      "#nameErr",
      "* Tên không hợp lệ"
    );
  // PHONE
  isValid &=
    validation.checkBlank(
      userPhone,
      "#phoneErr",
      "* Vui lòng nhập số điện thoại"
    ) &&
    validation.checkLength(
      userPhone.length,
      9,
      16,
      "#phoneErr",
      "* Số điện thoại không hợp lệ"
    );
  // GENDER
  isValid &= validation.checkRadio(
    userGender,
    "#genderErr",
    "* Vui lòng chọn giới tính"
  );

  // <---------------------->
  if (isValid == true) {
    var user = new CreateUser(
      userEmail,
      userPass,
      userName,
      userPhone,
      userGender
    );
    return user;
  } else return null;
};
// FUNCTION POST DATA API
let postUser = () => {
  var user = getUserInfo();
  if (user !== null) {
    var promise = axios({
      url: `https://shop.cyberlearn.vn/api/Users/signup`,
      method: "POST",
      data: user,
    });
    promise.then(function (result) {
      console.log(result.data);
      document.querySelector("#myModal").classList.add("show");
      document.querySelector("#myModal").style = "display: block";

      // window.location.reload;
    });
    promise.catch(function (error) {
      console.log(error);
    });
  }
};
