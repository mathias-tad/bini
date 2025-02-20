const card = document.getElementsByClassName("card");
const playCard = document.getElementById("play-card");

const links = ['https://www.youtube.com/embed/MUwzSwDFFq8?si=Gsn76kZx898tNsL1&rel=0',
    'https://www.youtube.com/embed/o-F9qfivtOE?si=Q-eZwmpYZfpTdqtk&rel=0',
    'https://youtube.com/embed/6kYRUsXtS4s?si=P4eXXU7jUy5HIWSe'];
[...card].forEach((clk, indx) => {
    clk.addEventListener("click", () => {
        playCard.innerHTML += `
        <div class="top" id="close-modal">
            <i class="fa-solid fa-xmark"></i>
        </div>`
        playCard.innerHTML += `<iframe class="player" width="560" height="315" src="${links[indx]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        playCard.showModal()
        const closeModal = document.getElementById("close-modal");
        closeModal.addEventListener("click", () => {
            playCard.innerHTML = ``;
            playCard.close();
        });
    });
});
