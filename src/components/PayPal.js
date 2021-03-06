import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {

    render() {

        const onSuccess = (payment) => {
            alert("THANKS! The payment was succeeded!")
            console.log("The payment was succeeded!", payment);
            this.props.clearCart();
        }
 
        const onCancel = (data) => {
            alert("TRANSACTION CANCELED, PLEASE TRY AGAIN!")
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            alert("SOMETHING WENT WRONT, PLEASE TRY AGAIN!")
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'GBP'; 

        const client = {
            sandbox: "AV-47neC5guGOCrk_vTsC2CYcOH6SkkWHRiLDios2DoZvcUVO5bjJ5iyPSjLCxaahM4g-RqTPW1wrun3",
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn
            env={env} 
            client={client} 
            currency={currency} 
            total={this.props.total} 
            onError={onError} 
            onSuccess={onSuccess} 
            onCancel={onCancel} />
        );
    }
}