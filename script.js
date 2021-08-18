$(document).ready(function() {
    //hide navbar after certain position of scrolling down
    var lastScroll = 0;
    $(window).scroll(function () {
        let currentScroll = window.scrollY;
        if (currentScroll < lastScroll) {
            $(".navbar").removeClass("scrollDown");
            $(".navbar").addClass("scrollUp");
        } else {
            $(".navbar").removeClass("scrollUp");
            $(".navbar").addClass("scrollDown");
        }
        lastScroll = currentScroll;
    });

    //scroll to top of page with button click
    $(window).scroll(function () {
        let height = $(window).scrollTop();
        if (height > 100) {
            $(".backToTop").fadeIn();
        } else {
            $(".backToTop").fadeOut();
        }
    });

    $(".backToTop").click(function (event) {
        event.preventDefault();
        $("html").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //showing new quotes
    let quotes = [
        "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful.",
        "Look deep into nature, and then you will understand everything better.",
        "Heaven is under our feet as well as over our heads.",
        "Nature does not hurry, yet everything is accomplished.",
        "There is something infinitely healing in the repeated refrains of nature—the assurance that dawn comes after night, and spring after winter.",
        "I go to nature to be soothed and healed, and to have my senses put in order.",
        "There’s a whole world out there, right outside your window. You’d be a fool to miss it.",
        "All my life through, the new sights of Nature made me rejoice like a child.",
        "If you wish to know the divine, feel the wind on your face and the warm sun on your hand.",
        "The richness I achieve comes from Nature, the source of my inspiration."
    ];
    let source = [
        "Alice Walker",
        "Albert Einstein",
        "Henry David Thoreau",
        "Lao Tzu",
        "Rachel Carson",
        "John Burroughs",
        "Charlotte Eriksson",
        "Marie Curie",
        "Buddha",
        "Claude Monet"
    ];

    $("#quoteBtn").click(function () {
        let randomNumber = Math.floor(Math.random() * (quotes.length));
        $("#quoteContent").text(quotes[randomNumber]);
        $("#quoteSource").text(source[randomNumber]);
    });

    //showing more Images in Gallery

    $("#showMoreBtn").click(function () {
        $(".hiddenImg").toggle("fast");
        $("#showMoreBtn").toggle("fast");
        $("#showLessBtn").toggle("fast");
    });

    $("#showLessBtn").click(function () {
        $(".hiddenImg").toggle("fast");
        $("#showMoreBtn").toggle("fast");
        $("#showLessBtn").toggle("fast");
    })
});