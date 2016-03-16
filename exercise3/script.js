; // the secret!

(function(undefined, window, document, _){

  /**
   * getIndexesFromSum
   *
   * Entering an integers array and a integer value, the algorithm show 
   * the indexes that be the sum of two items equal to the integer value
   * entered
   * 
   * @param {array[integer]} numbers
   * @param {integer} target
   * @return {array[hash]} indexes
   *
   **/
  function getIndexesFromSum(numbers, target){
    if( numbers[0] < target ){
      var n1, n2;

      for( var i = 0; i <= numbers.length; i++ ){
        n1 = numbers[i];
        n2Expected = target - numbers[i];
        n2 = numbers.indexOf(n2Expected);

        if(n1 != n2 && n2 != -1 ){
          n2 = n2Expected;
          break;
        }
      }

      return [{ index1 : numbers.indexOf(n1) }, { index2 : numbers.indexOf(n2) }]

    } else {
      return null;
    }
  };

  // Here we go!
  var nums = [1, 4, 3, 2, 5, 6];
  var foo = getIndexesFromSum(nums, 6);
  console.log(foo);

})(undefined, window, document, _);
