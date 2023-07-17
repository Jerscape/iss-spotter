const request = require('request-promise-native');

const fetchMyIp = function (){
  return request("https://api.ipify.org?format=json")
}

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip
  //console.log(ip)
  return request(`https://ipwho.is/${ip}`)
}

const fetchISSflyOvertimes = function(coords) {
  const { latitude, longitude } = JSON.parse(coords);
  console.log(latitude, longitude)
  let url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  return request(url)

}

const nextISSTimesForMyLocation = function(){
  return fetchMyIp()
  .then(fetchCoordsByIP)
  .then(fetchISSflyOvertimes)
  .then((data)=> {
    console.log("Data: ", data)
    const {response} = JSON.parse(data)
    console.log('Response', response)
    return response;
  })
}


module.exports = {
  // fetchMyIp,
  // fetchCoordsByIP,
  // fetchISSflyOvertimes,
  nextISSTimesForMyLocation
}