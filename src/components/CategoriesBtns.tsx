interface ICategoryId {
  getCategoryId(id: number): void;
}

export const CategoriesBtns = (props: ICategoryId) => {
  const sendCategoryId = (value: number) => {
    props.getCategoryId(value);
  };
  return (
    <>
      <div className="categories-container">
        <div className="categories-btns-container">
          <button className="categories-btn">All movies</button>
          <button
            className="categories-btn"
            onClick={() => {
              sendCategoryId(5);
            }}
          >
            Action
          </button>
          <button
            className="categories-btn"
            onClick={() => {
              sendCategoryId(6);
            }}
          >
            Comedy
          </button>
          <button
            className="categories-btn"
            onClick={() => {
              sendCategoryId(7);
            }}
          >
            Sci Fi
          </button>
          <button
            className="categories-btn"
            onClick={() => {
              sendCategoryId(8);
            }}
          >
            Thriller
          </button>
        </div>
      </div>
    </>
  );
};
