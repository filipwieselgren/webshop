import { useState } from "react";
import { IPayment } from "../models/IPayment";

const PaySection = () => {
  const [details, setDetails] = useState<IPayment>({
    email: "",
    cardNumber: 0,
    monthYear: 0,
    cvc: 0,
    name: "",
  });
  const [cvcLength, setCvcLength] = useState("");
  const [cardNumberLength, setCardNumber] = useState("");
  const [monthYearLength, setMonthYear] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === "cvc") {
      const limit = 4;
      setCvcLength(e.target.value.slice(0, limit - 1));
    }
    if (name === "cardNumber") {
      const limit = 13;
      setCardNumber(e.target.value.slice(0, limit - 1));
    }
    if (name === "monthYear") {
      const limit = 5;
      setMonthYear(e.target.value.slice(0, limit - 1));
    }

    console.log();

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="payment-wrapper">
        <h4 className="payment-title">
          Fill in your information below and you are ready to stream.
        </h4>
        <form className="payform" onSubmit={handleSubmit}>
          <label htmlFor="form-email">Email</label>
          <input
            type="email"
            name="email"
            id="form-email"
            className="emailInput payInput"
            required
            onChange={handleChange}
          />
          <label htmlFor="card-details">Card Details</label>
          <div className="card-details-wrapper">
            <input
              type="number"
              name="cardNumber"
              value={cardNumberLength}
              className="payInput cardNumber"
              id="card-details"
              placeholder="123 123 123 123"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              name="monthYear"
              value={monthYearLength}
              className="payInput cardMY"
              placeholder="MM/YY"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              name="cvc"
              value={cvcLength}
              className="payInput cvcNumber"
              placeholder="CVC"
              required
              onChange={handleChange}
            />
          </div>

          <label htmlFor="cardName">Name on card</label>
          <input
            type="text"
            name="name"
            className="nameInput payInput"
            id="cardName"
            required
            onChange={handleChange}
          />

          <button type="submit" className="payBtn">
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default PaySection;
