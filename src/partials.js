const site = require('./site-info.js')
const {slug, wrappedPrevious, wrappedNext, hex2rgb} = require('./helpers.js')

// Site Meta Tags
module.exports.meta = () => `
  <!DOCTYPE html>
  <html lang=en>
  <head>
  <meta charset=utf-8>
  <meta name=theme-color content="rgb(${hex2rgb(site.color.red)}, .3)">
  <meta name=apple-mobile-web-app-title content="${site.title}">
  <meta name=apple-mobile-web-app-capable content=no>
  <meta name=apple-mobile-web-app-status-bar-style content="rgb(${hex2rgb(site.color.red)}, .15)">
  <meta name=viewport content="width=device-width, initial-scale=1">
  <meta property=og:type content=website>
  <meta property=og:image content=${site.url}${site.favicon}>
  <link rel=apple-touch-icon href=${site.url}${site.favicon}>
  <link rel=icon href=${site.url}${site.favicon}>
  <link rel=stylesheet href=https://use.typekit.net/leq3jko.css media=none onload="media=''">
  <link rel=stylesheet href=${site.url}${site.stylesheet}>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132663730-1"></script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'UA-132663730-1')
  </script>
`

// Main Menu Links
module.exports.nav = () => [
  {
    text: 'Home',
    title: 'Intimate Occasions Home page',
    url: site.url + 'index.html'
  },
  {
    text: 'Services',
    title: 'View services I offer',
    url: site.url + 'services/index.html'
  },
  {
    text: 'Locations',
    title: 'View locations where I operate',
    url: site.url + 'locations/index.html'
  },
  {
    text: 'Pricing',
    title: 'View pricing information',
    url: site.url + 'pricing.html'
  },
  {
    text: 'Contact',
    title: 'Get in touch today',
    url: site.url + 'contact.html'
  },
]

// Page Header
module.exports.header = () => `
  <header>
    <a id=logo href="${site.url}index.html"><img src="${site.url}img/intimate-occasions-wordmark.svg" alt="${site.title}, ${site.tagline}"></a>
    <nav>
      ${
        module.exports.nav()
          .map(link => `<a href="${link.url}" title="${link.title}">${link.text}</a>`)
          .join('\n')
      }
    </nav>
  </header>
`

// Next Item in Category
module.exports.nextUp = (list=[], item, name='page') => `
  <nav class=next>
    <span>View next ${name}</span> <a href="${site.url}${name}s/${slug(wrappedNext(list, item).name)}.html" title="${wrappedNext(list, item).description}">${wrappedNext(list, item).name} &rarr;</a>
  </nav>
`

// Page Footer
module.exports.footer = () => `
  <footer>
    <p><a href="mailto:${site.email}" title="Click to send an email">${site.email}</a>
    <a href="tel:+1${site.phone.replace(/-/g, '')}" title="Click to call">${site.phone}</a></p>
    <figure>
      <img src=/img/life-celebrants-canada.jpg alt="Life Celebrants of Canada">
      <figcaption>Certified Celebrant<small>Life Celebrants of Canada</small></figcaption>
    </figure>
  </footer>
`