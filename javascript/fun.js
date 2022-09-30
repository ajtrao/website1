// Example 1
function shoe(){
    var shoes = [{
        name : "puma",
        type : "sports"
    },{
        name : "reebok",
        type : "casual"  
    }]
    
    for(var i=0; i<shoes.length; i++ ){
        if(shoes[i].name=="puma"){
            console.log(shoes[i].name);}
        else{
            console.log("not a puma its"+" "+shoes[i].name);
        }
}
}
shoe();
// example 2

function restuarents(){
    const restaurent =[{
        dishName:"chicken biryani",
        dishPrice:"$17",
        dishRating:"3 star"
    },{
        dishName:"mutton biryani",
        dishPrice:"$17",
        dishRating:"4 star"
        
    },{
        dishName:"chicken tandoori",
        dishPrice:"$15",
        dishRating:"3.5 star"
    }
    ]
     for (var i=0; i<restaurent.length; i++){
         if (restaurent[i].dishName=="chicken biryani"){
             console.log(restaurent[i]);
         }else{
             console.log("not a chicken biryani");
         }
     }
}
restuarents();
