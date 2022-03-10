let bdays = ['10-17', '05-19', '20-19'];
var noempat = bdays.map(function(aha){
    return aha.replace("-","/");
});
console.log(noempat);