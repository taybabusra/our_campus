
function savedata(){

let name=document.getElementById("Name").value;
let email=document.getElementById("Email").value;
let psw=document.getElementById("Psw").value;

let user_records = new Array();
user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if(user_records.some((v)=>{return v.email==email}))
{
    alert("duplicate data");
}
else
{
    
    user_records.push({
    "Name":name,
    "Email":email,
    "Psw":psw
})


localStorage.setItem("users",JSON.stringify(user_records));
}

}