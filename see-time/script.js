setInterval(gettime, 1000)
$('#time').text(Date().split(' ')[4])
function gettime(){
	let today = new Date()
	let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
	$('#time').text(time)
}
