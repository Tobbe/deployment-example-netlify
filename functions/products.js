const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.handler = async (event, context, callback) => {
  try {
    const products = await prisma.product.findMany()

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(products)
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(error)
    }
  }
}
