import addToCartImg from "../images/how-it-works-cart-.png";
import payImg from "../images/credit-cards.png";
import enjoyImg from "../images/watching-a-movie.png";
import arrowImg from "../images/right-arrow.png";

export const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="how-it-works-txt">How it works</div>
        <div className="header-imgs-container">
          <div className="header-single-img-container">
            <img
              className="how-it-works-img"
              src={addToCartImg}
              alt="Add to cart img"
            />
            <div>Add to cart</div>
          </div>
          <div className="arrow-img-container">
            <img className="arrow" src={arrowImg} alt="Arrow img" />
          </div>
          <div className="header-single-img-container">
            <img className="how-it-works-img" src={payImg} alt="Card img" />
            <div>Pay</div>
          </div>
          <div className="arrow-img-container">
            <img className="arrow" src={arrowImg} alt="Arrow img" />
          </div>
          <div className="header-single-img-container">
            <img className="how-it-works-img" src={enjoyImg} alt="Play img" />
            <div>Enjoy</div>
          </div>
        </div>
      </header>
    </>
  );
};
