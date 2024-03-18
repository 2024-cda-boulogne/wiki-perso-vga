const indexPanel = document.querySelector('.page-index-panel');
const indexPanelHideBtn = document.querySelector('#index-panel-hide-btn');
const navMinifiedBtn = document.querySelector('.nav-minified-btn');
const container = document.querySelector('.container');

indexPanelHideBtn.addEventListener("click", () => {
    if (indexIsMinified())
    {
        indexPanel.classList.toggle("index-panel-show-minified");
        indexPanel.classList.toggle("index-panel-hide");
        indexPanelHideBtn.textContent = "Masquer";
    } else {
        indexPanelHideBtn.textContent = "Replacer dans la barre latérale";
    }
    indexPanel.classList.toggle("index-panel-hide");
    navMinifiedBtn.classList.toggle("nav-minified-show");
});

navMinifiedBtn.addEventListener("click", () => {
    indexPanel.classList.toggle("index-panel-hide");
    indexPanel.classList.toggle("index-panel-show-minified");
});

container.addEventListener("scroll", () => {
    if (indexPanel.classList.contains("index-panel-show-minified"))
    {
        if (navMinifiedBtn.getBoundingClientRect().y < 0)
        {
            indexPanel.classList.add("index-panel-hide");
        } else {
            indexPanel.classList.remove("index-panel-hide");
        }
    }   
});

const indexIsMinified = () => {
    return indexPanel.classList.contains("index-panel-show-minified");
}

const indexIsHidden = () => {
    return indexPanel.classList.contains("index-panel-hide");
}