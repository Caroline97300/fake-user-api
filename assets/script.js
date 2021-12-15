const targetCards = document.querySelector("#targetCards");
fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => showProfileUser(data));

function showProfileUser(data) {
    const profile = data.results[0];
    const thumbnail = profile.picture.large;
    const name = `${profile.name.first} ${profile.name.last}`;

    const card = `<div class="card" style="width: 18rem;">
    <img src="${thumbnail}" class="card-img-top" alt="avatar">
    <div class="card-body">
        <h5 class="card-title"> Hi, My name is</h5>
        <p class="card-text">${name}</p>
    </div>
</div>`;

    targetCards.innerHTML = card;
}