var db = firebase.firestore();
var email;
var eye_temp;
email = window.sessionStorage.getItem("email");
console.log(email);
var docRef = db.collection("model").doc('model');

docRef.get().then(function(doc) {
  if (doc.exists) {
    document.getElementById('percentage').innerHTML = doc.data().rate + '%';

  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});




var docRef1 = db.collection("User").doc(email);

docRef1.get().then(function(doc1) {
  eye_temp = doc1.data().eye_temp;
  get_eyesight(eye_temp, email);

}).catch(function(error) {
  console.log("Error getting document:", error);
});

function get_eyesight(eye_temp, email) {
  db.collection("User").doc(email).collection("eyesight").doc(eye_temp).get().then(function(doc) {
    document.getElementById("test_left").value = doc.data().eye_left_real;
    document.getElementById("test_right").value = doc.data().eye_right_real;
  });
}
