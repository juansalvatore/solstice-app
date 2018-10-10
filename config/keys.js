if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod')
} else {
  module.exports = require('./keys_dev')
}

module.exports = {
  mongoURI:
    'mongodb://juansalvatore21:juansalvatore21@ds125673.mlab.com:25673/solstice',
}
