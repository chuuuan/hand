const identify2 = sessionStorage.getItem('identify');
const date2 = sessionStorage.getItem('date');
document.getElementById('date2').value = date2;
document.getElementById('Submit1').addEventListener('click', savedata);
var db = firebase.firestore();


function savedata() {

  const txtName = getid('fname');
  const phone = getid('phonename');
  const medic = getid('medical');
  const allergic = getid('allergic');
  const medbox = getid('lbox');
  const txtbox = getid('subject');

  saveMessage(identify2, date2, txtName, allergic, phone, medic, medbox, txtbox);

  document.location.href = 'index.html';


}


function saveMessage(identify2, date2, txtName, allergic, phone, medic, medbox, txtbox) {
  db.collection('medic').doc(identify2).set({
    // date: date,
    identify: identify2,
    name: txtName,
    date: date2,
    phone: phone,
    medical: medic,
    allergic: allergic,
    medbox: medbox,
    txtbox: txtbox
  }).then(function() {
    console.log("Document successfully written!");
  }).catch(function(error) {
    console.error("Error writing document: ", error);
  });

}


function getid(id) {
  return document.getElementById(id).value;
}
