let menuIsOpen = false;
function openMenu() {
    const menu = document.getElementById("menu");
    if (!menuIsOpen) {
        menu.style.animation = "menu-move1 1s forwards";
    } else {
        menu.style.animation = "menu-move2 1s forwards";
    }
    menuIsOpen = !menuIsOpen;
}

function yourStory() {
    alert("برای استوری گذاشتن نیاز به حساب کاربری داری !");
}
const allStories = {
    story1: [
        { name: "Rava", profile: "img/R-logo2.jpg", image: "" }
    ],
    story2: [
        { name: "new pictures", profile: "img/picture-logo2.png", image: "" }
    ]
};
let current = 0;

function openStory(storyList) {
    stories = storyList;
    current = 0;
    document.getElementById("storyContainer").style.display = "block";
    renderStory();
}
function renderStory() {
    document.getElementById("storyImage").src = stories[current].image;
    document.getElementById("storyProfile").src = stories[current].profile;
    document.getElementById("storyName").innerText = stories[current].name;

    const strip = document.getElementById("storyStrip");
    strip.innerHTML = "";
    stories.forEach((_, index) => {
        const div = document.createElement("div");
        if (index === current) div.classList.add("active");
        strip.appendChild(div);
    });
}
function nextStory() {
    if (current <stories.length - 1) {
        current++;
        renderStory();
    } else {
        closeStory();
    }
}
function prevStory() {
    if (current > 0) {
        current--;
        renderStory();
    }
}
function closeStory() {
    document.getElementById("storyContainer").style.display = "none";
    current = 0;
}



document.querySelectorAll(".blogcontents-link-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.dataset.copy;
        navigator.clipboard.writeText(text).then(() => {
            btn.innerText = "Copied";
            setTimeout(() => btn.innerText = "Copy", 1500)
        })
    })
})
document.querySelectorAll(".top-post-btns-copy").forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.dataset.copy;
        navigator.clipboard.writeText(text).then(() => {
            btn.innerText = "کپی شد";
            setTimeout(() => btn.innerText = "کپی", 1500)
        })
    })
})