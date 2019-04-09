const path = require('path')
const fs = require('fs')

module.exports = {
  process(src, filename) {
    return (
      'module.exports = ' +
      JSON.stringify(
        JSON.parse(fs.readFileSync(path.basename(filename), 'utf-8'))
      ) +
      ';'
    )
  }
}
