'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      for (let cart of carts) {
        cart.total = 0
        for (let item of cart.items) {
          for (let listing of listings) {
            cart.total += (listedPrice(listing)(item))
          }
        }
      }
      return carts
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
