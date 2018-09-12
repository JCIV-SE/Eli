function isNormalInteger(str) {
  return /^\+?\d+$/.test(str)
}

module.exports = isNormalInteger
