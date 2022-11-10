function clearerror(){
error = document.getElementsByClassName("formerror");
 for(let item of error)
item.innerHTML="";
}
function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validateform(){
    clearerror();
    var name= document.forms["myForm"]["Name"].value;
if(name.length<5){
    seterror("fname","*The name is too short")
        return false;
}
if(name.length>15){
    seterror("fname","*The name is too long")
        return false;
}
var email= document.forms["myForm"]["Email"].value;
if(email.length<5){
    seterror("femail","*The email is too short")
        return false;
}
if(email.length>25){
    seterror("femail","*The email is too long")
        return false;
}
var phone = document.forms["myForm"]["Phone number"].value;
if(phone.length!=10){
    seterror("fphone","*Phone number should be upto 10 digits")
        return false;
}

}