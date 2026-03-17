function show(){
let p = document.getElementById("pass");
p.type = p.type === "password" ? "text" : "password";
}

function change(n){
let i = document.getElementById("img");


i.style.opacity = 0;

setTimeout(() => {

if(n==1) i.src="undraw_login_weas.svg";
if(n==2) i.src="undraw_enter_nwx3.svg";
if(n==3) i.src="undraw_secure-password_9qv4.svg";


i.style.opacity = 1;

},150);
}