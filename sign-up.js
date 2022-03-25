const signUpBtn = document.getElementById("sign-up");
const usernameInput = document.getElementById("username");
const passInput = document.getElementById("password");

signUpBtn.onclick = function() {
    const promise = auth.createUserWithEmailAndPassword(usernameInput.value + "@gmail.com", passInput.value);
    promise.catch(e => document.getElementById("error").innerHTML = e.message);
}

auth.onAuthStateChanged(function(user) {
    if (user) {
      window.location = "chat.html";
    } else {

    }
});