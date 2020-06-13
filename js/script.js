var feedbackLink = document.querySelector(".modal-summon-button");
var feedbackModal = document.querySelector(".modal-feedback");
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
    if (!feedbackName.value || !feedbackMail.value || !feedbackMessage) {
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
