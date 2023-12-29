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
    } else {
        detailAudio();
        detailVideo();
        detailTvStreamming();
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
