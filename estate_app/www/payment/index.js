
  function makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-462338d7fa5168c10d8d6fb0b558537f-X",
      tx_ref: "hooli-tx-1920bbtyt",
      amount: 600,
      currency: "NGN",
      country: "NG",
      payment_options: "card, mobilemoneyghana, ussd",
      // redirect_url: // specified redirect URL
        // "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "user@gmail.com",
        phone_number: "08102909304",
        name: "yemi desola",
      },
      callback: function (data) {
        console.log(data);
      },
      onclose: function() {
        // close modal
      },
      customizations: {
        title: "My store",
        description: "Payment for items in cart",
        // logo: "https://assets.piedpiper.com/logo.png",
      },
    });
  }
