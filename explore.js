
document.addEventListener("DOMContentLoaded", () => {

  const exploreData = [
    {
      kind: "photo", stars: 6,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512570/1lh4gs6q_rkys3s.jpg",
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512595/1lg4diqk_qkmhcq.jpg",
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512588/1lblpkoh_ovh34w.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512569/1ld0mt82_dfpphq.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512558/1lfla5ni_concsa.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512415/1lh1onho_crwfy5.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512404/1jhsq82f_pv0ygb.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512400/1lh2oo3j_zesbjp.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512394/1lccj1lb_bt1qbx.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512393/1lhcd0t9_gvzxal.jpg"
    },
    {
      kind: "photo", stars: 1,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512245/1lhcfe4c_ihjfcc.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512148/1lhch810_in8zro.jpg"
    },
    {
      kind: "photo", stars: 1,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512394/1lccj1lb_bt1qbx.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1766650824/IMG_20251225_013834_818_kjktta.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767512219/1lhcctfj_raqydk.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1766650248/cld-sample-2.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547066/1lca0sde_iht7ri.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547107/1l21tc85_czucoc.jpg"
    },
    {
      kind: "photo", stars: 2,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547123/1l5jlse9_h7by08.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547148/1lbj1e5r_xgjvgi.jpg"
    },
    {
      kind: "photo", stars: 0,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767547151/1lcufqi8_kqk5te.jpg"
    },
    {
      kind: "photo", stars: 1,
      src: "https://res.cloudinary.com/dyi35hebs/image/upload/v1767546997/1lh2vt2e_eqfmhl.jpg"
    },
    {
      kind: "text", stars: 4,
      text: `کاش اونقدر هم ک توقع دارید لیاقتم داشتید ...`
    },
    {
      kind: "text", stars: 1,
      text: `در تاریخ بنوسید ؛ پدر با ۱۴میلیون ماشین خرید ، فرزند‌ با ۱۴میلیون گواهینامه گرفت..`
    },
    {
      kind: "text", stars: 1,
      text: `در تاریخ بنوسید ؛ پدر با ۱۴میلیون ماشین خرید ، فرزند‌ با ۱۴میلیون گواهینامه گرفت..`
    },
  ];

  const container = document.querySelector(".explore-container");

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function attachStars() {
    document.querySelectorAll(".top-post-stars").forEach(star => {
      if (star.dataset.binded) return;
      star.dataset.binded = "true";

      let clicked = false;
      const span = star.querySelector("span");
      const base = parseInt(span.innerText);

      star.addEventListener("click", () => {
        if (!clicked) {
          star.innerHTML = `★<span>${base + 1}</span>`;
          clicked = true;
        } else {
          star.innerHTML = `☆<span>${base}</span>`;
          clicked = false;
        }
      });
    });
  }

  function attachCopy() {
    document.querySelectorAll(".text-texts-div-btns-copy").forEach(btn => {
      if (btn.dataset.binded) return;
      btn.dataset.binded = "true";

      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(btn.dataset.copy);
      });
    });
  }

  async function downloadImage(url) {
    const res = await fetch(url, { mode: "cors" });
    const blob = await res.blob();

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = url.split("/").pop().split("?")[0];
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }

  function attachDownload() {
    document.querySelectorAll(".photo-photos-btns-download").forEach(btn => {
      if (btn.dataset.binded) return;
      btn.dataset.binded = "true";

      btn.addEventListener("click", () => {
        const img = btn.closest(".photo-photos-div")
                       .querySelector("img");
        downloadImage(img.src);
      });
    });
  }

  function renderExplore() {
    container.innerHTML = "";
    shuffle(exploreData);

    exploreData.forEach(item => {
      const div = document.createElement("div");
      div.className = "explore-item";

      if (item.kind === "text") {
        div.innerHTML = `
          <div class="text-texts-div">
            <div class="text-texts-div-div1">
              <span class="text-texts-div-div1-span">${item.text}</span>
              <div class="top-post-stars">☆<span>${item.stars}</span></div>
            </div>
            <div class="text-texts-div-btns">
              <button class="text-texts-div-btns-copy"
                data-copy="${item.text}">کپی</button>
            </div>
          </div>
        `;
      }

      if (item.kind === "photo") {
        div.innerHTML = `
          <div class="photo-photos-div">
            <img class="photo-photos-img" src="${item.src}">
            <div class="photo-photos-btns">
              <button class="photo-photos-btns-download">دانلود</button>
              <div class="top-post-stars">☆<span>${item.stars}</span></div>
            </div>
          </div>
        `;
      }

      container.appendChild(div);
    });

    attachStars();
    attachCopy();
    attachDownload();
  }

  renderExplore();

});
