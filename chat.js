const sendBtn = document.getElementById("send");
const sendInput = document.getElementById("send-message");
const span = document.getElementById("span");


reference.on("value", updateDOM, error);
let username = "";

document.scrollTop = document.scrollHeight;

auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log("user is signed in!");
        username = user.email.substring(0, user.email.length - 10);
    } else {
        window.location = "index.html"
    }
});

class Msg {
    constructor() {
        if (username != "") {
            this.content = sendInput.value;
            this.date = new Date().toString();
            this.by = username;
            reference.push(this);
            span.scrollTop = span.scrollHeight;
            sendInput.value = "";
        }
    }
}

let subscribed = false;

function updateDOM(val) {
    const data = val.val();
    if (!subscribed) {
        for (let i = 0; i < Object.values(data).length; i++) {
            let d = Object.values(data)[i];
            let p = document.createElement("p");
            p.innerHTML = d.by + ": " + d.content;
            span.appendChild(p);
        }
        subscribed = true;
        document.scrollTop = document.scrollHeight;
    } else if (subscribed) {
        let lastMessage = Object.values(data)[Object.values(data).length - 1];
        let p = document.createElement("p");
        p.innerHTML = lastMessage.by + ": " + lastMessage.content;
        span.appendChild(p);
    }
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        new Msg();
    }
});

sendBtn.onclick = function() {
    if (username != null) {
        new Msg();
    }
}