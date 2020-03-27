# hello-world
My vlog about JS
I'm a bogdan.
I have a dream.

Задания 2 
var array = [2, 5, 6, 6, 12, 15, 0, 3, 8, 9];
var min = getMin(array);
alert(min);

function getMin(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
};

Задания 3
let arr = [1, 2, 3, 4, 5];
console.log( arr.filter(elem => elem % 2 == 0) );

