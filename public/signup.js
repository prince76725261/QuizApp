var signup = document.getElementById('signup');

signup.addEventListener('click', function(){
    var email = document.getElementById('mail').value.trim();
    var pass = document.getElementById('password').value.trim();
    firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    // Signed in 
    //console.log(userCredential);
    var user = firebase.auth().currentUser;
user.sendEmailVerification().then(function() {
  // Email sent.
  alert('Verification link sent to your email address.')
}).catch(function(error) {
  // An error happened.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
})