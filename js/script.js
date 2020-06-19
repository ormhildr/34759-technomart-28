var btnBuy = document.querySelectorAll(".products-buy");
var cartModal = document.querySelector(".modal-cart");
var cartClose = cartModal.querySelector(".modal-close");

Array.from(btnBuy).forEach(linkbuy => {
    linkbuy.addEventListener("click", function(evt) {
        evt.preventDefault();
        cartModal.classList.add("modal-show");
    })
});

cartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (cartModal.classList.contains("modal-show")) {
            evt.preventDefault();
            cartModal.classList.remove("modal-show");
        }
    }
});

var feedbackLink = document.querySelector(".modal-summon-button");
var feedbackModal = document.querySelector(".modal-feedback");
if (feedbackModal !== null) {
    var feedbackClose = feedbackModal.querySelector(".modal-close");
    var feedbackForm = feedbackModal.querySelector(".feedback-form");
    var feedbackName = feedbackModal.querySelector(".feedback-name-input");
    var feedbackMail = feedbackModal.querySelector(".feedback-mail-input");
    var feedbackMessage = feedbackModal.querySelector(".feedback-message-area");

    var isStorageSupport = true;
    var storageName = "";
    var storageMail = "";

    try {
        storageName = localStorage.getItem("login");
        storageMail = localStorage.getItem("mail");
    } catch (err) {
        isStorageSupport = false;
    }

    feedbackLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        feedbackModal.classList.add("modal-show");

        if (storageName) {
            feedbackName.value = storageName;
            feedbackMail.focus();
        }
        if (storageMail) {
            feedbackMail.value = storageMail;
            feedbackMessage.focus();
        } else {
            feedbackName.focus();
        }

    });

    feedbackClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-show");
        feedbackModal.classList.remove("modal-error");
    });

    feedbackForm.addEventListener("submit", function(evt) {
        if (!feedbackName.value || !feedbackMail.value || !feedbackMessage.value) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal-error");
            feedbackModal.offsetWidth = feedbackModal.offsetWidth;
            feedbackModal.classList.add("modal-error");
        } else {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("mail", feedbackMail.value);
        }

    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (feedbackModal.classList.contains("modal-show")) {
                evt.preventDefault();
                feedbackModal.classList.remove("modal-show");
                feedbackModal.classList.remove("modal-error");
            }
        }
    });
};

var mapLink = document.querySelector(".main-map");
var mapModal = document.querySelector(".modal-map");
if (mapModal !== null) {
    var mapClose = mapModal.querySelector(".modal-close");

    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapModal.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapModal.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (mapModal.classList.contains("modal-show")) {
                evt.preventDefault();
                mapModal.classList.remove("modal-show");
            }
        }
    });
};


var btnRight = document.querySelector(".arrow-right");
var btnLeft = document.querySelector(".arrow-left");
var dots = document.querySelectorAll(".slider-dots");
var slides = document.querySelectorAll(".slider-item");
var currentSlide = document.querySelector(".slide-current");
var currentDots = document.querySelector(".current");

if (btnRight != null) {
    btnRight.addEventListener("click", function() {
        if (currentSlide.nextElementSibling != null) {
            currentSlide.classList.remove("slide-current");
            currentSlide = currentSlide.nextElementSibling;
            currentSlide.classList.add("slide-current");
        } else {
            currentSlide.classList.remove("slide-current");
            currentSlide = slides[0];
            currentSlide.classList.add("slide-current");
        }
        if (currentDots.nextElementSibling != null) {
            currentDots.classList.remove("current");
            currentDots = currentDots.nextElementSibling;
            currentDots.classList.add("current");
        } else {
            currentDots.classList.remove("current");
            currentDots = dots[0];
            currentDots.classList.add("current");
        }
    });
};

if (btnLeft !== null) {
    btnLeft.addEventListener("click", function() {
        if (currentSlide.previousElementSibling != null) {
            currentSlide.classList.remove("slide-current");
            currentSlide = currentSlide.previousElementSibling;
            currentSlide.classList.add("slide-current");
        } else {
            currentSlide.classList.remove("slide-current");
            currentSlide = slides[slides.length - 1];
            currentSlide.classList.add("slide-current");
        }
        if (currentDots.previousElementSibling != null) {
            currentDots.classList.remove("current");
            currentDots = currentDots.previousElementSibling;
            currentDots.classList.add("current");
        } else {
            currentDots.classList.remove("current");
            currentDots = dots[dots.length - 1];
            currentDots.classList.add("current");
        }
    });
};

Array.from(dots).forEach(function(dot, index) {
    dot.addEventListener("click", function() {
        if (!(dot.classList.contains("current"))) {
            document.querySelector(".current").classList.remove("current");
            dot.classList.add("current");
        }
        document.querySelector(".slide-current").classList.remove("slide-current");
        document.querySelectorAll(".slider-item")[index].classList.add("slide-current");
    })
});


var featuresBtn = document.querySelectorAll(".features-button");

Array.from(featuresBtn).forEach(link => {
    link.addEventListener("click", function() {
        if (link.classList.contains("features-button-disable")) {
            document.querySelector(".features-button-active").classList.add("features-button-disable");
            document.querySelector(".features-button-active").classList.remove("features-button-active");
            link.classList.remove("features-button-disable");
            link.classList.add("features-button-active");
        }
        document.querySelector(".features-current").classList.remove("features-current");
        document.querySelectorAll(".features-all-item")[link.dataset.id].classList.add("features-current");
    });
});
