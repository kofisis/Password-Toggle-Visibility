var targetShow = document.querySelector("#show-password"); // targeting the show password ID
var passWord = document.querySelector("#password"); // target the value of password

targetShow.addEventListener("click",function(event){
  if(event.target.checked){
    password.setAttribute("type","text"); // changes password to text when checked
  }
  else{
    password.setAttribute("type","password");// changes text back to password when unchecked
  }
})


