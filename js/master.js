(function () {
    "use strict";

    var $pickone = $("#pickone");
    $("#menuoptions li a").on("click", function () {
        var reason = $(this).text();
        $pickone.text(reason);

    });


})();