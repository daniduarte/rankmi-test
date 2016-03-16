
app = angular.module('taskerApp', []);

app.controller('TaskListCtrl', function(){

  var taskList = this;

  taskList.tasks = [
    { text: 'Comprar pan para la once', done: false },
    { text: 'Limpiar el baño de visitas', done: true },
    { text: 'Regar las plantas del patio de atrás', done: false },
    { text: 'Lavar la ropa', done: false },
    { text: 'Pintar bodega chica', done: false }
  ];

  taskList.addTodo = function(){
    taskList.tasks.push({
      text: 'Comprar leche para la semana',
      done: false
    });
  };

});
