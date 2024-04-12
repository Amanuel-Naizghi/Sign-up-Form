let password=document.querySelector("#password");
let conPassword=document.querySelector("#conPassword");
let myForm=document.querySelector("form");
let invalidPassword=document.querySelector("#invalid-password");

function myFunction(){
    if(password.value!=conPassword.value){
        invalidPassword.textContent="Password does't match!";
    }
    else{
        invalidPassword.textContent="";
    }
}
myForm.addEventListener("submit",(e)=>{
    if(password.value!=conPassword.value){
        e.preventDefault();
    }
});
