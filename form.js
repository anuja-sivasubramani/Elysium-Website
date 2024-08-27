
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const fatherName = document.getElementById("fatherName").value;
    const motherName = document.getElementById("motherName").value;
    const gender = document.getElementsByName("gender");
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const parentPhoneNumber= document.getElementById("parentPhoneNumber").value;
    const qualification = document.getElementById("qualification").value;
    const category = document.getElementById("category").value;
    const walkIn = document.getElementById("walkIn").value;
    
    
    const nameError = document.getElementById("name-error");
    const dobError = document.getElementById("dob-error");
    const fatherNameError = document.getElementById("fatherName-error");
    const motherNameError = document.getElementById("motherName-error");
    const genderError = document.getElementById("gender-error");
    const emailError = document.getElementById("email-error");
    const phoneNumberError = document.getElementById("phoneNumber-error");
    const parentPhoneNumberError= document.getElementById("parentPhoneNumber-error");
    const qualificationError = document.getElementById("qualification-error");
    const categoryError = document.getElementById("category-error");
    const walkInError = document.getElementById("walkIn-error");


    nameError.textContent = "";
    dobError.textContent = "";
    fatherNameError.textContent = "";
    motherNameError.textContent = "";
    genderError.textContent="";
    emailError.textContent = "";
    phoneNumberError.textContent = "";
    parentPhoneNumberError.textContent = "";
    qualificationError.textContent = "";
    categoryError.textContent = "";
    walkInError.textContent = "";

    
    let isValid = true;

    let selected = false;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (dob === "") {
        dobError.textContent = "Please enter your DOB.";
        isValid = false;
    }

    if (fatherName === "" || /\d/.test(fatherName)) {
        fatherNameError.textContent = "Please enter your Father name properly.";
        isValid = false;
    }

    if (motherName === "" || /\d/.test(motherName)) {
        motherNameError.textContent = "Please enter your Mother name properly.";
        isValid = false;
    }

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        genderError.textContent = "Please select a Gender.";
    } 

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (phoneNumber === "" || !/\d/.test(phoneNumber)||phoneNumber.length < 10) {
        phoneNumberError.textContent = "Please enter a valid Phone Number.";
        isValid = false;
    }
    if (parentPhoneNumber === "" || !/\d/.test(parentPhoneNumber)||parentPhoneNumber.length < 10) {
        parentPhoneNumberError.textContent = "Please enter a valid Phone Number.";
        isValid = false;
    }
    if (qualification === "") {
        qualificationError.textContent = "Please enter your qualification properly.";
        isValid = false;
    }
    
    if (walkIn === "") {
        walkInError.textContent = "Please select your walk-in.";
        isValid = false;
    }
    if (category === "") {
        categoryError.textContent = "Please enter your category properly.";
        isValid = false;
    }
    else{
        const formDatas = new FormData(event.target);
        const formValuess = Array.from(formDatas.entries()).map(entry => entry[1]);
    
        let studentDatas = localStorage.getItem('studentDatas');
        if (!studentDatas) {
            studentDatas = [];
        } else {
            studentDatas = studentDatas.split('|');
        }
    
        studentDatas.push(formValuess.join(','));
    
        localStorage.setItem('studentDatas', studentDatas.join('|'));
    
        event.target.reset();
        window.location.href = 'pending.html';
    }
    

    return isValid;

});