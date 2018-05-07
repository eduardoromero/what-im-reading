const jsonata = require('jsonata')

const bookMappings = `{
  "Book": {
    	"id": $join(["prismic", "-", id]),
      "abstract": { 
        "text": $join(data.description.text), 
        "elements": data.description 
      },
      "cover": data.cover.url,
      "asin": data.asin,
      "colorize": data.colorize,
      "link": {
        "type": $lowercase(data.link.link_type),
        "url": data.link.url,
        "target": $lowercase(data.link.target)
      },
      "comments": { 
        "text": $join(data.comments.text), 
        "elements": data.comments 
      },
      "rating": data.rating,
      "title": data.title.text,
      "tags": $filter(data.tags.tag, function($value) { $value }),
      "slug": slugs[0]
    },
    "meta": {
    	"href": href,
      "slugs": slugs,
      "lang": lang,
    	"updated": last_publication_date
    },
    "type": "books",
    "source": "prismic"
}`

class Book {
  constructor (source) {
    const mapper = jsonata(bookMappings)
    Object.assign(this, mapper.evaluate(source))
  }
}

module.exports = {
  Book: Book
}
