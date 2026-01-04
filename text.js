//بیو . تبریک مناسبت . شعر . طنز . غمگین . تنهایی
const textsData = [
    {
        text: `کاش اونقدر هم ک توقع دارید لیاقتم داشتید ...`,
        stars: 5, types: ["بیو", "غمگین"]
    },
    {
        text: `در تاریخ بنوسید ؛ پدر با ۱۴میلیون ماشین خرید ، فرزند‌ با ۱۴میلیون گواهینامه گرفت..`,
        stars: 0, types: ["بیو", "غمگین"]
    },
    {
        text: `یهو برمیگردی نگاش میکنی میبینی اونم داره نگات میکنه 🗿🎀(مراقب امتحانو میگم ، واقعا لحضه عاشقانه ایه🤣 ) `,
        stars: 1, types: ["بیو", "طنز"]
    },
    {
        text: `دنیا دو روزه ما پنج روزش مدرسه ایم😂💔`,
        stars: 0, types: ["بیو", "طنز"]
    },
    {
        text: `مثل پاکت چیپس میمونین ،هفتاد درصدتون هواست...!🦅.`,
        stars: 0, types: ["بیو", "طنز", "تنهایی"]
    },
    {
        text: `شدیم مثل اون گالری که... وقتی نت ندارن میان سراغش😄🖤`,
        stars: 1, types: ["بیو", "غمگین", "تنهایی"]
    },
    {
        text: `خدا وفاداری رو به سگ داد تا تو بفهمی از چی کمتری. 😂👌`,
        stars: 2, types: ["بیو", "طنز"]
    },
    {
        text: `ادم‌ها‌بهت‌یاد‌میدن‌هیچی‌بهتراز‌تنهایی‌نیس..🖤.. `,
        stars: 0, types: ["بیو", "غمگین", "تنهایی"]
    },
    {
        text: `عزیز میشی وقتی تو این دنیا نباشی!🖤`,
        stars: 4, types: ["بیو", "غمگین"]
    },
    {
        text: `}ما که بودنمون قشنگ نبود ..‌‌..! بزار نبودنمون قشنگش کنه ....))💔🖤`,
        stars: 0, types: ["بیو", "غمگین"]
    },
    {
        text: `مگه چقد پیچیده بودیم که هیشکی بلدمون نبود!🙂`,
        stars: 0, types: ["بیو", "غمگین", "تنهایی"]
    },
    {
        text: `کاش خاطرات دکمهِ Ðełete داشتَن✈️🖤`,
        stars: 2, types: ["بیو", "غمگین", "تنهایی"]
    },
    {
        text: `تا که هستم ندانی کیستم
         تا که دانی دگر نیستم...:)`,
        stars: 0, types: ["شعر", "تنهایی", "غمگین"]
    },
    {
        text: `زندگی در گذر است
         و آدمی رهگذر..،`,
        stars: 0, types: ["شعر", "غمگین", "تنهایی"]
    },
    {
        text: `گر نگهدار من آن است که من میدانم 
        شیشه را در بغل سنگ نگه میدارد`,
        stars: 4, types: ["شعر"]
    },
    {
        text: `دردم از یار است و درمان نیز هم
        دل فدای او شد و جان نیز هم`,
        stars: 2, types: ["شعر"]
    },
    {
        text: `اندر دل من درون و بیرون همه او است
        اندر تن من جان و رگ و خون همه اوست`,
        stars: 0, types: ["شعر"]
    },
    {
        text: `بودنم را هیچ کس باور نداشت
        هیچکس کاری به کار من نداشت
        بنویسید بعد مرگم روی سنگ
        با خطوطی نرم زیبا و قشنگ
        آنکه خوابیده در این گور سرد
        بودنش را هیچ کس باور نکرد`,
        stars: 0, types: ["شعر", "غمگین"]
    },
    {
        text: `با آمدن بهار، دل‌ها جوانه می‌زنند.
        نوروزتان با لحظه‌هایی پر از شادی مبارک.`,
        stars: 0, types: ["تبریک مناسبت"]
    },
    {
        text: `شب چله، شب دورهمی و خاطره‌بافی، بر شما مبارک!`,
        stars: 0, types: ["تبریک مناسبت"]
    },
    {
        text: `یک سال دیگر، یک سال پر از تجربیات جدید.
        تولدت مبارک`,
        stars: 1, types: ["تبریک مناسبت"]
    },
    {
        text: `[اسم] عزیز،
        امروز روزی است که دنیا به خودش تبریک می‌گوید
        چون تو در آن هستی. تولدت مبارک!`,
        stars: 0, types: ["تبریک مناسبت"]
    },
    {
        text: `آرزو های خوب برات دارم و امیدوارم هیچوقت تسلیم نشی و با آرزوهات خاطره داشته باشی قشنگم✨ تولدت مبارک:)️ `,
        stars: 2, types: ["تبریک مناسبت"]
    }
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
document.addEventListener("click", e => {
    if (e.target.classList.contains("text-texts-div-btns-copy")) {
        navigator.clipboard.writeText(e.target.dataset.copy);
    }
});
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.style.background = "");
        btn.style.background = "#d3d3d3";
        
        /*showLoading();*/
        
        setTimeout(() => {
            renderTexts(btn.innerText);
        }, 0.1);
    });
});
renderTexts();