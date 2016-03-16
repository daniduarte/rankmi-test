; // the secret!

(function(undefined, window, dodument, _){

  function getColumnPosition(inputData){

    var inputData = inputData.toString().split('');
    var alphabeth = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase().split('');
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

  console.log(getColumnPosition('ab'));

})(undefined, window, document, _);
