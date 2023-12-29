export const detailAudioVideo = () => {
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