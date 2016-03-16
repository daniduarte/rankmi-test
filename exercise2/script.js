; // the secret!

(function(undefined, window, document, _){

  /**
   * getColumnPosition
   *
   * Add a string with sucesives letters from alphabeth (e.g. ABC), 
   * so that returns the linear position on the alphabeth
   * 
   * @param {string} inputData
   * @return {int} position
   *
   **/
  function getColumnPosition(inputData){

    var inputData = inputData.toString().toLowerCase().split('');
    var alphabeth = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var positions = [];
    var i = 0;

    _.each(inputData, function(item){
      var index = 0;
      var pos = parseInt(alphabeth.indexOf(item)) + 1;

      positions.push(pos + (alphabeth.length * i));

      i++;
    });

    return positions[positions.length - 1];
  };

  // Here we go!
  var foo = getColumnPosition('AAA');
  console.log(foo);

})(undefined, window, document, _);
