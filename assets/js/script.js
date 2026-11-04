/**
 * @file script.js
 * @description Core interactive UI scripts, GSAP animations, custom cursor, smooth scrolling,
 * and dual-selector event handling (.ra-*, .*).
 */
//  ------------------------------------- [ GSAP & ScrollSmoother Setup ]
if (typeof gsap !== "undefined") {
  gsap.registerPlugin(
    typeof ScrollTrigger !== "undefined" ? ScrollTrigger : null,
    typeof ScrollSmoother !== "undefined" ? ScrollSmoother : null,
    typeof ScrollToPlugin !== "undefined" ? ScrollToPlugin : null,
    typeof SplitText !== "undefined" ? SplitText : null
  );
}

var smoother = window.smoother || undefined;
if (!window.smoother && document.querySelector("#smooth-wrapper") && document.querySelector("#smooth-content")) {
  smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.4, // Buttery smooth mouse wheel scrolling (seconds to catch up)
    effects: true,
    smoothTouch: 0.1,
    normalizeScroll: true
  });
  window.smoother = smoother;
  window.dispatchEvent(new CustomEvent("smootherReady", { detail: smoother }));
}

// ------------------------------------ [ GSAP Headings SplitText Animation (Brevon Style) ]
function initHeadingAnimations() {
  if (typeof gsap === "undefined" || typeof SplitText === "undefined") return;

  const headings = document.querySelectorAll("h1, h2, h3");

  headings.forEach(function (el) {
    if (el.dataset.splitInitialized) return;
    // Exclude infinite ticker elements, small numeric badges, Trionn work section, and Trionn orbit section
    if (
      el.closest("#work-section") ||
      el.closest("#dribbble-orbit") ||
      el.closest(".trionn-orbit-section") ||
      el.closest(".ra-trionn-orbit-section") ||
      el.classList.contains("mrquee-text") ||
      el.classList.contains("ra-mrquee-text") ||
      el.closest(".dribble-title-wrap") ||
      el.closest(".ra-dribble-title-wrap") ||
      el.closest(".slider-logo") ||
      el.closest(".ra-slider-logo") ||
      el.closest(".marquee") ||
      el.closest(".ra-marquee") ||
      el.closest(".marquee__content") ||
      el.closest(".ra-marquee__content") ||
      el.closest(".logos-slide") ||
      el.closest(".ra-logos-slide") ||
      el.classList.contains("d-none") ||
      el.classList.contains("ex-number") ||
      el.classList.contains("year-award")
    ) {
      return;
    }

    el.dataset.splitInitialized = "true";

    const split = new SplitText(el, {
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    gsap.set(split.chars, {
      opacity: 0.3,
      x: -7
    });

    // Only hero headings play the initial load entrance animation
    if (el.closest(".ra-hero, .hero")) {
      gsap.to(split.chars, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: "power2.out",
        delay: 0.3
      });
    } else {
      // Use card or row container as trigger for services and projects so all items scrub predictably
      const triggerEl = el.closest(".ra-box-service-under, .box-service-under") || el.closest(".ra-data-detail, .data-detail") || el;

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: triggerEl,
          start: "top 92%",
          end: "top 60%",
          markers: false,
          scrub: 1
        },
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.2
      });
    }
  });
}


// ------------------------------------ [ Self Intro Scroll Text Reveal ]
function initSelfIntroScrollAnimation() {
  const introEl = document.querySelector(".ra-self-intro, .self-intro");
  if (!introEl || typeof gsap === "undefined" || typeof SplitText === "undefined") return;
  if (introEl.dataset.introSplitInitialized) return;
  introEl.dataset.introSplitInitialized = "true";

  const split = new SplitText(introEl, {
    type: "words,chars",
    wordsClass: "intro-word",
    charsClass: "intro-char"
  });

  gsap.set(split.chars, { opacity: 0.15 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: introEl,
      start: "top 85%",
      end: "center 50%",
      scrub: 1,
      invalidateOnRefresh: true
    }
  });

  tl.fromTo(
    split.chars,
    { opacity: 0.15 },
    {
      opacity: 1,
      duration: 1,
      stagger: 1,
      ease: "none"
    }
  );
}

//  ------------------------------------- [ Loader Design Data ]
/*------------------------------------- Kinetic Rolling Button Hover Animation -------------------------------------*/
function initButtonHoverAnimations() {
  if (typeof gsap === "undefined") return;

  const buttonSelectors = ".ra-btn-design, .btn-design, .ra-btn-main, .btn-main, .ra-btn-princ, .btn-princ, .ra-mexix-btn, .mexix-btn, .ra-btn-mark, .btn-mark, .btn-animated, .button";
  const buttons = gsap.utils.toArray(buttonSelectors);

  buttons.forEach((item) => {
    if (item.dataset.hoverAnimInitialized === "true") return;
    item.dataset.hoverAnimInitialized = "true";

    let span = item.querySelector("span:not(.border-animate):not(.link-nav)");
    if (!span) {
      const text = item.innerHTML.trim();
      item.innerHTML = `<span>${text}</span>`;
      span = item.querySelector("span");
    }

    let tl = gsap.timeline({ paused: true });

    tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.2, yPercent: 0 });

    item.addEventListener("mouseenter", () => tl.play(0));
  });
}

//  ------------------------------------- [ Loader Design Data ]
function finishLoader() {
  initButtonHoverAnimations();
  setTimeout(function () {
    $(".ra-preloader, .preloader").addClass("loaded").fadeOut(600, function () {
      initHeadingAnimations();
      initSelfIntroScrollAnimation();
      initButtonHoverAnimations();
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    });
  }, 1000);
}

if (document.readyState === "complete") {
  finishLoader();
} else {
  $(window).on("load", finishLoader);
}

$(document).ready(function () {
  initButtonHoverAnimations();
  setTimeout(function () {
    initHeadingAnimations();
    initSelfIntroScrollAnimation();
    initButtonHoverAnimations();
    ScrollTrigger.refresh();
  }, 1200);

  // Load More Projects Handler
  $("#loadMoreProjects").on("click", function (e) {
    e.preventDefault();
    const $btn = $(this);
    const $moreProjects = $(".data-sec-project .more-project");

    $btn.html("<span>Loading...</span>");
    setTimeout(function () {
      $moreProjects.each(function (index) {
        $(this).delay(index * 120).fadeIn(500);
      });
      $btn.parent().fadeOut(400);

      setTimeout(function () {
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.refresh();
        }
      }, 700);
    }, 250);
  });
});

// ------------------------------------ [ Header scroll ]
var $header = $("[data-header]");

function updateHeaderState(st) {
  if (st > 20) {
    $header.addClass("active");
  } else {
    $header.removeClass("active");
  }
}

$(window).on("scroll", function () {
  const scrollTop = parseInt($(this).scrollTop(), 10) || (smoother ? Math.round(smoother.scrollTop()) : 0);
  updateHeaderState(scrollTop);
});

if (smoother) {
  ScrollTrigger.create({
    start: 20,
    onUpdate: (self) => {
      updateHeaderState(self.scroll());
    }
  });
}

// ------------------------------------ [ menu open close ]
// Menu Open
$(document).on("click", ".ra-menu-bar, .menu-bar", function () {
  $("#menu").addClass("active");
});

// Menu Close
$(document).on("click", ".ra-close-bar, .close-bar", function () {
  $("#menu").removeClass("active");
});

// ------------------------------------ [ id Scroll page click  ] 
$(document).on("click", "a[href^='#']", function (e) {
  const target = $(this).attr("href");
  if (!target || target === "#" || target === "#!") return;
  const $target = $(target);
  if ($target.length) {
    e.preventDefault();

    if (smoother) {
      smoother.scrollTo(target, true, "top 40px");
    } else {
      $("html, body").animate(
        {
          scrollTop: $target.offset().top - 40
        },
        800
      );
    }

    $(".ra-navbar-data a, .navbar-data a").removeClass("active");
    $(`.ra-navbar-data a[href='${target}'], .navbar-data a[href='${target}']`).addClass("active");

    $("#menu").removeClass("active");
  }
});

// ------------------------------------ [ Light & Dark Mode ]
// Light & Dark theme state is managed natively in React (Header.jsx).
// Initialize body theme on startup from localStorage:
(function () {
  var selectedTheme = localStorage.getItem("selected-theme");
  if (selectedTheme === "dark") {
    $("body").addClass("dark-theme");
  } else if (selectedTheme === "light") {
    $("body").removeClass("dark-theme");
  }
})();


//  ------------------------- Cursor Design
(function () {
  "use strict";

  const cursor = document.querySelector(".cursor");
  if (!cursor) return;

  if ("ontouchstart" in window || window.innerWidth < 768) {
    cursor.style.display = "none";
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  const speed = 0.2;

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

    requestAnimationFrame(animate);
  }
  animate();

  document.addEventListener("mouseover", function (e) {
    if (e.target.closest("a, button, .slide-box, .cursor-pointer")) {
      cursor.classList.add("active");
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.closest("a, button, .slide-box, .cursor-pointer")) {
      cursor.classList.remove("active");
    }
  });
})();

//  ------------------------- Testimonial Design
if ($('.ra-testimonial-detail, .testimonial-detail').length) {
  $('.ra-testimonial-detail, .testimonial-detail').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 800,

    customPaging: function (slider, i) {
      return '<button type="button"></button>';
    },
  });
}

/*----------------------- Blog Slider -----------------------------*/
if ($(".blog-leage").length) {
  $(".blog-leage").slick({
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 800,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

/*----------------------- Whole Page Scrolling Animation -----------------------------*/
(function ($) {
  "use strict";
  const elements = document.querySelectorAll(
    ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

      });
    }, {
      threshold: 0.2
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });

  } else {
    elements.forEach(function (el) {
      el.classList.add("show");
    });
  }
})(jQuery);

/*----------------------- Services Blog  Open popup -----------------------------*/
(function ($) {
  "use strict";

  /* Open Popup */
  $(document).on("click", ".ra-services-title, .services-title", function () {
    openPopup(".ra-popup-box-dash, .popup-box-dash");
  });

  // Project popup disabled as requested

  $(document).on("click", ".ra-slide-box, .slide-box", function () {
    openPopup(".ra-popup-box-dash-blog, .popup-box-dash-blog");
  });

  function openPopup(target) {
    $(".ra-popup-overlay, .popup-overlay").fadeIn(200);
    $(target).removeClass("hide").addClass("show");
    if (smoother) smoother.paused(true);

    const popupHeadings = document.querySelectorAll(`${target} h2, ${target} h3`);
    popupHeadings.forEach(function (el) {
      if (!el.dataset.popupSplit) {
        el.dataset.popupSplit = "true";
        const s = new SplitText(el, { type: "lines,words,chars", linesClass: "split-line" });
        gsap.fromTo(
          s.chars,
          { opacity: 0.3, x: -7 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.02, ease: "power2.out", delay: 0.2 }
        );
      }
    });
  }

  /* Close Popup */
  $(document).on("click", ".ra-close-popup, .close-popup, .ra-popup-overlay, .popup-overlay, .ra-circle-wrap, .circle-wrap", function () {

    $(".ra-popup-box-dash, .popup-box-dash, .ra-popup-box-dash-project, .popup-box-dash-project, .ra-popup-box-dash-blog, .popup-box-dash-blog")
      .removeClass("show")
      .addClass("hide");

    setTimeout(function () {
      $(".ra-popup-overlay, .popup-overlay").fadeOut(200);
      if (smoother) smoother.paused(false);
    }, 300);
  });

})(jQuery);

// ------------------------------- link hover image show
(function ($) {
  "use strict";

  const items = document.querySelectorAll(".ra-main-sec-design-hover, .main-sec-design-hover");

  items.forEach(function (item) {

    const reveal = item.querySelector(".ra-hover-reveal, .hover-reveal");
    if (!reveal) return;

    let mouseX = 0;
    let mouseY = 0;

    let posX = 0;
    let posY = 0;

    const speed = 0.12;

    item.addEventListener("mousemove", function (e) {
      const rect = item.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      reveal.style.opacity = "1";
    });

    function animate() {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;
      reveal.style.transform =
        `translate(${posX}px, ${posY}px) translate(-50%, -50%) scale(1)`;
      requestAnimationFrame(animate);

    }
    animate();
    item.addEventListener("mouseleave", function () {

      reveal.style.opacity = "0";
      reveal.style.transform =
        `translate(${posX}px, ${posY}px) translate(-50%, -50%) scale(0.8)`;
    });
  });
})(jQuery);


/*------------------------------------- Pop Videos -------------------------------------*/
$(document).ready(function () {
  $('.youtube').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=PavYAOpVpJI'
    },
    type: 'iframe'
  });
});

/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.ra-logos-data, .logos-data').forEach(function (logosContainer) {
  const slideEl = logosContainer.querySelector('.ra-logos-slide, .logos-slide');
  if (slideEl) {
    const copy = slideEl.cloneNode(true);
    logosContainer.appendChild(copy);
  }
});

/*------------------------------------- Safe Static Form Intercept -------------------------------------*/
$(document).ready(function () {
  $(".ra-main-contact, .main-contact").on("submit", function (e) {
    e.preventDefault();
    const name = $(this).find('input[name="username"], input[name="Name"]').val() || "";
    const email = $(this).find('input[name="email"], input[name="Email"]').val() || "";
    const project = $(this).find('input[name="interested_project"]').val() || "";
    const budget = $(this).find('input[name="budget"]').val() || "";
    const msg = $(this).find('textarea[name="message"]').val() || "";
    
    let text = `Hello Rehan, my name is ${name} (${email}).`;
    if (project) text += ` Interested in: ${project}.`;
    if (budget) text += ` Budget: ${budget}.`;
    if (msg) text += ` Message: ${msg}`;
    const waText = encodeURIComponent(text);
    window.open(`https://wa.me/923260735090?text=${waText}`, "_blank", "noopener,noreferrer");
    return false;
  });
  
});
