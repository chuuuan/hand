firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('user login in', user);
  } else {
    console.log('user login out', user);
  }



  var user = firebase.auth().currentUser;
  var uid;


  if (user != null) {
    uid = user.uid;



    var docRef = db.collection("User").doc(uid);
    docRef.get().then(function(doc) {
      if (doc.exists) {
        document.getElementById("textname").innerHTML = doc.data().name;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

  } else {
    console.log("error();");
  }


});





//else {
//   // No user is signed in.
//
//   document.getElementById("user_div").style.display = "none";
//   document.getElementById("login_div").style.display = "block";
//
// }

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function() {
    document.location.href='index.html';
    document.location.href = 'index.html';
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function register() {

  window.location = 'register.html'
}

function logout() {
  firebase.auth().signOut();
  window.location = 'login.html';
}
