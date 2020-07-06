let people =
[{name:'Jonny Walker',birthDate: '1995-12-17'},
{name:'Andrew',birthDate:'2001-10-29'},
{name:'Viktor',birthDate:'1998-11-09'},
{name:'Andrew',birthDate: '2011-05-09'}
];
searchByName()
function searchByName(string) {
people.filter(function (string) {
return string.name < length;
}).map(function (string) {
console.log(string.name + ': ' + string.birthDate);
});
}