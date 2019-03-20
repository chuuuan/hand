document.getElementById('form').addEventListener('submit', submitForm);
var db = firebase.firestore();


function submitForm(e) {
  e.preventDefault();

  //get getElement
  const emailField = getid('txtEmail');
  const passwordField = getid('txtPassword');
  const birthday = getid('txtBirthday');
  const identity = getid('txtIdentity');
  // const signUpBtn = getid('btnSignup')




  // Save message
  saveMessage(emailField, birthday, identity);


  var auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(emailField, passwordField).then(function(user) {
     document.location.href = 'login.html';
    

  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

  })

}


function saveMessage(emailField, birthday, identity) {
  // Add a new document in collection "cities"
  db.collection("User").doc(identity).set({
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
