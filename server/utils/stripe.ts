import Stripe from 'stripe'

export const useStripePayments = () => {
  const stripe = new Stripe(useRuntimeConfig().stripeSecretKey, {
    apiVersion: '2025-02-24.acacia',
  })
  /**
   * Get payment details by ID
   * @param paymentId - The Stripe payment intent ID
   */
  const listPayments = async (limit = 10, startingAfter?: string) => {
    try {
      return await stripe.paymentIntents.list({
        limit,
        ...(startingAfter && { starting_after: startingAfter }),
      })
    } catch (error) {
      console.error('Error listing payments:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to list payments',
      })
    }
  }

  return {
    listPayments,
  }
}
