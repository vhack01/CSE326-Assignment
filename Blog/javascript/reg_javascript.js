function validate() {
    var name = document.getElementById("inp1").value;
    var num = document.getElementById("inp2").value;
    var email = document.getElementById("inp3").value;
    var pass = document.getElementById("inp4").value;
    var cpass = document.getElementById("inp5").value;
    var gen = document.getElementsByName("gen");

    var lan = document.getElementsByClassName("chk1");

    if(name.length == 0 || num.length==0 || email.length==0) {
        alert("Enter Name, Moible, Email");
    }
    if(!(gen[0].checked) && !(gen[1].checked) && !(gen[2].checked)){
        alert("Select gender");
    }
    if(!(lan[0].checked) && !(lan[1].checked) && !(lan[2].checked)){
        alert("Select Language");
    }

    if(isNaN(num) || num.length!=10){
        alert("Enter correct number")
    }

    if(pass.length == 0 || cpass.length == 0){
        alert("Enter password");
    }
    if(pass != cpass){
        alert("Password does not match");
    }else{
        alert("password changed");
    }
        
}