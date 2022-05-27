import { ICart } from "../models/ICart";

interface PaymentItems {
  cart: ICart[];
  showPayment: boolean;
}

export const Payment = (props: PaymentItems) => {
  let checkoutHtml = props.cart.map((c) => {
    return (
      <>
        <div key={c.id}>{c.movie.name}</div>
        <div>{c.amount}</div>
      </>
    );
  });

  return <>{checkoutHtml}</>;
};
