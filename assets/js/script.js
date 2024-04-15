Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  allowTouchMove: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const burder = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const eventType = document.querySelector(".cases-page__select-wrap");
const eventFilter = document.querySelector(".cases-page__filter");
const filterBtns = document.querySelectorAll(".filter__item");
const casesItems = document.querySelectorAll(".cases-page__item");
const casesAllBtn = document.querySelector(".cases-page__item_all");
const caseNone = document.querySelector(".cases-page__item_none");

if (filterBtns) {
  filterBtns.forEach((item) => {
    item.addEventListener("click", function () {
      filterBtns.forEach((item) => {
        item.classList.remove("filter__item_active");
      });
      this.classList.add("filter__item_active");
      casesItems.forEach((item) => {
        item.style.display = "none";
        caseNone.style.display = "block";
      });
    });
  });
}

if (casesAllBtn) {
  casesAllBtn.addEventListener("click", function () {
    casesItems.forEach((item) => {
      item.style.display = "block";
      caseNone.style.display = "none";
    });
  });
}

burder.addEventListener("click", function () {
  this.classList.toggle("burger_active");
  menu.classList.toggle("header__nav_active");
  if (menu.classList.contains("header__nav_active")) {
    bodyLock();
  } else {
    bodyUnLock();
  }
});

if (eventType) {
  eventType.addEventListener("click", function () {
    this.classList.toggle("cases-page__select-wrap_active");
    eventFilter.classList.toggle("cases-page__filter_active");
    if (eventFilter.classList.contains("cases-page__filter_active")) {
      bodyLock();
    } else {
      bodyUnLock();
    }
  });
}

// popup:
// const popupLink = document.querySelector('.popup-form');
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
// const popupBtn = document.querySelector('.popup-form__btn');
const lockPadding = document.querySelectorAll(".lock-padding");
const btn = document.querySelector(".project-btn");
const form = document.querySelector("#popup-form");
const successModal = document.querySelector("#success");
const timeout = 800;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  popupClose(form);

  setTimeout(function () {
    popupOpen(successModal);
  }, timeout);
});

let unlock = true;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName); //получаем id попап-окна
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".popup-close");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup")); //ближайший родитель класса popup
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      // закрываем текущий открытый попап, если он есть
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        // если клик был по области вокруг попапа то ничего не делаем
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

// добавляем боди padding-right при открытии попапа, на ширину скролл-бара
function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".header").offsetWidth + "px";
  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.marginRight = lockPaddingValue;
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.marginRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

// полифилы:
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector;
  }
});

let margin = 16;

jQuery(($) => {
  if ($(window).width() <= 768) {
    margin = 13;
  }
});

jQuery(($) => {
  if ($(window).width() > 560) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: margin,
      nav: false,
      dots: false,
      singleItem: false,
      autoplay: true,
      smartSpeed: 1000,
      autoplayTimeout: 5000,
      responsive: {
        561: {
          items: 2.3
        },
        900: {
          items: 3.3
        },
      }
    });
  }
});
