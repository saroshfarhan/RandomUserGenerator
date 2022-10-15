let btn  = document.querySelector('#usergen');
let outerDiv = document.querySelector('.details');
let image = document.querySelector('.imageContainer');
let url = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = () => {
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            image.innerHTML = `<img class="rounded-circle" src=${data.avatar}>`;
            outerDiv.innerHTML =`<h3 class="name">${data.first_name} ${data.last_name}</h3>
            <p class="title">${data.employment.title}</p>
            <p class="description">${data.email} ﹒ <strong>@${data.username}</strong></p>`;
        });
};

window.addEventListener("load", getUser);
btn.addEventListener("click", getUser);