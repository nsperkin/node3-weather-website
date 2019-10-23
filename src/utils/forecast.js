const request = require('request')

const forecast = (lon, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/fb483f2f11a1e7b8912901e7fc681123/' + encodeURIComponent(lon) + ',' + encodeURIComponent(lat)

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback(error='Unable to connect to forecast service!')
        } else if (body.error) {
            callback(error='Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
    

}


module.exports = forecast