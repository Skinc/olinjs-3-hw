$(function(){
	$('#submit').click( function (evt) {
		$.post("/order/create", $('#ingredientlist').serialize())
    $('body').append('<p>Order Recieved! Thanks!</p>')
    return false
	})

    $('.completebutton').click( function (evt) {
        var custname = $(this).attr("name")
        var response = {name:custname}
        $.post("/orders/update", response)
        $('#'+custname).remove()
        return false
    })
})