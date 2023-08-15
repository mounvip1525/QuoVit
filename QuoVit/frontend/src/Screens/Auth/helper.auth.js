let mobilePattern = new RegExp('^([+]\d{2}[ ])?\d{10}$')
let passwordPattern = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')

export const nameValidation = (name) => {
    if(name.length<4 || name.length>50 || name.length === 0){
        alert("Name cannot be empty and should range between 3 and 50 characters")
        return false
    } else return true
}

export const emailValidation = (email) => {
        if(!email.endsWith("@vitstudent.ac.in")){
            alert("Enter valid VIT Email")
            return false
        }
     else return true
}

export const branchValidation = (branch) => {
    if((branch.length>5 && branch.length<3) || branch.length === 0){
        alert("Use 3 to 5 characters only for branch")
        return false
    }
    else return true
}

export const mobileValidation = (mobile) => {
    if(mobilePattern.test(mobile)){
        alert("Please match the required pattern for phone number")
        return false
    } else return true
}

export const passwordValidation = (password) => {
    if(passwordPattern.test(password)){
        alert("Password should contain 1 uppercase, 1 lowercase and 1 number")
        return false
    } else return true
}

export const confirmPasswordValidation = (password) => {
    if(passwordPattern.test(password)){
        alert("Password should contain 1 uppercase, 1 lowercase and 1 number")
        return false
    } else if(document.getElementById("s-password").value !== password){
        alert("Your passwords don't match")
        console.log(password,document.getElementById("s-password"))
        return false
    }
    else return true
}