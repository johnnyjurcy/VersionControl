var dircompare = require('dir-compare');
var options = {compareSize: true,compareContent: true};
var path1 = 'A';
var path2 = 'B';
dircompare.compare(path1, path2, options).then(function(res){
    console.log('equal: ' + res.equal);
    console.log('distinct: ' + res.distinct);
    console.log('left: ' + res.left);
    console.log('right: ' + res.right);
    console.log('differences: ' + res.differences);
    console.log('same: ' + res.same);
    var format = require('util').format;
    res.diffSet.forEach(function (entry) {
        var state = {
            'equal' : '==',
            'left' : '->',
            'right' : '<-',
            'distinct' : '<>'
        }[entry.state];
        var name1 = entry.name1 ? entry.name1 : '';
        var name2 = entry.name2 ? entry.name2 : '';
 
        console.log(format('%s(%s)%s%s(%s)', name1, entry.type1, state, name2, entry.type2));
    });    
}).catch(function(error){
    console.error(error);
})