const {fetchMyIp, fetchCoordsByIP} = require('./iss');

fetchMyIp((error, ip) => {
  if(error) {
    console.log("It didn't work!", error);
    return;
    
  }
 
  console.log('It worked! Returned IP: ', ip);

  //calling fetchCordsbyip

  fetchCoordsByIP(ip, (error, coords) => {


    if(error){
      console.log("There was an error retrieving the location")
    }
    console.log("IP retrieved: " + ip)
    let latitude = coords["latitude"]
    let longitude = coords["longitude"]
    console.log(typeof cords)
    console.log(`The Longitude is: ${longitude} and the Latitude is: ${latitude}` )
  })
})

