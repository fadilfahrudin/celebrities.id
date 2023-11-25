export const opanNav = () => {
    $(".burger-btn").click(() => {
        $("#navigasi").addClass("clicked");
        $("nav").addClass("clicked");
    })
}

export const closeNav = () => {
    $(".close-nav").click(() => {
        $("#navigasi").removeClass("clicked");
        setTimeout(() => {
            $("nav").removeClass("clicked");
        }, 500)
    })
}

