import { homePage } from "./home-page.js";
import { detailAudio, detailVideo, detailTvStreamming, detailRadioStreamming } from "./detail-audio-video.js";
import { closeNav, opanNav } from "./navigation.js"


// Run all modules
function runAllModules() {

    // Global functions
    closeNav();
    opanNav();

    // Page Functions
    if ($("#home-page").length > 0) {
        homePage();
    } else if ($("#detail-audio").length > 0) {
        detailAudio();
    } else if ($("#detail-live-video").length > 0) {
        detailVideo();
    } else if ($("#detail-tv-streaming").length > 0) {
        detailTvStreamming();
    } else if ($("#detail-radio-streaming").length > 0) {
        detailRadioStreamming();
    }
}

// Check Dokument is ready
document.addEventListener("DOMContentLoaded", function () {
    runAllModules();
    $(".loading").each(function (i, item) {
        item.classList.remove("loading");
    })
})
