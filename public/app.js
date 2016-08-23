var socket = io.connect('/authenticate');
socket.on('updatechat'),(name) =>{
	console.log('Received updatechat');
    $('#chatlist').append('New user:' + name + '<br/>');
}
);


function Yo()
{
	alert("Yo");

}

