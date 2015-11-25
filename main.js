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
});



