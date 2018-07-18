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
