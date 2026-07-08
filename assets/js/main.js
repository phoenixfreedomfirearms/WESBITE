const dealerLink = "https://sixpac.app/mystore/phoenix-freedom-firearms";
const phoneLink = "tel:770-912-4041";
const textLink = "sms:+17709124041";

const navToggle = document.querySelector("[data-nav-toggle]");
const navList = document.querySelector("[data-nav-list]");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const open = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const header = document.querySelector(".site-header");
const progress = document.querySelector(".scroll-progress");
let scrollTicking = false;

const updateScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  if (progress) {
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  }
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  document.body.classList.toggle("quick-actions-visible", window.scrollY > 360 || document.body.classList.contains("page-light"));
  scrollTicking = false;
};

const queueScrollUpdate = () => {
  if (scrollTicking) return;
  scrollTicking = true;
  window.requestAnimationFrame(updateScroll);
};
updateScroll();
window.addEventListener("scroll", queueScrollUpdate, { passive: true });
window.addEventListener("resize", queueScrollUpdate, { passive: true });

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const normalizedHref = href.replace(/\/+$/, "") || "/";
  if (normalizedHref === pathname) {
    link.classList.add("is-active");
  }
});

const revealItems = document.querySelectorAll(".reveal");
const revealIfVisible = (item) => {
  const rect = item.getBoundingClientRect();
  if (rect.top < window.innerHeight * .92 && rect.bottom > 0) {
    item.classList.add("is-visible");
    return true;
  }
  return false;
};
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });
  revealItems.forEach((item) => {
    if (!revealIfVisible(item)) observer.observe(item);
  });
  window.addEventListener("load", () => {
    revealItems.forEach((item) => {
      if (revealIfVisible(item)) observer.unobserve(item);
    });
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImg = document.querySelector("[data-lightbox-img]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
document.querySelectorAll("[data-lightbox-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!lightbox || !lightboxImg || !lightboxCaption) return;
    const img = trigger.querySelector("img");
    const caption = trigger.querySelector("span");
    if (!img) return;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : img.alt;
    lightbox.hidden = false;
    lightboxClose?.focus();
  });
});

const closeLightbox = () => {
  if (!lightbox || !lightboxImg) return;
  lightbox.hidden = true;
  lightboxImg.removeAttribute("src");
};
lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

const shopPop = document.querySelector("[data-shop-pop]");
const shopPopClose = document.querySelector("[data-shop-pop-close]");
if (shopPop && !localStorage.getItem("pffShopPopDismissed")) {
  window.setTimeout(() => shopPop.classList.add("is-visible"), 45000);
}
shopPopClose?.addEventListener("click", () => {
  localStorage.setItem("pffShopPopDismissed", "true");
  shopPop?.classList.remove("is-visible");
});

document.querySelectorAll("[data-dealer-link]").forEach((link) => {
  link.setAttribute("href", dealerLink);
});

document.querySelectorAll("[data-phone-link]").forEach((link) => {
  link.setAttribute("href", phoneLink);
});

document.querySelectorAll(".quick-contact, [data-text-link]").forEach((link) => {
  if (link.classList.contains("quick-contact")) {
    link.setAttribute("href", textLink);
    link.setAttribute("aria-label", "Text us at 770-912-4041");
    const textNode = Array.from(link.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim());
    if (textNode) {
      textNode.textContent = "Text Us";
    } else if (!link.querySelector("svg")) {
      link.textContent = "Text Us";
    }
    return;
  }

  link.setAttribute("href", textLink);
});
