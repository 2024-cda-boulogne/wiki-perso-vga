const aboutBtns = document.querySelectorAll(".about-btn");
const closeModalBtns = document.querySelectorAll(".close-modal ");

aboutBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        const modal = document.querySelector("#aboutModal");
        modal.addEventListener("click", (e) => {
            const modalDialog = modal.childNodes[1];
            if (e.target.id === "aboutModal" && modalDialog.classList.contains("highlight-modal") === false)
            {
                modalDialog.classList.add("highlight-modal");
                setTimeout(() => {
                    modalDialog.classList.remove("highlight-modal");
                }, 1000);
            }
        });

        modal.classList.toggle("show");
    });
});

closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(`#${btn.getAttribute("data-target")}`).classList.toggle("show");
    })
});