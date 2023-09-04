import "../styles/card.css";
function Card({
  title,
  body,
  image,
  id,
  value,
  price,
  onClickRemove,
  onClickInvite
}) {
  return (
    <div className="container">
      <div className="card_wrapper" onClick={() => onClickInvite(id, value)}>
        <div className="title">
          {title}
          <div className="body">{body}</div>
          <div className="price">{price}</div>
        </div>
        <div className="img">
          <img src={image} alt="LPR" />
        </div>
      </div>
      <button onClick={() => onClickRemove(id, value)}>-</button>
      <div></div>
      <button onClick={() => onClickInvite(id, value)}>+</button>
    </div>
  );
}
export default Card;
