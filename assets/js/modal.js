const aboutBtns = document.querySelectorAll(".about-btn");
const closeModalBtns = document.querySelectorAll(".closeModal ");

aboutBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        
        const modal = document.querySelector("#aboutModal");
        modal.addEventListener("click", (e) => {
            if (e.target.id === "aboutModal")
            {
                const modalDialog = modal.childNodes[1];
                modalDialog.classList.add("highlight-modal");
                setTimeout(() => {
                    modalDialog.classList.remove("highlight-modal");
                }, 1000);
            }
        });

        modal.classList.toggle("hidden");
    });
});

closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(`#${btn.getAttribute("data-target")}`).classList.toggle("hidden");
    })
});