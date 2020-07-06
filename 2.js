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