
let temp = []

window.onload = function(){
	if(localStorage.getItem("catatanku")){
		temp = JSON.parse(localStorage.getItem("catatanku"))
	} else {
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
    let deadline = document.getElementById('tanggal').value
	document.getElementById('catatan').value = ""
    document.getElementById('tanggal').value = ""
	if(catatan != ""){
		temp.push({val:catatan+"//"+deadline})
	}
	saveToLocal(temp)

	show(temp)
}

function saveToLocal(notes){
	notes = JSON.stringify(notes)
	localStorage.setItem("catatanku", notes)
}

function show(notes){
	clear()
	let list = document.getElementById("notes")
	for(let i=notes.length-1;i>=0;i--){
		var test = document.createElement('li')
        test.setAttribute('draggable','true')
		test.setAttribute('class','list-group-item d-flex justify-content-between align-items-center')
        test.setAttribute('id','listing')
		test.innerHTML = `${notes[i].val} <button class="btn btn-outline-danger btn-sm" style="z-index:10" onclick="del(${i})">delete</button>`

		list.appendChild(test)
	}
}

function clear(){
	document.getElementById("notes").innerHTML = ""
}

function del(index){
	temp.splice(index, 1)
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
		$('html').css('filter','invert(1) hue-rotate(180deg)')
	}else {
		$('html').css('filter', '')
	}
}

//dragable animation
const dragArea = document.getElementById('notes')
var sort = Sortable.create(dragArea, {
    animation: 350
})
