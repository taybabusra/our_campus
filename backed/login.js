function btn_login() {
    let userEmail = document.getElementById('username').value;
    let userpwd = document.getElementById('password').value;

    let userData = {
        email : userEmail,
        password : userpwd,
    };
    
    let converteduserdata = JSON.stringify(userData);
    localStorage.setItem('userlogin', converteduserdata);
    location.href = './index.html';
}

function getdata() {
    let usergetdata = localStorage.getItem('userlogin');
    let convertedvalue = JSON.parse(usergetdata)

    console.log(convertedvalue);

}

getdata();