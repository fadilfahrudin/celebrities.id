export const detailAudio = () => {
    const initialText = $(".audio-stream-wrapper .content-data p").text();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".audio-stream-wrapper .content-data p").text().slice(0, 340);
    if (textOverflow) {
        $(".audio-stream-wrapper .content-data p").text(sliceText);
        $(".audio-stream-wrapper .content-data p").append("<span class='see-more'>see more</span>");
    }
    $(".audio-stream-wrapper .content-data p").on("click", '.see-more', () => {
        $(".audio-stream-wrapper p").toggleClass("show");
        if ($(".audio-stream-wrapper p").hasClass("show")) {
            $(".audio-stream-wrapper p").html(initialText + "<span class='see-more'>show less</span>");

        } else {
            $(".audio-stream-wrapper p").html(sliceText + "<span class='see-more'>see more</span>");
        }
    })
}

export const detailVideo = () => {
    const initialText = $(".live-stream-wrapper .content-data p").text();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".live-stream-wrapper .content-data p").text().slice(0, 340);
    if (textOverflow) {
        $(".live-stream-wrapper .content-data p").text(sliceText);
        $(".live-stream-wrapper .content-data p").append("<span class='see-more'>see more</span>");
    }
    $(".live-stream-wrapper .content-data p").on("click", '.see-more', () => {
        $(".live-stream-wrapper .content-data p").toggleClass("show");
        if ($(".live-stream-wrapper .content-data p").hasClass("show")) {
            $(".live-stream-wrapper p").html(initialText + "<span class='see-more'>show less</span>");

        } else {
            $(".live-stream-wrapper p").html(sliceText + "<span class='see-more'>see more</span>");
        }
    })
}

export const detailTvStreamming = () => {
    const initialText = $(".tv-stream-wrapper .content-data p").text();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".tv-stream-wrapper .content-data p").text().slice(0, 340);
    if (textOverflow) {
        $(".tv-stream-wrapper .content-data p").text(sliceText);
        $(".tv-stream-wrapper .content-data p").append("<span class='see-more'>see more</span>");
    }
    $(".tv-stream-wrapper .content-data p").on("click", '.see-more', () => {
        $(".tv-stream-wrapper .content-data p").toggleClass("show");
        if ($(".tv-stream-wrapper .content-data p").hasClass("show")) {
            $(".tv-stream-wrapper .content-data p").html(initialText + "<span class='see-more'>show less</span>");

        } else {
            $(".tv-stream-wrapper .content-data p").html(sliceText + "<span class='see-more'>see more</span>");
        }
    })
}
export const detailRadioStreamming = () => {
    const initialText = $(".radio-stream-wrapper .content-data p").text();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".radio-stream-wrapper .content-data p").text().slice(0, 340);
    if (textOverflow) {
        $(".radio-stream-wrapper .content-data p").text(sliceText);
        $(".radio-stream-wrapper .content-data p").append("<span class='see-more'>see more</span>");
    }
    $(".radio-stream-wrapper .content-data p").on("click", '.see-more', () => {
        $(".radio-stream-wrapper .content-data p").toggleClass("show");
        if ($(".radio-stream-wrapper .content-data p").hasClass("show")) {
            $(".radio-stream-wrapper .content-data p").html(initialText + "<span class='see-more'>show less</span>");

        } else {
            $(".radio-stream-wrapper .content-data p").html(sliceText + "<span class='see-more'>see more</span>");
        }
    })
}