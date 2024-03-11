const root = document.querySelector(':root');
const changeModeBtn = document.querySelector("#changeModeBtn");

changeModeBtn.addEventListener("click", () => {
    const currentTheme = checkCurrentTheme();
    currentTheme === "dark" ? switchTheme("light") : switchTheme("dark");
});

const switchTheme = (theme) => {
    
    const themesSettings = {
        "light": {
            "colors": {
                "primary":      "#111",
                "secondary":    "#fff",
                "tertiary":     "#eee",
                "links":        "rgb(51, 102, 204)",
                "links-active": "rgb(102, 51, 204)",
                "mode-btn-primary": "#eee",
                "mode-btn-secondary": "#777",
                "mode-btn-tertiary": "#333",
            },
            "globe": "none",
            "modeSwitch": "translateX(50%)",
        },
        "dark": {
            "colors": {
                "primary":      "#eee",
                "secondary":    "#111",
                "tertiary":     "#111",
                "links":        "rgb(105, 138, 209)",
                "links-active": "rgb(148, 123, 197)",
                "mode-btn-primary": "#111",
                "mode-btn-secondary": "#777",
                "mode-btn-tertiary": "#eee",
            },
            "globe": "invert(1)",
            "modeSwitch": "translateX(-50%)",
        },
    };
    
    for (const [key, value] of Object.entries(themesSettings[theme]["colors"])) {
        root.style.setProperty(`--clr-${key}`, `${value}`);
    }
    
    document.querySelector("#globe").style.filter = themesSettings[theme]["globe"];

    document.querySelector("#changeModeSwitch").style.transform = themesSettings[theme]["modeSwitch"];
    localStorage.setItem("theme", theme);
};

const checkCurrentTheme = () => {
    return localStorage.getItem("theme");
};

window.addEventListener("load", () => {
    const currentTheme = checkCurrentTheme();
    currentTheme === "dark" ? switchTheme("dark") : switchTheme("light");
});