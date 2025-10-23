export default defineEventHandler(async (event) => {
  const { listPayments } = useStripePayments()

    try {
      return await listPayments(1)
    } catch (error) {
      return createError({
        statusCode: 500,
        statusMessage: 'Failed to retrieve payments by email',
      })
    }
})
