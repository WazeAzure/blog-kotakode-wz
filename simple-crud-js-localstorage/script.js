let listCatatan = []

window.onload = function(){
	if(localStorage.getItem("catatanku")){
		listCatatan = JSON.parse(localStorage.getItem("catatanku"))
	} else {
		listCatatan = []
	}
	showList()
}


function showList(){
    clear()
	let kumpulan = document.getElementById('daftar-catatan')
	for(let i = listCatatan.length-1; i >= 0; i--){
		var test = document.createElement('li')
		test.setAttribute('class','list-group-item d-flex justify-content-between align-items-center')
        test.setAttribute('id','listing')
		test.innerHTML = `<span id="ini-note">${listCatatan[i].val}</span> <button class="btn btn-outline-danger btn-sm" style="z-index:10" onclick="del(${i})">delete</button>`
		kumpulan.appendChild(test)
	}

}

function tambahCatatan(){
	event.preventDefault()
	let catatan = document.getElementById('inp_catatan').value
	document.getElementById('inp_catatan').value = ""
	if(catatan != ""){
		listCatatan.push({val:catatan})
	}
	saveToLocal()

	showList()
}

function saveToLocal(){
	let notes = JSON.stringify(listCatatan)
	localStorage.setItem("catatanku", notes)
}

function clear(){
	document.getElementById("daftar-catatan").innerHTML = ""
}

function del(index){
	listCatatan.splice(index, 1)
	saveToLocal()
	showList()
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

