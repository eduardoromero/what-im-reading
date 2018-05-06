const _get = require('lodash/get')
const Prismic = require('prismic-javascript')
const {Book} = require('./prismic/PrismicModels')

const prismicEndpoint = 'https://must-read.prismic.io/api/v2' // TODO: API URL comes on the webhook too.
const MS_PER_MINUTE = 60000
const API_TOKEN = 'MC5XdTVQSVNVQUFDVUFSaGh4.LWIrKwwR77-977-9TSU-77-977-977-977-9QO-_vRzvv70kPO-_vSXvv73vv73vv70j77-977-9Mznvv70'

module.exports.webhook = (event, context) => {
  const data = JSON.parse(event.body)

  return Prismic
    .api(prismicEndpoint, { accessToken: API_TOKEN })
    .then((api) => {
      const TEN_MINUTES_AGO = new Date(Date.now() - (MS_PER_MINUTE * 10))
      console.log(TEN_MINUTES_AGO)

      return api.query(
        Prismic.Predicates.dateAfter('document.last_publication_date', TEN_MINUTES_AGO),
        {
          orderings: '[document.last_publication_date desc]'
        }
      )
    })
    .then(response => {
      response.results = _get(response, 'results', [])

      const items = response.results.map(item => {
        return new Book(item)
      })


      return new Promise((resolve) => {
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Prismic Trigger Processed',
            items,
            context
          })
        }

        console.log(response)
        resolve(response)
      })
    })
    .catch(error => {
      return new Promise((resolve) => {
        const response = {
          statusCode: 500,
          body: JSON.stringify({
            message: 'Prismic Trigger Errored',
            error
          })
        }

        console.log(response)
        resolve(response)
      })
    })
}
