$(document).ready(function () {
    $("#hider").hide();

    $("#button").hover(
        function () {
            $("#hider").fadeIn(500).show();
            $("#firstVisible").fadeOut(500).hide();
        },
        function () {
            $("#firstVisible").fadeIn(500).show();
            $("#hider").hide();
        }
    );
    var bodyHeight = $("body").height();
    var vwptHeight = $(window).height();
    if (vwptHeight > bodyHeight) {
        $("footer#stickyFoot").css("position", "absolute").css("bottom", 0);
    }
});
