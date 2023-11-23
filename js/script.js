import { homePage } from "./home-page.js";
import { detailLiveVideo } from "./detail-live-video.js";

// Run all modules
function runAllModules() {
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
