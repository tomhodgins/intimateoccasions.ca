// Libraries
const fs = require('fs')
const glob = require('glob')
const {compile} = require('jsts-node')
const prettier = require('prettier')

// Site info
const site = require('./site-info.js')
const helpers = require('./helpers.js')
const partials = require('./partials.js')
const {locations} = require('./locations.js')
const {services} = require('./services.js')
const {testimonials} = require('./testimonials.js')

// Compile in local development mode
if (process.argv[2] === 'dev') {
  console.log('🚨🚨 HACKER ALERT! 🚨🚨')
  console.log('Running in DEVELOPMENT mode')
  site.url = process.cwd().split('/src')[0] + '/'
  console.log(`Site URL output as ${site.url}`)
}

// Compile in hosted staging mode
if (process.argv[2] === 'staging') {
  console.log('🔍👀 TOP SECRET PREVIEW! 🔍👀')
  console.log('Running in STAGING mode')
  site.url = 'https://staticresource.com/mom-website/'
  console.log(`Site URL output as ${site.url}`)
}

// Compile css file
compile(
  'templates/style.css.jsts',
  `../${site.stylesheet}`,
  {site, helpers}
)

console.log('✔ CSS compiled')

// Compile index file
compile(
  'templates/index.html.jsts',
  '../index.html',
  {site, partials, helpers, locations, services, testimonials}
)

console.log('✔ Index page built')

// Compile location pages
compile(
  'templates/locations.html.jsts',
  '../locations/index.html',
  {site, partials, helpers, locations, services}
)

locations.forEach(location =>
  compile(
    'templates/location.html.jsts',
    `../locations/${helpers.slug(location.name)}.html`,
    {site, partials, helpers, locations, location, services}
  )
)

console.log('✔ Location pages built')

// Compile Services pages
compile(
  'templates/services.html.jsts',
  '../services/index.html',
  {site, partials, helpers, locations, services}
)

services.forEach(service =>
  compile(
    'templates/service.html.jsts',
    `../services/${helpers.slug(service.name)}.html`,
    {site, partials, helpers, locations, services, service}
  )
)

console.log('✔ Service pages built')

// Compile pricing file
compile(
  'templates/pricing.html.jsts',
  '../pricing.html',
  {site, partials, helpers, services}
)

console.log('✔ Pricing page built')

// Compile contact file
compile(
  'templates/contact.html.jsts',
  '../contact.html',
  {site, partials, helpers}
)

console.log('✔ Contact page built')

// Compile "Special Service in Location" Pages
/*

// List all service + location combinations
for (let location in locations) {
  for (let service in services) {
    console.log(`${services[service]} in ${locations[location]}`)
  }
}

*/

// Generate sitemap file
fs.writeFileSync(
  '../sitemap.txt',
  glob.sync('../**/*.html')
    .map(path => path.replace(/^..\//, site.url))
    .join('\n')
)

console.log('✔ Sitemap.txt generated')

// Prettify generated HTML
glob.sync('../**/*.html').forEach(file => {
  fs.writeFileSync(
    file,
    prettier.format(
      fs.readFileSync(file).toString(),
      {parser: 'html'}
    )
  )
  return console.log(`✔ ${file} prettified`)
})

console.log('✔ Build complete!')