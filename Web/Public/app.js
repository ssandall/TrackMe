const devices = JSON.parse(localStorage.getItem('devices')) || [];

//devices.push({ user: "Mary", name: "Mary's iPhone" });
//devices.push({ user: "Alex", name: "Alex's Surface Pro" });
//devices.push({ user: "Mary", name: "Mary's MacBook" });

devices.forEach(function(device) {
    $('#devices tbody').append(`
    <tr>
    <td>${device.user}</td>
    <td>${device.name}</td>
    </tr>`
    );
   });
 
$('#add-device').on('click', function() { 
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name });
    localStorage.setItem('devices', JSON.stringify(devices));
    location.href = 'device-list.html'
    console.log(devices);
});

$('#login').on('click', function() { 
    const username = $('#username').val();
    const password = $('#password').val();

    
    let isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingAccount = users.find(user => (user.name === username) && (user.password === password));
    const incorrectPassword = users.find(user => (user.name === username) && (user.password !== password));

    if (incorrectPassword){
        $('#incorrectPassword').append('<p class="alert alert-danger" style="font-style: italic"> ERROR: Password is incorrect</p>')
    }
    else if (!existingAccount){
        $('#loginError').append('<p class="alert alert-danger" style="font-style: italic"> ERROR: Account does not exist. Click <a href="/registration">here</a> to create an account. </p>')
    }
    else {
        isAuthenticated = true;
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
        location.href = "/"
    }
});

const logout = () => {
    localStorage.removeItem('isAuthenticated');
    location.href = '/login';
}

$('#register-account').on('click', function() { 
    const username = $('#username').val();
    const password = $('#password').val();
    const passwordConfirm = $('#confirm-password').val();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.find(user => user.name === username);

    if (exists){
        $('#userError').append('<p class="alert alert-danger" style="font-style: italic"> ERROR: User already exists. Click <a href="/login">here</a> to login. </p>')
    }
    else if (password !== passwordConfirm){
        $('#passwordError').append('<p class="alert alert-danger" style="font-style: italic"> ERROR: Password does not match </p>')
    }
    else {
        users.push({ name: username, password})
        localStorage.setItem('users',JSON.stringify(users))
        console.log('Account Creation Success')
        location.href = 'login.html'
    }
});



$('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log(`command is: ${command}`);
});

$('#navbar').load('navbar.html',function(){
    //console.log('NAVBAR');
});

$('#footer').load('footer.html',function(){
    //console.log('FOOTER');
});
