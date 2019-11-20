// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification

var list = {};
var list2 = {};


function addTask() {
    var task = {};
    task.name = $("#newTask").val();

    list.tasks.push(task);
    console.info(list);

    showTasks();
    $("#newTask").val("");
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
    if ($("#item_" + id).hasClass("checked")) {
        $("#item_" + id).removeClass("checked");
    } else {
        $("#item_" + id).addClass("checked");
    }
}

$(document).ready(function() {
    console.info("ready");
    list.tasks = new Array();
    $("#newTask").focus();
    $("#newTask").keyup(function(event) {
        if (event.keyCode == 13) {
            addTask();
        }
    });

    list2.tasks = new Array();
    list2.tasks = [
        { name: "test1" },
        { name: "test2" },
        { name: "test3" },
    ]; 
    console.log(list2);
//    console.error("3ready");
});