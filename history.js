var db = firebase.firestore();
var email;
email = window.sessionStorage.getItem("email");
console.log(email);
var eye_temp;

var docRef1 = db.collection("User").doc(email);

docRef1.get().then(function(doc1) {
  eye_temp = doc1.data().eye_temp;
  get_eyesight(eye_temp, email);

}).catch(function(error) {
  console.log("Error getting document:", error);
});

function get_eyesight(eye_temp, email) {
  if (eye_temp == 'eye_1') {
    db.collection("User").doc(email).collection("eyesight").doc(eye_temp).get().then(function(doc) {
      document.getElementById("eye_left1").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right1").innerHTML = doc.data().eye_right;
    });
    db.collection("User").doc(email).collection("eyesight").doc("eye_2").get().then(function(doc) {
      document.getElementById("eye_left2").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right2").innerHTML = doc.data().eye_right;
    });
    db.collection("User").doc(email).collection("eyesight").doc("eye_3").get().then(function(doc) {
      document.getElementById("eye_left3").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right3").innerHTML = doc.data().eye_right;
    });
  } else if (eye_temp == 'eye_2') {
    db.collection("User").doc(email).collection("eyesight").doc(eye_temp).get().then(function(doc) {
      document.getElementById("eye_left1").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right1").innerHTML = doc.data().eye_right;
    });
    db.collection("User").doc(email).collection("eyesight").doc("eye_3").get().then(function(doc) {
      document.getElementById("eye_left2").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right2").innerHTML = doc.data().eye_right;
    });
    db.collection("User").doc(email).collection("eyesight").doc("eye_1").get().then(function(doc) {
      document.getElementById("eye_left3").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right3").innerHTML = doc.data().eye_right;
    });


  } else if (eye_temp == 'eye_3') {
    db.collection("User").doc(email).collection("eyesight").doc(eye_temp).get().then(function(doc) {
      document.getElementById("eye_left1").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right1").innerHTML = doc.data().eye_right;
    });
    db.collection("User").doc(email).collection("eyesight").doc("eye_1").get().then(function(doc) {
      document.getElementById("eye_left2").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right2").innerHTML = doc.data().eye_right;
    });
    db.collection("User").doc(email).collection("eyesight").doc("eye_2").get().then(function(doc) {
      document.getElementById("eye_left3").innerHTML = doc.data().eye_left;
      document.getElementById("eye_right3").innerHTML = doc.data().eye_right;
    });
  }
}
