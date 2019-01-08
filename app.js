var dircompare = require('dir-compare');
var options = {compareSize: true,compareContent: true};
var path1 = 'A';
var path2 = 'B';
var count=1;
var diffrentArrayStrut= { path1: String,
path2: String,
relativePath: String,
name1: String,
name2: String,
state: String,
type1: String,
type2: String,
level: Number,
size1: Number,
size2: Number,
date1: String,
date2: String }
var diffrentArray = [];
console.log(diffrentArray);
dircompare.compare(path1, path2, options).then(function(res){
    console.log('equal: ' + res.equal);
    console.log('distinct: ' + res.distinct);
    console.log('left: ' + res.left);
    console.log('right: ' + res.right);
    console.log('differences: ' + res.differences);
    console.log('same: ' + res.same);
    var format = require('util').format;
    
    res.diffSet.forEach(function (entry) {
        if(entry.state=='distinct')
        {
            diffrentArray.push(entry);

        }
        // var state = {
        //     'equal' : '==',
        //     'left' : '->',
        //     'right' : '<-',
        //     'distinct' : '<>'
        // }[entry.state];
        // var name1 = entry.name1 ? entry.name1 : '';
        // var name2 = entry.name2 ? entry.name2 : '';
 
        // console.log(format('%s(%s)%s%s(%s)', name1, entry.type1, state, name2, entry.type2));
    }); 
    console.log("\nSL_NO \tdiffrent files list\n");
    for(i=0;i<diffrentArray.length;i++){
        console.log((count+i)+"\t"+diffrentArray[i].name1+"->NOT_EQUL_TO<-"+diffrentArray[i].name2); 
    }
    console.log("______________________END___________________\n")
    console.log(" \ndisting file details\n");
    console.log(diffrentArray);
      
}).catch(function(error){
    console.error(error);
})