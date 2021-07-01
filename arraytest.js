var tables = [
    { "art":"A","count":"0","name":"name1","ean":"802.0079.127","marker":"null","stammkost":"A","tablename":"IWEO_IWBB_01062015" },
    { "art":"A","count":"0","name":"name2","ean":"657.7406.559","marker":"null","stammkost":"A","tablename":"IWEO_IWBB_02062015" }
];

tables.forEach(function(table) {
    var tableName = table.name;
    if (tableName == "name1") {
       console.log(tableName);
    }
});

// The following is just an example of async calls and callback functions
console.log('Initiated program.');

setTimeout(function() {
  console.log('3000 ms (3 sec) have passed.');
}, 3000);

setTimeout(function() {
  console.log('0 ms (0 sec) have passed.');
}, 0);

setTimeout(function() {
  console.log('1000 ms (1 sec) has passed.');
}, 1000);

console.log('Terminated program');
