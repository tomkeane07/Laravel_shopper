"use strict";

$(document).ready(function () {
  //ADD
  $('#ajaxSubmit_add').click(function (e) {
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
        'item_name': $('#add_item_name').val()
      },
      success: function success(result) {
        console.log("ajax success");
        console.log(result);
        window.location.href = "/dashboard";
      },
      error: function error(result, request) {
        console.log("ajax failure");
        console.log(result);
      }
    });
  }); //EDIT

  $('#ajaxSubmit_edit').click(function (e) {
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    e.preventDefault();
    $.ajax({
      url: $('#edit_item_form').attr('action'),
      method: 'POST',
      data: {
        'item_name': $('#edit_item_name').val()
      },
      success: function success(result) {
        console.log("ajax success");
        console.log(result); //window.location.href = "/dashboard";
      },
      error: function error(result, request) {
        console.log("ajax failure");
        console.log(result);
      }
    });
  });
});