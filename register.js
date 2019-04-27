document.getElementById('form').addEventListener('submit', submitForm);
var db = firebase.firestore();
var uid;


function submitForm(e) {
  e.preventDefault();

  //get getElement
  const emailField = getid('txtEmail');
  const passwordField = getid('txtPassword');
  const birthday = getid('txtBirthday');
  const identity = getid('txtIdentity');
  const name = getid('txtName');

  // const signUpBtn = getid('btnSignup')







  var auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(emailField, passwordField).then(cred => {
    uid = cred.user.uid;
    console.log("uid", cred.user.uid);
    saveMessage(emailField, birthday, identity, name, uid);
    document.location.href = 'login.html';


  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

  })


}


function saveMessage(emailField, birthday, identity, name) {
  // Add a new document in collection uid
  db.collection("User").doc(uid).set({
      name: name,
      email: emailField,
      birthday: birthday,
      identity: identity
    })
    .then(function() {
      console.log("Document successfully written!");

    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });

}


function getid(id) {
  return document.getElementById(id).value;
}
