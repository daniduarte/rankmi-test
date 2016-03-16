
app.controller('TaskListController', ['$scope', 'TasksService', function($scope, TasksService){
  var self = this;
  self.tasks = TasksService.tasks;

  self.addTask = function(){
    var data = {
      text: self.taskText || 'Tarea sin nombre',
      done: false, 
      comments: []
    };

    TasksService.addTask(data);

    self.taskText = '';
  };

  self.removeTask = function(task){
    var data = task;

    TasksService.removeTask(data);
  };

  self.addCommentToTask = function(task, commentText){
    var data = task;
    var commentText = commentText || 'Comentario vacío';
    TasksService.addComment(data, commentText);
  };
}]);
