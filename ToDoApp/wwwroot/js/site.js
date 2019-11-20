// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification

var list = {};

function addTask() {
    list = new Array();

    var task = {};
    task.name = $("#newTask").val();

    list.push(task);
    console.info(list);
//    $("#tasks").empty();
}

$(document).ready(function() {
    console.info("1ready");
//    console.log("2ready");
//    console.error("3ready");
});