// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification

var list = {};

function addTask() {
    var task = {};
    task.name = $("#newTask").val();

    list.tasks.push(task);
    console.info(list);
//    $("#tasks").empty();
    showTasks();
}

function showTasks() {
    var $list = $("#tasks").empty();

    for (var i = 0; i < list.tasks.length; i++) {
        var currentTask = list.tasks[i];
        var $li = $("<li>").html(currentTask.name).attr("id", "item_" + i);
        var $checkBtn = $("<button onclick='checkTask(" + i + ")'>Check</button>").appendTo($li);
        var $deleteBtn = $("<button onclick='deleteTask(" + i + ")'>Delete</button>").appendTo($li);

        $li.appendTo($list);
    }
}

function deleteTask(id) {
    list.tasks.splice(id, 1);
    showTasks();
}

function checkTask(id) {
    $("#item_" + id).addClass("checked");
}

$(document).ready(function() {
    console.info("1ready");
    list.tasks = new Array();
//    console.log("2ready");
//    console.error("3ready");
});