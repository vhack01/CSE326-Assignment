function validateLogin() {
    var eml = document.getElementById("inp_l1").value;
    var pass = document.getElementById("inp_l2").value;

    if(eml.length == 0 || pass.length == 0) {
        alert("Enter Email Id and Password.");
    }
}