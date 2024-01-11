export const homePage = () => {
    $(".live-topics .live-topic-body").each((widgetIndex, widgetElement) => {
        $(".ic-left-arrow").each((indexIcon, iconELement) => {
            if (widgetIndex == indexIcon) {
                $(iconELement).click(() => {
                    $(widgetElement).animate({
                        scrollLeft: "-=775px"
                    }, "slow");
                })
            }
        })

        $(".ic-right-arrow").each((indexIcon, iconELement) => {
            if (widgetIndex == indexIcon) {
                $(iconELement).click(() => {
                    $(widgetElement).animate({
                        scrollLeft: "+=775px"
                    }, "slow");
                })
            }
        })
    })
}
