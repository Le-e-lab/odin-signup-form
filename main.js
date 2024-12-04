document.querySelector(".create").onclick = function(){

    var password = document.querySelector(".password").value;
    var confirmPassword = document.querySelector(".confirmPassword").value;

    if (password == ""){
        alert("Please enter a password");
    }
    else if (password != confirmPassword){
        alert("Passwords do not match");
        return false;
    }
    else if (password == confirmPassword) {
        alert("Password created successfully");
        return true;
    }
}