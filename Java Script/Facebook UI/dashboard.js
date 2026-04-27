

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


