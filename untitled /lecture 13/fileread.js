var filesystem=require('fs');
filesystem.writeFile('text.json','a',function (err) {
    if (err){throw err;}
    console.log("it is done");
});
console.log("file is not written");
filesystem.readFile('text.json',function (err,data) {
    if(err){throw err;}
    console.log((data));
});
