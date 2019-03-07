const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'kmjldwk7',
  dataset: 'production',
  // token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

module.exports = getData = (search) => { client.search(search) };


// const query = '*[_type == "bike" && seats >= $minSeats] {name, seats}'
// const params = {minSeats: 2}
 
// client.fetch(query, params).then(bikes => {
//   console.log('Bikes with more than one seat:')
//   bikes.forEach(bike => {
//     console.log(`${bike.name} (${bike.seats} seats)`)
//   })
// })