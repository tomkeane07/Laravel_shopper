$(document).ready(function(){
    $('#ajaxSubmit_add').click(function(e){
        console.log("posting");
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        e.preventDefault();
        $.ajax({
            url: $('#add_item_form').attr('action'),
            method: 'POST',
            data: {
                'item_name': $('#item_name').val()
            },
            dataType: 'json',
            encode: true,

            success: function(result){
                console.log("ajax success");
                console.log(result);
            },
            error: function(result, request){
                console.log("ajax failure");
                console.log(result);
            }
        });
    });
});