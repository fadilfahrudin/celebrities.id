export const detailAudioVideo = () => {
    $(".see-more").on("click", () => {
        $(".audio-stream-wrapper p").toggleClass("show");
        $(".see-more").toggleClass("show");

        if ($(".see-more").hasClass("show")) {
            $(".see-more").text("show less");
        } else {
            $(".see-more").text("see more");
        }
    })
}