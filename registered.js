document.getElementById('btn_relaxureye').addEventListener('click', getidentify);

function getidentify() {
const identify = document.getElementById("identify").value;
console.log(identify);
sessionStorage.setItem('identify', identify);
}
