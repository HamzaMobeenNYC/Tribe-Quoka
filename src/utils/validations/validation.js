exports.validateName = (name) => {
    name = name.replace(/\s+/g, "").trim();
    let error = "";
    let regex = /^[a-zA-Z ]*$/;

    if (!name.length) error = "This field is required";
    else if (name.length < 3)
        error = "Name is too short. Please enter atleast 3 characters";
    else if (name.length > 30) error = "Name is too long.";
    else if (!name.match(regex)) error = "Name should only contain alphabets.";

    return error;
};


exports.fileValidation = (file, allowedMediaTypes) => {
    let fileExt = file.name.match(/\.([^\.]+)$/)[1];
    let error = false;

    if (!allowedMediaTypes.includes(fileExt)) error = true;

    return error;
};

exports.validatePassword = (password) => {
    let alphaRegex = /^.*[a-zA-Z].*$/;
    let numericRegex = /\d/;
    let error = "";

    if (
        password.length < 8 ||
        !numericRegex.test(password) ||
        !alphaRegex.test(password)
    )
        error =
            "Password must contain atleast 8 characters, one number and one alphabet";

    return error;
};

exports.validateEmail = (email) => {
    let emailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let error = "";

    if (!emailRegex.test(email)) error = "Please enter valid email.";

    return error;
};

exports.removeExtraSpaces = (value) => {
    let newString = value ? value.replace(/\s\s+/g, " ") : " ";
    return newString.trim();
};

exports.isValidUrl = (input) => {
    let res = input.match(
        /^(http(s)?:\/\/)?(www.)?([a-zA-Z0-9])+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/[^\s]*)?$/gm,
    );
    if (res == null) return false;
    return true;
};


// exports.validateAge = (selectedDate) => {
//     const moment = require("moment");

//     let date = moment(selectedDate).format("YYYY");
//     let selectedYear = new Date(selectedDate).getFullYear();
//     let currentYear = new Date().getFullYear();
//     let error = "";

//     if (date.length > 4 || selectedYear > currentYear) error = "Invalid Date";
//     else {
//         let presentDate = moment(new Date()).format("YYYY");
//         let dateDifference = presentDate - date;

//         if (dateDifference < 0 || dateDifference < 12)
//             error = "Age should be greater than 12 years";
//         if (dateDifference > 100) error = "Invalid Date";
//     }

//     return error;
// };