function countMinute(){
	event.preventDefault()
	let h = $('#sel-hh').val()
	let m = $('#sel-mm').val()
	let s = $('#sel-ss').val()
	
	if(h == ""){
		h = 0
	}
	if(m == ""){
		m = 0
	}
	if(s == ""){
		s = 0
	}
	console.log(h, m, s)	
	show(h,m,s)
	let interval = setInterval(alarm, 1000)
	
	$('#submit').attr('disabled','true')

	function alarm(){
		if(h != 0 || m != 0 | s != 0){
			if(s != 0){
				s--
			} else if(m != 0){
				m--
				s += 59
			} else if(h != 0){
				h--
				m += 59
				s += 59
			}
			show(h,m,s)
		} else {
			$('#submit').removeAttr('disabled')
			document.getElementById('alarm').play()
			clearInterval(interval)
		}
	}
}

function show(h,m,s){
	if(h/10 < 1){
		h = `0${h}`
	}
	if(m/10 < 1){
		m = `0${m}`
	}
	if(s/10 < 1){
		s = `0${s}`
	}
	$('#time').text(`${h}:${m}:${s}`)
}

function stopTime(){
	event.preventDefault()
	let audio = document.getElementById('alarm')
	audio.pause()
	audio.currentTime = 0
	
}
