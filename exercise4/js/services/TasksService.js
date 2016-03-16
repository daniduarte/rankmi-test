
app.factory('TasksService', function(){
  var tasks = [
    { text: 'Comprar pan para la once', done: false, comments: ['Lorem ipsum 1', 'Lorem ipsum 2', 'Lorem ipsum 3'] },
    { text: 'Limpiar el baño de visitas', done: true, coments: [] },
    { text: 'Regar las plantas del patio de atrás', done: false, comments: ['Lorem ipsum 1'] },
    { text: 'Lavar la ropa', done: false, comments: ['Lorem ipsum 1', 'Lorem ipsum 2'] },
    { text: 'Pintar bodega chica', done: false, comments: [] }
  ];

  return {
    tasks: tasks,
    addTask: function(data){
      tasks.push(data);
    },
    removeTask: function(data){
      var index = tasks.indexOf(data);
      tasks.splice(index, 1);
    }
  }
});
