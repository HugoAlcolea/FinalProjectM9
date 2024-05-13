// /* index.js */

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".nav-link");
    const tabContents = document.querySelectorAll(".tabcontent");
    const clickSound = new Audio('./audio/SoundEffect.mp3');

    function hideTabs() {
        tabContents.forEach(tabContent => {
            tabContent.style.display = "none";
        });
    }

    function showTab(tabId) {
        hideTabs();
        document.getElementById(tabId).style.display = "block";
    }

    function handleTabClick(tab) {
        const tabId = tab.getAttribute("data-text").toLowerCase();
        showTab(tabId);
        clickSound.play();
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            handleTabClick(this);
        });
    });

    showTab("home");
});
