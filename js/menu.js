$(document).ready(function(){
    $(".starters").click(function(){
        $(".starter").toggle(0.5);
                
    })

    $(".salads").click(function(){
        $(".salad").toggle();
    })

    $(".pizzas").click(function(){
        $(".pizza").toggle();
    })

    $(".pastas").click(function(){
        $(".pasta").toggle();
    })
})
