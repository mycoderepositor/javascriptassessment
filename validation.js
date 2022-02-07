const form = document.querySelector('#formValidation');
const nameElement = document.getElementById('name');
var emailElement = document.getElementById("emailid");
var passwordElement = document.getElementById("createpassword");
var confirmPasswordElement = document.getElementById("confirmpassword");
var mobilenoElement = document.getElementById("mobileno");
var genderElement = document.getElementsByName("gender");
var addressElement = document.getElementById("address");
var dobElement = document.getElementById("DOB");
var locationElement = document.getElementById("location");
var genderValue;

form.addEventListener('submit', function (e) {

    var name = nameElement.value;
    var email = emailElement.value;
    var gender = document.getElementsByName("gender");
    var password = passwordElement.value;
    var confirmPassword = confirmPasswordElement.value;
    var mobileno = mobilenoElement.value;
    var address = addressElement.value;
    var dob = dobElement.value;
    var location = locationElement.value;
    let validation = false;

    const checkUsername = () => {

        if (!name.match(/^[a-zA-Z]+$/)) {
            showError(nameElement, "Only alphabet are allowed!")
            validation = true;
        }

    }

    const checkEmail = () => {
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            showError(emailElement, "You have entered an invalid email address!")
            validation = true;
        }

    }

    const checkPassword = () => {
        if (!password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
            showError(passwordElement, "password must contain at-least one alphabet letter , one number and one special character and minimum of 6 characters long.")
            validation = true;
        }
    }

    const checkConfirmPassword = () => {
        if (password != confirmPassword) {
            showError(confirmPasswordElement, "Passwords do not match.")
            validation = true;
        }

    }

    const checkMobileNumber = () => {
        if (!mobileno.match(/^([0-9]{10})+$/)) {
            showError(mobilenoElement, "You have entered an invalid Mobile No!")

            validation = true;
        }

    }


    const checkGender = () => {

        if (gender[0].checked == false && gender[1].checked == false) {
            showError(genderElement[0], "You must select your gender")

            validation = true;
        } else {
            genderValue = gender[0].checked == true ? "Male" : "Female";
        }



    }

    const checkAddress = () => {
        if (address == "") {
            showError(addressElement, "You must enter your address!")

            validation = true;
        }

    }

    const checkDob = () => {
        if (dob == "") {
            showError(dobElement, "You must select your Date Of Birth!")

            validation = true;
        }

    }

    const checkLocation = () => {
        if (location == "") {
            showError(locationElement, "You must select your Location!")

            validation = true;
        }
    }


    e.preventDefault();


    // validate forms
    checkUsername();
    checkEmail();
    checkGender();
    checkPassword();
    checkConfirmPassword();
    checkMobileNumber();
    checkDob();
    checkAddress();
    checkLocation();



    if (!validation) {
        var popup = window.open('', '', 'top=0, left=0, width=500,height=500');
        popup.document.title = "Form Details";

        popup.document.write("<p>Name : " + name + "</p>");

        popup.document.write("<p>Email : " + email + "</p>");

        popup.document.write("<p>Gender : " + genderValue + "</p>");

        popup.document.write("<p>Mobile no : " + mobileno + "</p>");

        popup.document.write("<p>Dob : " + dob + "</p>");

        popup.document.write("<p>Address : " + address + "</p>");

        popup.document.write("<p>Location : " + location + "</p>");

    }
});


const showError = (input, message) => {

    const formField = input.parentElement;
    const error = formField.querySelector('span');
    error.classList.add('error');
    error.textContent = message;
};