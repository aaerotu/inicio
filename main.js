const dialog = document.querySelector('dialog')
const cancel = document.querySelector('#cancel')
const show = document.querySelector('#show')
show.addEventListener('click',()=>dialog.showModal())
cancel.addEventListener('click',()=>dialog.close())
let no=document.getElementById('no');
no.addEventListener("mousemove",function(e){
	let x=Math.round(Math.random()*93);
	let y=Math.round(Math.random()*93);
	no.style.left=x+"%";
	no.style.top=y+"%";
});