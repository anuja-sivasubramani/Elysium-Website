document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const names = document.getElementById("names").value;
    const dobs = document.getElementById("dobs").value;
    const fatherNames = document.getElementById("fatherNames").value;
    const motherNames = document.getElementById("motherNames").value;
    const genders = document.getElementsByName("genders");
    const emails = document.getElementById("emails").value;
    const phoneNumbers = document.getElementById("phoneNumbers").value;
    const parentPhoneNumbers = document.getElementById("parentPhoneNumbers").value;
    const qualifications = document.getElementById("qualifications").value;
    const categorys = document.getElementById("categorys").value;
    const walkIns = document.getElementById("walkIns").value;

    const nameErrors = document.getElementById("names-error");
    const dobErrors = document.getElementById("dobs-error");
    const fatherNameErrors = document.getElementById("fatherNames-error");
    const motherNameErrors = document.getElementById("motherNames-error");
    const genderErrors = document.getElementById("genders-error");
    const emailErrors = document.getElementById("emails-error");
    const phoneNumberErrors = document.getElementById("phoneNumbers-error");
    const parentPhoneNumberErrors = document.getElementById("parentPhoneNumbers-error");
    const qualificationErrors = document.getElementById("qualifications-error");
    const categoryErrors = document.getElementById("categorys-error");
    const walkInErrors = document.getElementById("walkIns-error");

    const fileErrors = {}; 
    
    const fileInputs = {
        photo: document.querySelector('input[name="photo"]'),
        aadharCard: document.querySelector('input[name="aadharCard"]'),
        communityCertificate: document.querySelector('input[name="communityCertificate"]'),
        smartCard: document.querySelector('input[name="smartCard"]'),
        incomeCertificate: document.querySelector('input[name="incomeCertificate"]'),
        tenmarksheets: document.querySelector('input[name="tenmarksheets"]'),
        twelvemarksheets: document.querySelector('input[name="twelvemarksheets"]'),
        ugmarksheets: document.querySelector('input[name="ugmarksheets"]'),
        transferCertificate: document.querySelector('input[name="transferCertificate"]'),
        bankPassbook: document.querySelector('input[name="bankPassbook"]')
    };

    nameErrors.textContent = "";
    dobErrors.textContent = "";
    fatherNameErrors.textContent = "";
    motherNameErrors.textContent = "";
    genderErrors.textContent = "";
    emailErrors.textContent = "";
    phoneNumberErrors.textContent = "";
    parentPhoneNumberErrors.textContent = "";
    qualificationErrors.textContent = "";
    categoryErrors.textContent = "";
    walkInErrors.textContent = "";

    let isValid = true;
    let selected = false;

    if (names === "" || /\d/.test(names)) {
        nameErrors.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (dobs === "") {
        dobErrors.textContent = "Please enter your DOB.";
        isValid = false;
    }

    if (fatherNames === "" || /\d/.test(fatherNames)) {
        fatherNameErrors.textContent = "Please enter your Father name properly.";
        isValid = false;
    }

    if (motherNames === "" || /\d/.test(motherNames)) {
        motherNameErrors.textContent = "Please enter your Mother name properly.";
        isValid = false;
    }

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        genderErrors.textContent = "Please select a Gender.";
        isValid = false;
    }

    if (emails === "" || !emails.includes("@")) {
        emailErrors.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (phoneNumbers === "" || !/\d/.test(phoneNumbers) || phoneNumbers.length < 10) {
        phoneNumberErrors.textContent = "Please enter a valid Phone Number.";
        isValid = false;
    }

    if (parentPhoneNumbers === "" || !/\d/.test(parentPhoneNumbers) || parentPhoneNumbers.length < 10) {
        parentPhoneNumberErrors.textContent = "Please enter a valid Phone Number.";
        isValid = false;
    }

    if (qualifications === "") {
        qualificationErrors.textContent = "Please enter your qualification properly.";
        isValid = false;
    }

    if (categorys === "") {
        categoryErrors.textContent = "Please enter your category properly.";
        isValid = false;
    }

    if (walkIns === "") {
        walkInErrors.textContent = "Please select your walk-in.";
        isValid = false;
    }


    const fileTypes = ['image/jpeg', 'image/png', 'application/pdf']; 
    const maxSize = 2 * 1024 * 1024; 

    for (const [key, fileInput] of Object.entries(fileInputs)) {
        if (fileInput.files.length === 0) {
            fileErrors[key] = "This file is required."; 
            isValid = false;
        } else {
            const file = fileInput.files[0];
            if (!fileTypes.includes(file.type)) {
                fileErrors[key] = "Invalid file type. Only JPEG, PNG, and PDF are allowed."; 
                isValid = false;
            }
            if (file.size > maxSize) {
                fileErrors[key] = "File size exceeds 2 MB."; 
                isValid = false;
            }
        }
    }

   
    for (const [key, message] of Object.entries(fileErrors)) {
        const errorElement = document.getElementById(`${key}-error`);
        errorElement.textContent = message;
    }

    if (isValid) {
        const formData = new FormData(event.target);
        const formValues = {};

   
        formData.forEach((value, key) => {
          
            if (value instanceof File) {
               
                formValues[key] = value.name;
            } else {
                formValues[key] = value;
            }
        });

        let studentData = localStorage.getItem('studentData');
        if (!studentData) {
            studentData = [];
        } else {
            studentData = studentData.split('|');
        }

        
        const dataString = Object.values(formValues).join(',');
        studentData.push(dataString);
        localStorage.setItem('studentData', studentData.join('|'));

        
        event.target.reset();

       
        window.location.href = 'details.html';
    }
});

function cancel() {
    window.location.href = 'Home.html';
}
