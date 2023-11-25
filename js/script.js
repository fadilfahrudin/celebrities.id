import { homePage } from "./home-page.js";
import { detailLiveVideo } from "./detail-live-video.js";
import { closeNav, opanNav } from "./navigation.js"

// Run all modules
function runAllModules() {
    // Global functions
    closeNav();
    opanNav();

    // Page Functions
    if ($("#home-page").length > 0) {
        homePage();
    } else if ($("#detail-live-video-page").length > 0) {
        detailLiveVideo();
    }
}

// Check Dokument is ready
document.addEventListener("DOMContentLoaded", function () {
    runAllModules();
})
