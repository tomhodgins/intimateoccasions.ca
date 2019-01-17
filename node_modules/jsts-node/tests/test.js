const {compile} = require('../index.js')

let objects = {

  exampleVariable: '#07f',

  double: n => n * 2

}

compile('*.jsts', 'demo.css', objects)