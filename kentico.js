const _get = require('lodash/get')
const KenticoCloud = require('kentico-cloud-delivery-node-sdk')

const {Book} = require('./kentico/KenticoModels')

module.exports.webhook = (event, context) => {
  const data = JSON.parse(event.body)
  const projectId = _get(data, 'message.project_id', process.env.KENTICO_PROJECT_ID)
  const items = _get(data, 'data.items', [])

  const config = new KenticoCloud.DeliveryClientConfig(projectId, [
    new KenticoCloud.TypeResolver('book', () => new Book())
  ])

  const client = new KenticoCloud.DeliveryNodeClient(config)

  let command = {
    type: _get(data, 'message.operation', 'noop ')
  }

  return client
    .items()
    .type('book')
    .inFilter('codename', items.map(item => item.codename))
    .getPromise()
    .then(result => {
      const _items = result.items.map(item => {
        return item
      })

      return _items
    })
    .then(items => {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Kentico Trigger Processed',
          items: items
        })
      }
    })
}
