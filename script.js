//-----------------------------------------------------------------------------------------------------menu
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

//----------------------------------------------------------------------------------------------------story
function yourStory() {
    alert("برای استوری گذاشتن نیاز به حساب کاربری داری !");
}
const allStories = {
    story1: [
        { name: "Rava", profile: "img/story-ravamedia.jpg", image: "data/ravamedia-story1.jpg" }
    ],
    story2: [
        { name: "new pictures", profile: "img/story-newpictures.png", image: "data/newpictures-story1.jpg" },
        { name: "new pictures", profile: "img/story-newpictures.png", image: "data/newpictures-story2.jpg" }
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

//---------------------------------------------------------------------------------------------------topPost
document.querySelectorAll('.top-post-stars').forEach(star => {
    let clicked = false;

    const span = star.querySelector('span');
    const baseCount = parseInt(span.innerText);

    star.addEventListener('click', () => {
        if (!clicked) {
            star.innerHTML = '&starf;<span>' + (baseCount + 1) + '</span>';
            clicked = true;
        } else {
            star.innerHTML = '&star;<span>' + baseCount + '</span';
            clicked = false;
        }
    });
});
document.querySelectorAll(".top-post-btns-copy").forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.dataset.copy;
        navigator.clipboard.writeText(text).then(() => {
            btn.innerText = "کپی شد";
            setTimeout(() => btn.innerText = "کپی", 1500)
        })
    })
})
document.querySelectorAll(".blogcontents-link-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.dataset.copy;
        navigator.clipboard.writeText(text).then(() => {
            btn.innerText = "Copied";
            setTimeout(() => btn.innerText = "Copy", 1500)
        })
    })
})

//---------------------------------------------------------------------------------------------downloadImgs
function downloadImageLocal(imgSrc) {
    const a = document.createElement("a");
    a.href = imgSrc;
    a.download = imgSrc.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
document.querySelector(".top-post-btns-download").addEventListener("click", () => {
    downloadImageLocal("data/newpictures-story1.jpg");
});

//---------------------------------------------------------------------------------------------admin page
function openAdminForm() {
    const modal = document.getElementById('admin-modal');
    modal.style.display = 'flex';
}
function adminLogin() {
    const pass = document.getElementById("admin-pass").value;
    const SECRET1 = "m0h-216548-secretcode-15478-xyz";
    const SECRET2 = "sup-564254-secretcode-23174-xyz"
    if (pass === SECRET1) {
        showFullScreen();
    } else {
        alert("رمز اشتباه است");
    }
}
function showFullScreen() {
    const fullScreenDiv = document.getElementById("adminDiv");
    setTimeout(() => {
        alert("به پنل مدیریت خوش امدید.")
        fullScreenDiv.style.display = "flex";
    }, 1000);
}