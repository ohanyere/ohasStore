import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import { BUTTON_TYPE_CLASSES } from "../button/Button"
import Button from "../button/Button"
import axios from "axios"
import {FormContainer, PaymentContainer} from "./PaymentForm.style.jsx"

const PaymentForm = () => {
    const stripe = useStripe()
    const element = useElements()


    const paymenthandler = async(event) => {
        event.preventDefault()
        if(!stripe || !element){
            return
        }
        const  response = await axios.post("../../../api/create-payment-intent",{
            amount : 10000
        })

        if(response.data){
            console.log(response.data());
            
            // const {client_secret} =
            // const paytmentResult = await stripe.confirmCardPayment()
        }
    }

    return(
        <PaymentContainer>
            <h2>payment from</h2>
            <FormContainer onSubmit={paymenthandler}>
                <CardElement />
                <Button
                buttonType="inverted">pay now</Button>
            </FormContainer>
        </PaymentContainer>
    )
}

export default PaymentForm