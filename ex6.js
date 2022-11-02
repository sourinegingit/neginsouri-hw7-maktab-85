// const form=document.getElementById('form');
// const firstName=document.getElementById('firstName');
// const lastName=document.getElementById('lastName');
// const email=document.getElementById('email');
// const password=document.getElementById('password');
// const middleName=document.getElementById('middleName');
// const course=document.getElementById('course');
// const Male=document.getElementById('Male');
// const other=document.getElementById('other');
// const Female=document.getElementById('Female');
// const phone=document.getElementById('phone');
// const textarea=document.getElementById('textarea');
// const Retypepassword=document.getElementById('Retypepassword');
// const btn=document.getElementById('btn');



function validation(){
  
    
    // let firstName=document.forms['myform']['firstName'].value;
    // let middleName=document.forms['myform']['middleName'].value;
    // let lastName=document.forms['myform']['lastName'].value;
    // let course=document.forms['myform']['course'].value;
    // let gender=document.forms['myform']['gender'].value;
    // let phone=document.forms['myform']['phone'].value;
    // let textarea=document.forms['myform']['textarea'].value;
    // let email=document.forms['myform']['email'].value;
    // let password=document.forms['myform']['password'].value;
    // let Retypepassword=document.forms['myform']['Retypepassword'].value;
    

let form=document.getElementById('form');
let firstName=document.getElementById('firstName').value;
let lastName=document.getElementById('lastName').value;
let email=document.getElementById('email').value;
let middleName=document.getElementById('middleName').value;
let course=document.getElementById('course').value;
let gender=document.querySelector('input[name="gender"]:checked');
let Male=document.getElementById(Male);
let Female=document.getElementById(Female);
let other=document.getElementById(other);
let phone=document.getElementById('phone').value;
let Address=document.getElementById('Address').value;
let password=document.getElementById('password').value;
let Retypepassword=document.getElementById('Retypepassword').value;

    if(firstName==""){
        alert('Enter the name');
        return false;
    }
    if(!isNaN(firstName)){
        alert('name should be in charectore');
        return false;
    }
    if(middleName==""){
        alert('Enter the middleName');
        return false;
    }
    if(!isNaN(middleName)){
        alert('middleName should be in charectore');
        return false;
    }

    if(lastName==""){
        alert('Enter the lastName');
        return false;
    }
    if(!isNaN(lastName)){
        alert('lastName should be in charectore');
        return false;
    }
    if(course=="select a course"){
        alert("select your course");
        return flasel;
    }
   
   if(gender!=null){
    alert(gender.value);
    return false;
   }

    if(phone==""){
        alert("enter phone no.");
        return false;
    }
    if(isNaN(phone)){
        alert("phone number should be in digit.");
        return false;
    }

    if(phone.length != 11){
        alert("must be 11 digits no.");
        return false;
    }
    if(!Address){
        alert("enter adress");
        return false;
    }
    let at=email.indexOf("@");
    let dot=email.lastIndexOf('.');
    if(at<1 || dot<at+2 ||dot+2>=email.length){
        alert("not a valid email");
        return false;
    }

  
    
}

function check(){
    if(Male.checked==true){
        alert(Male.value);
    }else if(Female.checked==true){
        alert(Female.value);
    }else{
        alert(other.value);
    }
}