let date= new Date();

let currentHour = date.getHours();
console.log(currentHour)

let currentDay = date.getDay();
console.log(currentDay)

const logger = (req,res,next)=>{
    if (currentHour > 9 && currentHour < 17 
        && currentDay > 1 && currentDay < 6) {
        next()
    }else {res.send("<h1>Sorry, we are closed</h1>")}
}

module.exports= logger