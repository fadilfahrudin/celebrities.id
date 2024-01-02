export const detailAudio = () => {
    const initialText = $(".audio-stream-wrapper .content-data").html();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".audio-stream-wrapper .content-data").text().slice(0, 340);
    if (textOverflow) {
        $(".audio-stream-wrapper .content-data").text(sliceText);
        $(".audio-stream-wrapper .content-data").append("<span class='see-more'>see more</span>");
    }
    $(".audio-stream-wrapper .content-data").on("click", '.see-more', () => {
        $(".audio-stream-wrapper .content-data").toggleClass("show");
        if ($(".audio-stream-wrapper .content-data").hasClass("show")) {
            $(".audio-stream-wrapper .content-data").html(initialText);
            $(".audio-stream-wrapper .content-data p:last-child").append("<span class='see-more'>show less</span>");
        } else {
            $(".audio-stream-wrapper .content-data").text(sliceText);
            $(".audio-stream-wrapper .content-data").append("<span class='see-more'>see more</span>");
        }
    })
}

export const detailVideo = () => {
    const initialText = $(".live-stream-wrapper .content-data").html();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".live-stream-wrapper .content-data").text().slice(0, 340);
    if (textOverflow) {
        $(".live-stream-wrapper .content-data").text(sliceText);
        $(".live-stream-wrapper .content-data").append("<span class='see-more'>see more</span>");
    }
    $(".live-stream-wrapper .content-data").on("click", '.see-more', () => {
        $(".live-stream-wrapper .content-data").toggleClass("show");
        if ($(".live-stream-wrapper .content-data").hasClass("show")) {
            $(".live-stream-wrapper .content-data").html(initialText);
            $(".live-stream-wrapper .content-data p:last-child").append("<span class='see-more'>show less</span>");
        } else {
            $(".live-stream-wrapper .content-data").text(sliceText);
            $(".live-stream-wrapper .content-data").append("<span class='see-more'>see more</span>");
        }
    })
}

export const detailTvStreamming = () => {
    const initialText = $(".tv-stream-wrapper .content-data").html();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".tv-stream-wrapper .content-data").text().slice(0, 340);
    if (textOverflow) {
        $(".tv-stream-wrapper .content-data").text(sliceText);
        $(".tv-stream-wrapper .content-data").append("<span class='see-more'>see more</span>");
    }
    $(".tv-stream-wrapper .content-data").on("click", '.see-more', () => {
        $(".tv-stream-wrapper .content-data").toggleClass("show");
        if ($(".tv-stream-wrapper .content-data").hasClass("show")) {
            $(".tv-stream-wrapper .content-data").html(initialText);
            $(".tv-stream-wrapper .content-data p:last-child").append("<span class='see-more'>show less</span>");
        } else {
            $(".tv-stream-wrapper .content-data").text(sliceText);
            $(".tv-stream-wrapper .content-data").append("<span class='see-more'>see more</span>");
        }
    })
}
export const detailRadioStreamming = () => {
    const initialText = $(".radio-stream-wrapper .content-data").html();
    let textOverflow = initialText.length > 340;
    const sliceText = $(".radio-stream-wrapper .content-data").text().slice(0, 340);
    if (textOverflow) {
        $(".radio-stream-wrapper .content-data").text(sliceText);
        $(".radio-stream-wrapper .content-data").append("<span class='see-more'>see more</span>");
    }
    $(".radio-stream-wrapper .content-data").on("click", '.see-more', () => {
        $(".radio-stream-wrapper .content-data").toggleClass("show");
        if ($(".radio-stream-wrapper .content-data").hasClass("show")) {
            $(".radio-stream-wrapper .content-data").html(initialText);
            $(".radio-stream-wrapper .content-data p:last-child").append("<span class='see-more'>show less</span>");
        } else {
            $(".radio-stream-wrapper .content-data").text(sliceText);
            $(".radio-stream-wrapper .content-data").append("<span class='see-more'>see more</span>");
        }
    })
}