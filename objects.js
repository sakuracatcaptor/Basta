var yoda = {
    nickName: "Yoda",
    canUseForce: true,
    special(){
        return "Force ghost...1";
    }
}

var grogu = {
    nickName: "Baby Yoda",
        canUseForce: false,
    special(){
        return "Force ghost...2";
    }

}
var fin = {
    nickName: "Btraitor",
        canUseForce: true,
    special(x){
        return "Force ghost...3" + x;
    }

}

var swChar = [yoda, fin, grogu];


// swChar.forEach(function(e){
//     console.log(e);
// })

swChar.forEach((e) => console.log(e.nickName));
//swChar.push(yoda);
