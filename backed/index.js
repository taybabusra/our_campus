
function getdata() {
    let usergetdata = localStorage.getItem('userlogin');
    let convertedvalue = JSON.parse(usergetdata);

    document.getElementById('username').innerHTML = convertedvalue.email;

    console.log(convertedvalue);

}

getdata();


function logout(){
    localStorage.clear();
    location.href = './login.html'; 
}