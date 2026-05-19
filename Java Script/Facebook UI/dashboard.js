

let texts = document.querySelectorAll('.text9');

for (let i = 0; i < texts.length; i++) {

    let t = texts[i];
    let full = t.innerText;
    let short = full.slice(0, 55);
    let hide = full.slice(55);

    t.innerHTML = short + '<span id="hidden' + i + '" style="display:none;">' + hide + '</span>' + '<b onclick="togg(' + i + ')" style="cursor:pointer; color:#1877f2;"> See more</b>';
}
function togg(num) {
    let hidden = document.getElementById('hidden' + num);
    var btn = hidden.nextElementSibling;
    if (hidden.style.display === "none") {
        hidden.style.display = 'inline';
        btn.innerText = ' See less';
    } else {
        hidden.style.display = 'none';
        btn.innerText = ' See more';
    }
}


function logout() {
    alert("Logged out!");
    window.location.href = "index.html";
}

function openModal() {
    var Modal = document.getElementById("postModal")
    Modal.style.display = "flex";
}

function closeModal() {

    var close = document.getElementById("postModal")
    var imagePreview = document.getElementById("imagePreview")
    var postText = document.getElementById("postText")

    var cancel = close.style.display = "none";
    imagePreview.innerHTML = ""
    postText.value = ""

}

function previewFile(event) {

    var file = event.target.files[0]
    var preview = document.getElementById("imagePreview")
    var reader = new FileReader();

    reader.onload = function (e) {
        preview.innerHTML = '<img src = "' + e.target.result + '"style="width:100%; border-radius:8px;" >';
    };

    reader.readAsDataURL(file)
}

function submitPost() {

    var postText = document.getElementById("postText")
    var imagePreview = document.getElementById("imagePreview")

    if (postText.value.trim() == "" || imagePreview.innerHTML == "") {
        alert("text and image are required to post something")
        newpost.style.display = "none"
    }

    else {
        alert("post uploaded")
    }

    var post = document.querySelector(".posts")
    var newpost = document.createElement("div")

    newpost.style.marginTop = "25px";
    newpost.style.background = "white";
    newpost.style.padding = "15px";
    newpost.style.borderRadius = "10px";
    newpost.style.width = "65%";
    newpost.style.justifySelf = "center"


    newpost.innerHTML = '<img src="https://avatars.githubusercontent.com/u/247348499?v=4" style="width:35px; height:35px; border-radius:50%;">' +
        '<span style="margin-left:8px; font-weight:700;">Ashhad Khan</span>' +
        '<p style="margin-top:10px;">' + postText.value + '</p>' + imagePreview.innerHTML;

    post.insertBefore(newpost, post.firstChild)
    closeModal()
}