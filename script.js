const card = document.getElementsByClassName("card");
const playCard = document.getElementById("play-card");

const links = ['https://youtube.com/embed/7Nqt4vRQBFg?si=IznJxHf1PXN84lWm', 'https://youtube.com/embed/IIzQEAr3UGE?si=_q2zS3k0eN5S4RFo', 'https://youtube.com/embed/pd7wWgM_SEE?si=mLe1zYJgVjlDfVNf'];
[...card].forEach((clk, indx) => {
    clk.addEventListener("click", () => {
        playCard.innerHTML += `
        <div class="top" id="close-modal">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <iframe class="player" src=${links[indx]} frameborder="0"></iframe>`;
        playCard.showModal()
        const closeModal = document.getElementById("close-modal");
        closeModal.addEventListener("click", () => {
            playCard.innerHTML = ``;
            playCard.close();
        });
    });
});
