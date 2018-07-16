const devices = JSON.parse(localStorage.getItem('devices')) || [];

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
    location.href = '/';
   });

   $('#login').on('click', function() { 
    const username = $('#username').val();
    const password = $('#password').val();
   });

   $('#register-account').on('click', function() { 
    const username = $('#username').val();
    const password = $('#password').val();
    const confPassword = $('#confirm-password').val();
   });

   $('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log(`command is: ${command}`);
   });