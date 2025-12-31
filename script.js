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



document.addEventListener('click', e => {
    const topPostBtnsDownloadBtn = e.target.closest('.top-post-btns-download');
    if (!topPostBtnsDownloadBtn) return;

    const topPostBtnsDownloadUrl = topPostBtnsDownloadBtn.dataset.download;
    if (!topPostBtnsDownloadUrl) return;

    const topPostBtnsDownloadA = document.createElement('topPostBtnsDownloadA');
    topPostBtnsDownloadA.href = topPostBtnsDownloadUrl;
    topPostBtnsDownloadA.download = '';
    topPostBtnsDownloadA.click();
});
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

/*---------------------------------------------------------------------------------------------------------text.html*/
const textsData = [
    {
        text: `کاش اونقدر هم ک توقع دارید لیاقتم داشتید ...`,
        stars: 310,
        types: ["بیو", "شاخ"]
    },
    {
        text: `تولد تنها دختری که تونست منو با وجود تمام عیب هایم را دوست داشته باشه مبارک. عاشقتم.`,
        stars: 244,
        types: ["تبریک تولد", "عاشقانه"]
    },
    {
        text: `نه اخلاق دارم نه حوصله نه اعصاب کلن #کنسلم!`,
        stars: 221,
        types: ["بیو", "مغرور", "شاخ"]
    },
    {
        text: `آدم های کمی درک میکنن
        ما در موقعیت هایی زندگی کردیم که همیشه با نشدن ها شروع و تموم شد:)`,
        stars: 140,
        types: ["بیو", "غمگین"]
    },
    {
        text: `سیگارکشیدن‌ضررش‌کمتراز‌دوست‌داشتن‌آدماست.`,
        stars: 203,
        types: ["بیو", "مغرور", "شاخ"]
    },
    {
        text: `با تو میشه بدون بال پرواز کرد🎀✨`,
        stars: 41,
        types: ["بیو", "عاشقانه"]
    },
    {
        text: `𝘢𝘯𝘨𝘦𝘳 𝘪𝘴 𝘵𝘩𝘦 𝘴𝘩𝘪𝘦𝘭𝘥 𝘰𝘧 𝘮𝘺 𝘧𝘦𝘦𝘭𝘪𝘯𝘨𝘴.
        عصبانیت سپر احساساتِ منه🕊`,
        stars: 69,
        types: ["بیو", "احساسات"]
    },
    {
        text: `با ما سَرد نَباش سَرما میخوری...🙂😂`,
        stars: 23,
        types: ["طنز", "شاخ"]
    },
    {
        text: `-مغز جالب ترین عـضو بدنه 
        از زمان تولد تا موقع مرگ کار میکنه به جز سر امتـحان😐😞🎀`,
        stars: 189,
        types: ["طنز", "استرس"]
    },
];
const container = document.querySelector(".text-texts");
const buttons = document.querySelectorAll(".text-buttons-btn");

function attachStars() {
    document.querySelectorAll('.top-post-stars').forEach(star => {
        let clicked = false;
        const span = star.querySelector('span');
        const baseCount = parseInt(span.innerText);
        
        star.addEventListener('click', () => {
            if (!clicked) {
                star.innerHTML = '&starf;<span>' + (baseCount + 1) + '</span>';
                clicked = true;
            } else {
                star.innerHTML = '&star;<span>' + baseCount + '</span>';
                clicked = false;
            }
        });
    });
}  
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
function showLoading() {
    container.innerHTML = `
        <div style="direction: rtl;
        text-align: center;
        padding: 30px 30px 220px;
        font-family: 'font1';
        opacity: .7;
        font-size: 20px;">در حال بارگذاری...</div>
    `;
}
function renderTexts(filter = "همه") {
    let filtered =
        filter === "همه"
            ? textsData
            : textsData.filter(t => t.types.includes(filter));
    shuffle(filtered);
    container.innerHTML = "";
    filtered.forEach(item => {
        const div = document.createElement("div");
        div.className = "text-texts-div";
  
        div.innerHTML = `
            <div class="text-texts-div-div1">
                <span class="text-texts-div-div1-span">${item.text}</span>
                <div class="top-post-stars">☆<span>${item.stars}</span></div>
            </div>
            <div class="text-texts-div-type" style="margin-top:8px;">
                ${item.types.map(t => `<div class="text-texts-div-type-t">${t}</div>`).join("")}
            </div>
            <div class="text-texts-div-btns">
                <button class="text-texts-div-btns-copy" data-copy="${item.text}">کپی</button>
            </div>
        `;
        container.appendChild(div);
        attachStars();
    });
}
// copy
document.addEventListener("click", e => {
    if (e.target.classList.contains("text-texts-div-btns-copy")) {
        navigator.clipboard.writeText(e.target.dataset.copy);
    }
});
// buttons + loading
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.style.background = "");
        btn.style.background = "#d3d3d3";
        
        showLoading();
        
        setTimeout(() => {
            renderTexts(btn.innerText);
        }, 800);
    });
});
  
// first load
renderTexts();
