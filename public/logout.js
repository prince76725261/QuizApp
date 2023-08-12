var logout = document.getElementById('logout');
logout.addEventListener('click', function(){
    auth.signOut()
  .then((user) => {
    // Signed out
    // ...
    //console.log(user);
    alert('Successfully logged out!!')
      var d = document.getElementById('questions');
      var a = document.getElementById('authseen');
      var f = document.getElementById('first');
      d.style.cssText = 'display: none';
      a.style.cssText = 'display: none';
      f.style.cssText = 'display: block';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
});