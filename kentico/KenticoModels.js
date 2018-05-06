const KenticoCloud = require('kentico-cloud-delivery-node-sdk')
const {matches} = require('z')

class Book extends KenticoCloud.ContentItem {
  toJSON () {
    let json = {}

    Object.keys(this).forEach((field) => {
      return matches(field)(
        (x = 'abstract') => { json[field] = this[field].value },
        (x = 'asin') => { json[field] = this[field].text },
        (x = 'book_categories') => { json['tags'] = this[field].value.map(item => item.codename) },
        (x = 'comments') => { json[field] = this[field].value },
        (x = 'cover') => { json[field] = this[field].value },
        (x = 'link') => { json[field] = this[field].value },
        (x = 'slug') => { json[field] = this[field].value },
        (x = 'title') => { json[field] = this[field].value },
        (x = 'system') => {
          json['id'] = `kentico-${this.system.id}`
          json['codename'] = this.system.codename
          json['last_modified'] = this.system.last_modified
          json['lang'] = this.system.language
        }
      )
    })

    return {Book: json, type: 'books', source: 'kentico'}
  }
}

module.exports = {
  Book: Book
}
