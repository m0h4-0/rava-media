//پس زمینه . پروفایل . مذهبی . ورزش . عاشقانه . استوری
document.addEventListener("DOMContentLoaded", () => {
    const photosData = [
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512570/1lh4gs6q_rkys3s.jpg",
            stars: 6, types: ["پس زمینه", "استوری", "ورزش"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512595/1lg4diqk_qkmhcq.jpg",
            stars: 0, types: ["پروفایل"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512588/1lblpkoh_ovh34w.jpg",
            stars: 0, types: ["پس زمینه", "ورزش", "استوری"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512569/1ld0mt82_dfpphq.jpg",
            stars: 0, types: ["پروفایل", "ورزش"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512558/1lfla5ni_concsa.jpg",
            stars: 0, types: ["پروفایل", "ورزش"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512415/1lh1onho_crwfy5.jpg",
            stars: 0, types: ["پروفایل", "عاشقانه"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512404/1jhsq82f_pv0ygb.jpg",
            stars: 0, types: ["پروفایل"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512400/1lh2oo3j_zesbjp.jpg",
            stars: 0, types: ["پروفایل"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512394/1lccj1lb_bt1qbx.jpg",
            stars: 0, types: ["پروفایل", "عاشقانه"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512393/1lhcd0t9_gvzxal.jpg",
            stars: 0, types: ["پس زمینه", "استوری", "عاشقانه"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512245/1lhcfe4c_ihjfcc.jpg",
            stars: 1, types: ["پس زمینه", "استوری"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512148/1lhch810_in8zro.jpg",
            stars: 0, types: ["پس زمینه", "عاشقانه", "استوری"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512394/1lccj1lb_bt1qbx.jpg",
            stars: 1, types: ["پروفایل", "عاشقانه"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1766650824/IMG_20251225_013834_818_kjktta.jpg",
            stars: 0, types: ["پروفایل"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512219/1lhcctfj_raqydk.jpg",
            stars: 0, types: ["پروفایل"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1766650248/cld-sample-2.jpg",
            stars: 0, types: ["پس زمینه"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547066/1lca0sde_iht7ri.jpg",
            stars: 0, types: ["پس زمینه", "استوری", "مذهبی"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547107/1l21tc85_czucoc.jpg",
            stars: 0, types: ["پس زمینه", "استوری", "مذهبی"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547123/1l5jlse9_h7by08.jpg",
            stars: 2, types: ["پس زمینه", "استوری", "مذهبی"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547148/1lbj1e5r_xgjvgi.jpg",
            stars: 0, types: ["پس زمینه", "استوری", "مذهبی"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547151/1lcufqi8_kqk5te.jpg",
            stars: 0, types: ["پس زمینه", "استوری", "مذهبی"]
        },
        {
            src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767546997/1lh2vt2e_eqfmhl.jpg",
            stars: 1, types: ["پس زمینه", "ورزش", "استوری"]
        }
    ];
    const photoContainer = document.querySelector(".photo-photos");
    const photoButtons = document.querySelectorAll(".photo-buttons-btn");

    function shuffle(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }
    function showPhotoLoading() {
        photoContainer.innerHTML = `
            <div style="direction: rtl;
            text-align: center;
            padding: 30px 30px 220px;
            font-family: 'font1';
            opacity: .7;
            font-size: 20px;">در حال بارگذاری...</div>
        `;
    }
    function attachPhotoStars() {
        photoContainer.querySelectorAll('.top-post-stars').forEach(star => {
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
    async function downloadImage(url) {
        const res = await fetch(url, { mode: "cors" });
        const blob = await res.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = url.split("/").pop().split("?")[0];
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }
    function renderPhotos(filter = "همه") {
        let filtered =
            filter === "همه"
                ? photosData
                : photosData.filter(p => p.types.includes(filter));
        shuffle(filtered);
        photoContainer.innerHTML = "";
        filtered.forEach(item => {
            const div = document.createElement("div");
            div.className = "photo-photos-div";
            div.innerHTML = `
                <img class="photo-photos-img" src="${item.src}">
                <div class="photo-photos-btns">
                    <button class="photo-photos-btns-download">دانلود</button>
                    <div class="top-post-stars">&star;<span>${item.stars}</span></div>
                </div>
            `;
            photoContainer.appendChild(div);
            div.querySelector(".photo-photos-btns-download")
                .addEventListener("click", () => downloadImage(item.src));
        });
        attachPhotoStars();
    }
    photoButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            photoButtons.forEach(b => b.style.background = "");
            btn.style.background = "#d3d3d3";
            //showPhotoLoading();
            setTimeout(() => renderPhotos(btn.innerText)/*, 0.1*/);
        });
    });
    renderPhotos();
});