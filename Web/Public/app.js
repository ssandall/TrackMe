const devices = JSON.parse(localStorage.getItem('devices')) || [];
const users = JSON.parse(localStorage.getItem('users')) || [];

$('#navbar').load('navbar.html');

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
    location.href = '/device-list';
});

$('#login').on('click', function() { 
    const username = $('#username').val();
    const password = $('#password').val();
});

$('#register-account').on('click', function() {
    const userName = $('#username').val();
    const password = $('#password').val();
    const confPassword = $('#passwordConfirm').val()
    const exists = users.find((user => user.name === userName));
        if (exists){
            $('#messageError').append('<p class="alert alert-danger" style="font-style: italic" >User already exists. Click <a href="/login">here</a> to login. </p>');

        }
        else if (password !== confPassword){
            $('#passwordError').append('<p class="alert alert-danger" style="font-style: italic"> ERROR: Password does not match </p>')
        }
        else
        {
            console.log('created user')
            users.push({name: userName, password: confPassword})
            localStorage.setItem('users', JSON.stringify(users));
            location.href = "/login";
        }
});

$('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log(`command is: ${command}`);
});

