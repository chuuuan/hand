firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('user login in', user);
  } else {
    console.log('user login out', user);
  }



  var user = firebase.auth().currentUser;
  var uid;
  uid = user.uid;




  if (user != null) {

    db.collection("temp").doc("temp_user").set({
      uid: uid
    });


    db.collection("User").doc(uid).collection("eyesight").doc("eye").set({
      blind :"0",
      date :"0",
      eye_flash_left :"0",
      eye_flash_right :"0",
      eye_left :"0",
      eye_right :"0",
      mostiquto :"0",
      yellow :"0"
    });

    db.collection("User").doc(uid)
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        if (doc.exists) {
            document.getElementById("textname").innerHTML = doc.data().name;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
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
