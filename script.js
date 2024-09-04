const petData = [
    { name: "Buddy", age: "2 years old", image: "https://cdn.usegalileo.ai/sdxl10/4da8e833-a65e-43d6-a050-fbf16b422222.png" },
    { name: "Whiskers", age: "1 year old", image: "https://cdn.usegalileo.ai/sdxl10/d3c20ac5-b614-4c0f-b715-e40f5aa19552.png" },
    { name: "Bones", age: "3 years old", image: "https://cdn.usegalileo.ai/stability/a4dc105e-ea77-4b6a-9db1-8bd1881a1c6a.png" },
    { name: "Socks", age: "4 years old", image: "https://cdn.usegalileo.ai/sdxl10/b2502453-7a8a-4955-a8a5-29046f91ea7f.png" },
    { name: "Rex", age: "2 years old", image: "https://cdn.usegalileo.ai/sdxl10/ccb7b535-00c3-4ef9-be6c-0d041aebe4a1.png" },
    { name: "Mittens", age: "3 years old", image: "https://cdn.usegalileo.ai/sdxl10/58fede56-b8c1-471c-9b99-d70d6d339709.png" }
];

function createPetCard(pet) {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.innerHTML = `
        <div class="pet-info">
            <div class="pet-image" style="background-image: url('${pet.image}')"></div>
            <div class="pet-details">
                <h3>${pet.name}</h3>
                <p>${pet.age}</p>
            </div>
        </div>
        <button class="adopt-btn">Adopt</button>
    `;
    return card;
}

function displayPets() {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = '';
    petData.forEach(pet => {
        petList.appendChild(createPetCard(pet));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayPets();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Here you would typically filter the pets, but for this demo, we'll just redisplay all pets
            displayPets();
        });
    });
});
