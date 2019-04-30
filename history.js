var db = firebase.firestore();
var email;
email=window.sessionStorage.getItem("email");
console.log(email);


db.collection("User").doc(email)
.onSnapshot(function(doc) {
    console.log("Current data: ", doc.data());
    if (doc.exists) {
        document.getElementById("eye_sight1").innerHTML = doc.data().name;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
 });

} else {
console.log("error();");
}
