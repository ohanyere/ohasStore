require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


export const handler = async(reg) => {
    try {
        const {amount} = JSON.parse(reg.body)
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency : "usd",
            payment_method_types : ["card"]
        })

        return{
            body : JSON.stringify(paymentIntent),
            statusCode : 200
        }
    } catch (error) {
        console.log(error);
        return{
            body : JSON.stringify(error),
            statusCode : 400
        }
    }
}