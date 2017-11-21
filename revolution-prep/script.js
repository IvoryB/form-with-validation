$("form").on("submit",function (e) {
    e.preventDefault(); 
    $("form").remove();
    $("div").removeClass ("thankYou");
});
 