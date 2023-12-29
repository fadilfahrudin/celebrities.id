export const detailAudio = () => {
    const initialText = $(".audio-stream-wrapper p").text();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".audio-stream-wrapper p").text().slice(0, 340);
    if (textOverflow) {
        $(".audio-stream-wrapper p").text(sliceText);
        $(".audio-stream-wrapper p").append("<span class='see-more'>see more</span>");
    }
    $(".audio-stream-wrapper p").on("click", '.see-more', () => {
        $(".audio-stream-wrapper p").toggleClass("show");
        if ($(".audio-stream-wrapper p").hasClass("show")) {
            $(".audio-stream-wrapper p").html(initialText + "<span class='see-more'>show less</span>");

        } else {
            $(".audio-stream-wrapper p").html(sliceText + "<span class='see-more'>see more</span>");
        }
    })
}

export const detailVideo = () => {
    const initialText = $(".live-stream-wrapper p").text();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".live-stream-wrapper p").text().slice(0, 340);
    if (textOverflow) {
        $(".live-stream-wrapper p").text(sliceText);
        $(".live-stream-wrapper p").append("<span class='see-more'>see more</span>");
    }
    $(".live-stream-wrapper p").on("click", '.see-more', () => {
        $(".live-stream-wrapper p").toggleClass("show");
        if ($(".live-stream-wrapper p").hasClass("show")) {
            $(".live-stream-wrapper p").html(initialText + "<span class='see-more'>show less</span>");

        } else {
            $(".live-stream-wrapper p").html(sliceText + "<span class='see-more'>see more</span>");
        }
    })
}

export const detailTvStreamming = () => {
    const initialText = $(".tv-stream-wrapper p").text();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".tv-stream-wrapper p").text().slice(0, 340);
    if (textOverflow) {
        $(".tv-stream-wrapper p").text(sliceText);
        $(".tv-stream-wrapper p").append("<span class='see-more'>see more</span>");
    }
    $(".tv-stream-wrapper p").on("click", '.see-more', () => {
        $(".tv-stream-wrapper p").toggleClass("show");
        if ($(".tv-stream-wrapper p").hasClass("show")) {
            $(".tv-stream-wrapper p").html(initialText + "<span class='see-more'>show less</span>");

        } else {
            $(".tv-stream-wrapper p").html(sliceText + "<span class='see-more'>see more</span>");
        }
    })
}
export const detailRadioStreamming = () => {
    const initialText = $(".radio-stream-wrapper p").text();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".radio-stream-wrapper p").text().slice(0, 340);
    if (textOverflow) {
        $(".radio-stream-wrapper p").text(sliceText);
        $(".radio-stream-wrapper p").append("<span class='see-more'>see more</span>");
    }
    $(".radio-stream-wrapper p").on("click", '.see-more', () => {
        $(".radio-stream-wrapper p").toggleClass("show");
        if ($(".radio-stream-wrapper p").hasClass("show")) {
            $(".radio-stream-wrapper p").html(initialText + "<span class='see-more'>show less</span>");

        } else {
            $(".radio-stream-wrapper p").html(sliceText + "<span class='see-more'>see more</span>");
        }
    })
}