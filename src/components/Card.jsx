/* eslint-disable react/prop-types */
function Card({ name,likes, addLikes, removeCard, removeLikes }) {
  return (
    <div className="card">
      <button
        onClick={removeCard}
        type="button"
        className="btn-close position-absolute top-0 end-0"
        aria-label="Close"
      ></button>
      <img src={`https://source.unsplash.com/400x400?${name}`} alt="..." className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="container">
          <div className="row align-items-end">
            <div className="col">
              <button type="button" className="hearts">
                <span className="material-symbols-outlined" onClick={addLikes} >heart_plus</span>
              </button>
            </div>
            <div className="col">
              <button type="button" className="hearts col">
               <p> {likes}</p>
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
            <div className="col">
              <button type="button" className="hearts col">
                <span className="material-symbols-outlined" onClick={removeLikes}>heart_minus</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
