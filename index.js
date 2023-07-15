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
    console.log("It worked: " + coords)
  })
})

// fetchCoordsByIP(ip, (error, coords) => {


//   if(error){
//     console.log("There was an error retrieving the location")
//   }
//   console.log("IP retrieved: " + ip)
//   console.log("It worked: " + coords)
// })
