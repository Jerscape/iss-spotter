const { nextISSTimesForMyLocation } = require("./iss_promised")
//const { fetchMyIp, fetchCoordsByIP, fetchISSflyOvertimes } = require("./iss_promised")

const printPassTimes = function(times){
  //const responseArray = times["response"] //the problem is here
  //console.log("response array: ", responseArray)
  for(const pass of times){
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
}

nextISSTimesForMyLocation()
  .then((times) =>{
    printPassTimes(times)

  
  })
  .catch((error) => {
    console.log("There was an error retreiving your data")
  })


//I don't understand why it's in this order
// fetchMyIp()
//   .then(fetchCoordsByIP)
//   .then(fetchISSflyOvertimes)
//   .then(nextISSTimesForMyLocation)
//   .then(body => console.log(body))
  // .catch("There was an error fetching your data.")
 
 