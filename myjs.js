function open_text() {
    if (document.getElementById("secret").style.display == '') {
        document.getElementById("secret").style.display = 'flex'
        document.getElementById('my').innerHTML = 'סגור קוד סודי'
    }
    else {
        document.getElementById("secret").style.display = ''
        document.getElementById('my').innerHTML = 'פתח קוד סודי'
    }
}

function colorbg() {
    if (document.body.style.backgroundColor == "plum" || document.body.style.backgroundColor == "black")
        document.body.style.backgroundColor = "tomato";
    else
        document.body.style.backgroundColor = "black";
}

function changekishur() {
    document.getElementById("kishur").href = "http://www.ynet.co.il";
    document.getElementById("kishur").innerText = "YNET"
}