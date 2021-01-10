$(document).ready(function(){
    //ADD
    $('#ajaxSubmit_add').click(function(e){
        csrf_setup();
        e.preventDefault();
        add_item_call();
    });

    //EDIT
    $('#ajaxSubmit_edit').click(function(e){
        csrf_setup();
        e.preventDefault();
        edit_item_call();
    });
});


var add_item_call = function() { $.ajax({
    url: $('#add_item_form').attr('action'),
    method: 'POST',
    data: {
        'item_name': $('#add_item_name').val()
    },

    success: function(result){
        console.log("ajax success");
        console.log(result);
        window.location.href = "/dashboard";
    },
    error: function(result, request){
        console.log("ajax failure");
        console.log(result);
    }
});}


var edit_item_call = function () { $.ajax({
            url: $('#edit_item_form').attr('action'),
            method: 'POST',
            data: {
                'item_name': $('#edit_item_name').val()
            },

            success: function(result){
                console.log("ajax success");
                console.log(result);
                window.location.href = "/dashboard";
            },
            error: function(result, request){
                console.log("ajax failure");
                console.log(result);
            }
});}

var csrf_setup = function(){ $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});}