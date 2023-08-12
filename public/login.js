var login = document.getElementById('login');

login.addEventListener('click', function () {
  console.log("hello ji");
  var email = document.getElementById('mail').value.trim();
  var pass = document.getElementById('password').value.trim();
  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, pass)
    .then((user) => {
      console.log(user);
      var user = firebase.auth().currentUser;
      if (user.emailVerified) {
        var mail = document.getElementById('dismail');
        var d = document.getElementById('questions');
        var a = document.getElementById('authseen');
        var f = document.getElementById('first');
        mail.innerHTML = `Logged in as: <b> ${user.email} </b>`;
        d.style.cssText = 'display: block';
        a.style.cssText = 'display: none';
        f.style.cssText = 'display: none';
      }
      else {
        var d = document.getElementById('questions');
        var a = document.getElementById('authseen');
        var f = document.getElementById('first');
        d.style.cssText = 'display: none';
        a.style.cssText = 'display: block';
        f.style.cssText = 'display: none';
        alert('Your email address is not verified..');
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
})