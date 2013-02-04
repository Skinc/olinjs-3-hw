$(function(){
    $('#completebutton').click( function (evt) {
        console.log("JHISHSIHS")
       // $.post("/order/create", $('#ingredientlist').serialize())
       $('body').append('<p>Order Recieved! Thanks!</p>')
    })
})
