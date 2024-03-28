const path = require('path')
 
module.exports = {
  staticPageGenerationTimeout: 180,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}