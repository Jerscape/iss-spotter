const request = require('request');

const fetchMyIp = function(callback){
  
  request("https://api.ipify.org?format=json", (error, response, body) => {
  
  if (error) {
    callback(error, null);
    return;
  }

  //ADDED FROM COMPASS
  // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }

  let data = JSON.parse(body);
  let ip = data["ip"];
  callback(null, ip); //I guess we pass null here because the above code already deals with error?


  })
}

const fetchCoordsByIP = function(ip, callback){
  let url = `https://ipwho.is/${ip}`
  console.log(url)
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    let data = JSON.parse(body);

    //data = JSON.stringify(data)
    //let cords = data[0]
    //let lat = data["latitude"]
    const {latitude, longitude} = data
    callback(null, {latitude, longitude}) //currently returning just the object, I cannot figure out how to get the property values for some reason

  })
  

}

module.exports = {
  fetchMyIp,
  fetchCoordsByIP
}


