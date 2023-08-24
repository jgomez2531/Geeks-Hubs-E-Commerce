function RatingSearch(props) {
  const { rating } = props;
  return {
    4: (
      <div className="rating">
        <span>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
        </span>
        <span>o más</span>
      </div>
    ),
    3: (
      <div className="rating">
        <span>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </span>
        <span>o más</span>
      </div>
    ),
    2: (
      <div className="rating">
        <span>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </span>
        <span>o más</span>
      </div>
    ),
    1: (
      <div className="rating">
        <span>
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </span>
        <span>o más</span>
      </div>
    ),
    0: (
      <div className="rating">
        <span>
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </span>
        <span>o más</span>
      </div>
    ),
  }[rating];
}
export default RatingSearch;
