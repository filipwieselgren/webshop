import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [cardNumberLength, setCardNumberLength] = useState("");
  const [monthYearLength, setMonthYear] = useState("");
  const [cardNumber, setCardNumber] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === "cvc") {
      const limit = 4;
      setCvcLength(e.target.value.slice(0, limit - 1));
    }
    if (name === "cardNumber") {
      const limit = 13;
      setCardNumberLength(e.target.value.slice(0, limit - 1));
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

    console.log("För kort");

    if (
      cvcLength.length < 3 ||
      cardNumberLength.length < 12 ||
      monthYearLength.length < 4
    ) {
      setCardNumber(true);
      return;
    }
    localStorage.clear();
    setCardNumber(false);
    navigate("/confirmation");
  };

  let cardNumberWrong = <></>;
  if (cardNumber) {
    cardNumberWrong = (
      <div className="card-number-wrong">
        Something went wrong here. Your card number must include 12 digits, the
        month and year must include 4 digits and the cvc must include 3 digits.
      </div>
    );
  }

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
              min="12"
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
              min="4"
              className="payInput cardMY"
              placeholder="MM/YY"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              name="cvc"
              min="3"
              value={cvcLength}
              className="payInput cvcNumber"
              placeholder="CVC"
              required
              onChange={handleChange}
            />
            {cardNumberWrong}
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
