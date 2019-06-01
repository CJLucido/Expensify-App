const moment = require.requireActual('moment'); //in lesson 121, making timestamp unchanging to use in mock, but need to really call the moment and then set that to 0 to send zero to where moment is elsewhere?

export default (timestamp = 0) => {
    return moment(timestamp)
}