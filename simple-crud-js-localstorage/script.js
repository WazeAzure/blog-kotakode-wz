console.log("Hello World") 
let temp = []

window.onload = function(){
	if(localStorage.getItem("catatanku")){
		temp = JSON.parse(localStorage.getItem("catatanku"))
		console.log("berhasil ke load")
	} else {
		console.log("ga ada catetan")
		temp = []
	}
	if(localStorage.getItem('dark-mode')){
		$('#toggle-dark').children().removeClass().addClass("toggle btn btn-primary")
	} else {
		$('#toggle-dark').children().removeClass().addClass("toggle btn btn-default off")
	}
	show(temp)
}

function addNote(){
	event.preventDefault()
	let catatan = document.getElementById('catatan').value
	document.getElementById('catatan').value = ""
	temp.push({val:catatan})
	console.log(temp)

	saveToLocal(temp)
	clear()
	show(temp)
}

function saveToLocal(notes){
	notes = JSON.stringify(notes)
	localStorage.setItem("catatanku", notes)
}
function show(notes){
	let list = document.getElementById("notes")
	console.log(notes)
	for(let i=0;i<notes.length;i++){
		var test = document.createElement('li')
		test.setAttribute('class','list-group-item d-flex justify-content-between align-items-center')
		test.innerHTML = `${notes[i].val} <button class="btn btn-outline-danger btn-sm" onclick="del(${i})">delete</button>`

		list.appendChild(test)
	}
}
function clear(){
	document.getElementById("notes").innerHTML = ""
}
function del(index){
	temp.splice(index, 1)
	clear()
	saveToLocal(temp)
	show(temp)
}

$('#toggle-dark').delay(1000).click(function(){
	if($('#toggle-dark').children().attr('class') != 'toggle btn btn-default off'){
		localStorage.removeItem('dark-mode')
	} else {
		localStorage.setItem('dark-mode', '1')
	}
	checking()
})

function checking(){
	if(localStorage.getItem('dark-mode')){
		alert('succeed')
		var style = document.createElement('style')
		style.innerHTML = '*{color-scheme: dark;}'

		var ref = document.querySelector('script')

		ref.parentNode.insertBefore(style, ref)
	}
}
