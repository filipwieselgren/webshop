const PaySection = () => {
  return (
    <>
      <div className="payment-wrapper">
        <h4 className="payment-title">
          Fill in your information below and you are ready to stream.
        </h4>
        <form className="payform">
          <label htmlFor="form-email">Email</label>
          <input type="email" id="form-email" className="emailInput payInput" />
          <label htmlFor="card-details">Card Details</label>
          <div className="card-details-wrapper">
            <input
              type="number"
              className="payInput cardNumber"
              id="card-details"
              placeholder="123 123 123 123"
            />
            <input
              type="number"
              className="payInput cardMY"
              placeholder="MM/YY"
            />
            <input
              type="number"
              className="payInput cvcNumber"
              placeholder="CVC"
            />
          </div>

          <label htmlFor="cardName">Name on card</label>
          <input type="text" className="nameInput payInput" id="cardName" />

          <button type="submit" className="payBtn">
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default PaySection;
