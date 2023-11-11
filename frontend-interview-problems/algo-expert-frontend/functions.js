const functions = {
  //not finished
  flatten: function (item) {
    if (Array.isArray(item)) {
      const arrayItems = []
      for (const element of item) {
        arrayItems.push(this.flatten(element))
      }
      return arrayItems
    }
    else if (item === 'object') {
      return this.flatten(...item)
    } else {
      return item
    }

  }
}



module.exports = { functions }