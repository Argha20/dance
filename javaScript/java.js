function formData(){
    var email = document.forms["subform"]["emailadd"];

    if(email.value == ""){
        window.alert("Please Enter Your Email");
        email.focus();
        return false;
    }

    return true;
}