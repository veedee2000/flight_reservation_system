import React from "react";
import GooglePayButton from "@google-pay/button-react";

function Payment() {
  return (
    <div>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Kurama Airlines",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "5435",
            currencyCode: "INR",
            countryCode: "US",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log("Payment Data Successful", paymentData);
          return { transactionState: "SUCCESS" };
        }}
        existingPaymentMethodRequired="false"
        buttonColor="black"
        buttonType="buy"
      />
    </div>
  );
}

export default Payment;
