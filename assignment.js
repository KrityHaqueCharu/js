function kilometerToMeter(kilo){
    if(kilo<0){
        return "Distance cannot be negative"
    }else{
        var meter=kilo*1000;
        return meter;
    }
}
let kilo = 10;
console.log(kilometerToMeter(kilo));



function budgetCalculator(watch, phone, laptop){
    var priceforWatch= 50*watch;
    var priceforPhone= 100*phone;
    var priceforLaptop= 500*laptop;
    var totalprice=priceforWatch+priceforPhone+priceforLaptop;
    return totalprice;
}
let watch=10;
let phone=7;
let laptop=5;
console.log(budgetCalculator(watch,phone,laptop));


function hotelCost(days){
    if (days<=10){
        var cost=days*100;
        return cost;
    }
    else if(days<=20){
        var extradays=20-days;
        var cost= (10*100)+(extradays*80);
        return cost;
    }
    else{
        var extradays=days-20;
        var cost= (10*100)+(10*80)+(extradays*50);
        return cost;
    }
    
}
let days=27;
console.log(hotelCost(days));

function megaFriend(friendarray){
    var max=friendarray[0];
    for(var i=1;i<friendarray.length;i++){
        if(max.length<friendarray[i].length){
            max=friendarray[i];
        }
    }
    return max;
}

let myfriends=["Esha","Tasnuva","Jaclin","Onika","Omi","U"];
console.log(megaFriend(myfriends));