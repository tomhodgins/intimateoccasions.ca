const {slug, wrappedPrevious, wrappedNext, hex2rgb} = require('./helpers.js')

module.exports = {
  title: 'Intimate Occasions',
  tagline: `Celebrating Life’s Special Moments`,
  description: `Life’s special moments are meant to be commemorated and celebrated! Wedding and event officiant and Master of Ceremonies serving families in the Calgary area.`,
  keywords: 'wedding officiant special event vow renewal ceremony funeral celebration life memorable meaningful romantic family',
  url: 'https://intimateoccasions.ca/',
  email: 'intimateoccasionsalberta@gmail.com',
  phone: '587-830-4081',
  font: {
    body: 'mrs-eaves-xl-serif, serif',
    headline: 'magallanes, sans-serif'
  },
  color: {
    red: '#c12F61',
    gray: '#7f7f7e',
    lightBlue: '#93b8c0',
    green: '#557743'
  },
  stylesheet: 'style.css',
  favicon: 'img/favicon.jpg',
  breakpoint: '650px',
  googleMapsAPIKey: 'AIzaSyCajRFCMHoUArG8DGl__H0C2PQqPqVacH0',
  googleAnalytics: ''
  // any other scripts to include?
}

module.exports.meta = () => `
  <!DOCTYPE html>
  <html lang=en>
  <meta charset=utf-8>
  <meta name=theme-color content="rgb(${hex2rgb(module.exports.color.red)}, .3)">
  <meta name=apple-mobile-web-app-title content="${module.exports.title}">
  <meta name=apple-mobile-web-app-capable content=no>
  <meta name=apple-mobile-web-app-status-bar-style content="rgb(${hex2rgb(module.exports.color.red)}, .15)">
  <meta name=viewport content="width=device-width, initial-scale=1">
  <meta property=og:type content=website>
  <meta property=og:image content=${module.exports.url}${module.exports.favicon}>
  <link rel=apple-touch-icon href=${module.exports.url}${module.exports.favicon}>
  <link rel="shortcut icon" href=${module.exports.url}${module.exports.favicon}>
  <link rel=stylesheet href=https://use.typekit.net/leq3jko.css media=none onload="media=''">
  <link rel=stylesheet href=${module.exports.url}${module.exports.stylesheet}>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132663730-1"></script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'UA-132663730-1')
  </script>
`

module.exports.nav = () => [
  {
    text: 'Home',
    title: 'Intimate Occasions Home page',
    url: module.exports.url + 'index.html'
  },
  {
    text: 'Services',
    title: 'View services I offer',
    url: module.exports.url + 'services/index.html'
  },
  {
    text: 'Locations',
    title: 'View locations where I operate',
    url: module.exports.url + 'locations/index.html'
  },
  {
    text: 'Pricing',
    title: 'View pricing information',
    url: module.exports.url + 'pricing.html'
  },
  {
    text: 'Contact',
    title: 'Get in touch today',
    url: module.exports.url + 'contact.html'
  },
]

module.exports.header = () => `
  <header>
    <a id=logo href="${module.exports.url}index.html"><img src="${module.exports.url}img/intimate-occasions-wordmark.svg" alt="${module.exports.title}, ${module.exports.tagline}"></a>
    <nav>
      ${
        module.exports.nav()
          .map(link => `<a href="${link.url}" title="${link.title}">${link.text}</a>`)
          .join('\n')
      }
    </nav>
  </header>
`

module.exports.footer = () => `
  <footer>
    <p><a href="mailto:${module.exports.email}" title="Click to send an email">${module.exports.email}</a>
    <a href="tel:+1${module.exports.phone.replace(/-/g, '')}" title="Click to call">${module.exports.phone}</a></p>
  </footer>
`

module.exports.nextUp = (list=[], item, name='page') => `
  <nav class=next>
    <span>View next ${name}</span> <a href="${module.exports.url}${name}s/${slug(wrappedNext(list, item).name)}.html" title="${wrappedNext(list, item).description}">${wrappedNext(list, item).name} &rarr;</a>
  </nav>
`