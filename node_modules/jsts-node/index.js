const fs = require('fs')
const glob = require('glob')
const jstsEngine = require('jsts-engine')

module.exports = {

  load: function(path = '*.jsts') {

    return glob.sync(path)

      .map(filename => fs.readFileSync(filename).toString())

  },

  process: function(files = [], environment = {}) {

    return Array.isArray(files)
           ? files.map(file => jstsEngine(file, environment))
           : jstsEngine(files, environment)

  },

  output: function(files = [], filename = 'out.txt') {

    return fs.writeFileSync(
             filename,
             files
               .map(files => files[0])
               .join('\n')
           )

  },

  compile: function(
    path = '*.jsts',
    filename = 'out.txt',
    environment = {}
  ) {

    return module.exports.output(
      module.exports.process(
        module.exports.load(path),
        environment
      ),
      filename
    )

  }

}