// script.js
const gombalan = document.getElementById('gombalan');
const gombalButton = document.getElementById('gombalButton');

const gombalanList = [
    "Kamu adalah bintang di langit hidupku.",
    "Kau seperti kopi pagiku, tanpa kamu aku tak bisa berfungsi.",
    "Jika kecantikanmu adalah waktu, kamu pasti selamanya.",
    "Ketika aku melihatmu, seluruh dunia berhenti berputar sejenak.",
    "Cintaku padamu seperti matematika: sulit dijelaskan, tetapi indah dijalani."
];

function getRandomGombalan() {
    const randomIndex = Math.floor(Math.random() * gombalanList.length);
    return gombalanList[randomIndex];
}

gombalButton.addEventListener('click', function() {
    const randomGombalan = getRandomGombalan();
    gombalan.textContent = randomGombalan;
});
