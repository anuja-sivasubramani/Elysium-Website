
function check(){
  var x=document.getElementById('user').value;
  var y=document.getElementById('password').value;
  if(x==""||y==""){
      alert("User id and Password Cannot be blank");
      return false;
  }
  else if(y.length<8){
    alert("Password must be atleast 8 characters");
  }
  else{
      location.href="Home.html";
  }
  
}


function forget(){
  const email=document.getElementById('email').value;
  const emailError = document.getElementById("email-error");

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "* Please enter a valid email address.";
    return false;
  }

  else{
      alert("Reset Link is sent to your E-mail");
  }
}

function newAcc(){
  const newUser=document.getElementById('newuser').value;
  const newPassword=document.getElementById('newpassword').value;
  const fName=document.getElementById('fName').value;
  const lName=document.getElementById('lName').value;
  const mail=document.getElementById('mail').value;

  const newUserError = document.getElementById("newuser-error");
  const newPasswordError = document.getElementById("newpassword-error");
  const fNameError = document.getElementById("fname-error");
  const lNameError = document.getElementById("lname-error");
  const mailError = document.getElementById("mail-error");

  let isValid = true;

  if (newUser === "") {
    newUserError.textContent = "* Please enter your User Name properly.";
    isValid = false;
}
if (newPassword=== "" || newPassword=== " "||newPassword.length < 8) {
  newPasswordError.textContent = "* Password must be aleast 8 character.";
  isValid = false;
}
if (fName=== "" || /\d/.test(fName)) {
  fNameError.textContent = "* Please enter First name properly.";
  isValid = false;

}
if (lName=== "" || /\d/.test(lName)) {
  lNameError.textContent = "* Please enter Last name properly.";
  isValid = false;

}
  if (mail === "" || !mail.includes("@")) {
    mailError.textContent = "* Please enter a valid email address.";
    isValid = false;

  }
console.log(isValid);
if(isValid){
  alert("Account Created. Go back to Login Page.")
}
}

function newacc()
{
    location.href="newacc.html";
}
function login()
{
    location.href="index.html";
}
function home()
{
    location.href="Home.html";
}
function register()
{
    location.href="register.html";
}
function upload()
{
    location.href="upload.html";
}
function Form()
{
    location.href="form.html";
}
function detail()
{
    location.href="details.html";
}
function pending()
{
    location.href="pending.html";
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }      
    }
  }