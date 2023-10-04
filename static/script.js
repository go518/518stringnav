function toggleColorMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// 自动切换颜色模式
function autoToggleColorMode() {
    var body = document.body;
    var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
}

// 页面加载完成后自动切换颜色模式
window.addEventListener("load", function () {
    autoToggleColorMode();
});
