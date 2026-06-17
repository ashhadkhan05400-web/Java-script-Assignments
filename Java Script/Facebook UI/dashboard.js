

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
        return
    }

    let allpost = localStorage.getItem("posts")
    if (allpost == null) {
        allpost = []
    } else {
        allpost = JSON.parse(allpost)
    }

    let newpostobj = {
        id: Date.now(),
        user_email: "currentUser",
        text: postText.value,
        img: imagePreview.innerHTML,
        timestamp: new Date().toLocaleString(),
    }

    allpost.push(newpostobj)
    localStorage.setItem("posts", JSON.stringify(allpost))


    var post = document.querySelector(".posts")
    var newpost = document.createElement("div")
    newpost.id = "post-" + newpostobj.id;
    newpost.style.marginTop = "25px";
    newpost.style.background = "white";
    newpost.style.padding = "15px";
    newpost.style.borderRadius = "10px";
    newpost.style.width = "65%";
    newpost.style.justifySelf = "center"


    newpost.innerHTML = '<img src="https://avatars.githubusercontent.com/u/247348499?v=4" style="width:35px; height:35px; border-radius:50%;">' +
        '<span style="margin-left:8px; font-weight:700;">Ashhad Khan</span>' +
        '<p style="font-size:12px; color:#999;">' + newpostobj.timestamp + '</p>' +
        '<p style="margin-top:10px;">' + newpostobj.text + '</p>' +
        newpostobj.img +
        '<button onclick="deletePost(' + newpostobj.id + ')" style="margin-top:10px; background:#ff4444; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Delete</button>';

    post.insertBefore(newpost, post.firstChild);

    alert("post uploaded");
    closeModal()
}

function loadallpost() {
    let allpost = localStorage.getItem("posts")

    if (allpost != null) {
        allpost = JSON.parse(allpost)


        for (let i = allpost.length - 1; i >= 0; i--) {
            var post = document.querySelector(".posts")
            var newpost = document.createElement("div")

            newpost.id = "post-" + allpost[i].id;
            newpost.style.marginTop = "25px";
            newpost.style.background = "white";
            newpost.style.padding = "5px";
            newpost.style.borderRadius = "10px";
            newpost.style.width = "25%";

            newpost.innerHTML = '<img src="https://avatars.githubusercontent.com/u/247348499?v=4" style="width:35px; height:35px; border-radius:50%;">' +
                '<span style="margin-left:8px; font-weight:700;">Ashhad Khan</span>' +
                '<p style="font-size:12px; color:#999;">' + allpost[i].timestamp + '</p>' +
                '<p style="margin-top:10px;">' + allpost[i].text + '</p>' +
                allpost[i].img +
                '<button onclick="deletePost(' + allpost[i].id + ')" style="margin-top:10px; background:#ff4444; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Delete</button>';

            post.appendChild(newpost);
        }
    }
}

window.onload = function(){
    loadallpost()
}
