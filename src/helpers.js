module.exports = {
  slug: (string='') => string.toLowerCase().replace(/\W/g, '-'),
  hex2rgb: (hex='#123') => {
    hex = hex.replace(/^#/, '')
    let color = [
      hex[0],
      hex[0],
      hex[1],
      hex[1],
      hex[2],
      hex[2]
    ].join('')
    if (hex.length === 4) {
      color += [hex[3], hex[3]].join('')
    }
    const r = parseInt(color.substring(0, 2), 16)
    const g = parseInt(color.substring(2, 4), 16)
    const b = parseInt(color.substring(4, 6), 16)
    if (color.length === 6) {
      return [r, g, b].join(', ')
    }
    if (color.length === 8) {
      const a = (parseInt(color.substring(6, 8), 16) / 255).toFixed(2)
      return [r, g, b, a].join(', ')
    }
  },
  wrappedPrevious: (list, item) => list.indexOf(item) === 0
    ? list[list.length - 1]
    : list[list.indexOf(item) - 1],
  wrappedNext: (list, item) => list.indexOf(item) === list.length - 1
    ? list[0]
    : list[list.indexOf(item) + 1]
}