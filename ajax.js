const button = document.querySelector('.button');
button.addEventListener('click', loadText);

function loadText() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            const user = JSON.parse(this.responseText);
            let output = '';
            output += `<ul> 
                <li> ID: ${user.id} </li>
                <li> ID: ${user.name} </li>
                <li> ID: ${user.age} </li>
            </ul>`;
            document.querySelector('.user').innerHTML = output;
        }
    }
    xhr.send();
}
// check out ajax crash course vanilla javascript from 59min