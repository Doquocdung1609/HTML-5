
var tieudeTag = document.getElementById('tieude')
var hinhanhTag = document.getElementById('hinhanh')
var noidungTag = document.getElementById('noidung')
var dialogTag = document.getElementById('dialog-id')


function login() {


    let tieudebaiviet = tieudeTag.value
	let hinhanhbaiviet = hinhanhTag.value
    let noidungbaiviet =noidungTag.value

	if( tieudebaiviet == "" || hinhanhbaiviet == "" || noidungbaiviet == "") {
		alert('Tieu de | Hinh anh | Noi dung bai viet khong duoc de trong')
		return
	}
    dialogTag.style.display = "block"
}


function resetData() {
	tieudeTag.value = ""
	noidungTag.value = ""
    hinhanhTag.value = ""
}

function closeDialog() {
	dialogTag.style.display = "none"
}