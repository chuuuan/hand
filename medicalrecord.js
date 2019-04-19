document.getElementById('date2').value = localStorage.getItem('date') || '2019/10/01'
document.getElementById('Submit1').addEventListener('click', savedata);
var db = firebase.firestore();


function savedata() {
  const date = date2;
  console.log(date);
  // const identify = getid('identify');
  // console.log(identify);
  const txtName = getid('fname');
  console.log(txtName);
  const phone = getid('phonename');
  console.log(phone);
  const medic = getid('medical');
  console.log(medic);
  const allergic = getid('allergic');
  console.log(allergic);
  const medbox = getid('lbox');
  console.log(medbox);
  const txtbox = getid('subject');
  console.log(txtbox);

  saveMessage(txtName, allergic,phone, medic, medbox, txtbox);

  // window.location.href = 'index.html';


}


function saveMessage(txtName,allergic, phone, medic, medbox, txtbox) {
  db.collection('medic').doc(txtName).set({
    // date: date,
    name: txtName,
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
