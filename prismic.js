module.exports.webhook = (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Event Triggered',
      event,
      context
    })
  }

  console.log(response)

  return new Promise((resolve) => {
    resolve(response)
  })
}
