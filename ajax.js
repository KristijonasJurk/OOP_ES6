const button = document.querySelector('.button');
button.addEventListener('click', loadText);

function loadText() {
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET', '1.txt', true);

    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
        }
    }
    xhr.send();
}

