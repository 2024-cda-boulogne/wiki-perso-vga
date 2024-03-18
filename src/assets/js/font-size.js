const fontSizeBtn = document.querySelector("#font-size-btn");
const settingsBox = document.querySelector(".settings");
const currentFontSize = document.querySelector("#currentFontSize");
const fsIncrease = document.querySelector("#fs-increase");
const fsDecrease = document.querySelector("#fs-decrease");

fontSizeBtn.addEventListener("click", () => {
    fontSizeBtn.classList.toggle("fs-bold");
    settingsBox.classList.toggle("hidden");
});

fsIncrease.addEventListener("click", () => {
    if (checkMaxFontSize())
    {
        adjustFontSize(1);
        checkMinFontSize();
        checkMaxFontSize();
    }
});

fsDecrease.addEventListener("click", () => {
    if (checkMinFontSize())
    {
        adjustFontSize(-1);
        checkMinFontSize();
        checkMaxFontSize();
    }

});

const adjustFontSize = (operator) => {

    const root = document.querySelector(':root');
    const activeFontSize = getComputedStyle(document.documentElement).getPropertyValue('--fs').slice(0, 3);
    const newFontSize = (+activeFontSize + (.1 * operator)).toFixed(1);
    
    root.style.setProperty(`--fs`, `${newFontSize}rem`);
    currentFontSize.textContent = newFontSize;
    localStorage.setItem("fs", newFontSize);
}

const checkMaxFontSize = () => {
    const fontSize = getCurrentFontSize();
    if (fontSize >= 2)
    {
        fsIncrease.classList.add("fs-locked");
        return false;
    } else {
        fsIncrease.classList.remove("fs-locked");
        return true;
    }
}

const checkMinFontSize = () => {
    const fontSize = getCurrentFontSize();
    if (fontSize <= 0.5) {
        fsDecrease.classList.add("fs-locked");
        return false;
    } else {
        fsDecrease.classList.remove("fs-locked");
        return true;
    }
}

const getCurrentFontSize = () => {
    return localStorage.getItem("fs");
};

const applyFontSize = () => {
    const root = document.querySelector(':root');
    const activeFontSize = getCurrentFontSize();
    root.style.setProperty(`--fs`, `${activeFontSize}rem`);
};

window.addEventListener("load", () => {
    applyFontSize();
    currentFontSize.textContent = getCurrentFontSize();
    checkMaxFontSize();
    checkMinFontSize();
});