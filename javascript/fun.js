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

// example 3

function company(){
    const companies= [
        {name: "Company One", category: "Finance", start: 1981, end: 2004},
        {name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {name: "Company Four", category: "Retail", start: 1989, end: 2010},
        {name: "Company Five", category: "Technology", start: 2009, end: 2014},
        {name: "Company Six", category: "Finance", start: 1987, end: 2010},
        {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
        {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
        {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
    ];
    
    for (var i=0; i<companies.length; i++){
        if (companies[i].category== "Retail"){
            console.log(companies[i].category);
        }
    }
    
    for (var i=0; i<companies.length; i++){
        if ( companies[i].start < 2000 && companies[i].end > 2005 ){
            console.log(companies[i].name);
        }
    }
} 
company();
