export const homePage = () => {
    // Swipe
    $(".ic-left-arrow").click(() => {
        $(".live-topic-body").animate({
            scrollLeft: "-=775px"
        }, "slow");
    });
    $(".ic-right-arrow").click(() => {
        $(".live-topic-body").animate({
            scrollLeft: "+=775px"
        }, "slow");
    });
}
