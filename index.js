// const {fetchMyIp, fetchCoordsByIP, fetchISSFlyerOverTimes, nextISSTimesForMyLocation} = require('./iss');
const {nextISSTimesForMyLocation, fetchCoordsByIP, fetchMyIp} = require('./iss');

const printPassTimes = function(times){
  const responseArray = times["response"]
  for(const pass of responseArray){
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
}


nextISSTimesForMyLocation((error, times) => {
  if(error) {
    return console.log("It didn't work!", error)
  }

  console.log(times)
  printPassTimes(times)
  
})


// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
    
//   }
 
//   console.log('It worked! Returned IP: ', ip);


//   fetchCoordsByIP(ip, (error, coords) => {


//     if (error) {
//       console.log("There was an error retrieving the location");
//     }
//     console.log("IP retrieved: " + ip);
//     console.log("Coords retrieved: " + coords);

    
//     fetchISSFlyerOverTimes(coords, (error, times)=> {
//       if (error) {
//         console.log("There was an error retrieving the fly times.");
//       }

//       console.log(times);

//     });

//   });
// });

