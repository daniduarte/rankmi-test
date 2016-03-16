
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

    console.log(TasksService.tasks);
  };
}]);
