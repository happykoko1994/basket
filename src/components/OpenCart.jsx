import cl from "../styles/cart.module.css";
function OpenCart({ cart, basket, close, setClose, summ, cartRemove }) {
  const summClose = [cl.summa];
  const contClose = [cl.cart_content];

  if (close) {
    summClose.push(cl.close);
    contClose.push(cl.close);
  }

  return (
    <div className={cl.cart}>
      <div className={cl.cart_name} onClick={() => setClose(false)}>
        <img src={require("../images/basket.png")} alt="basket" />
        <div className={cl.cart_len}>{basket.length} </div>
      </div>

      <div className={contClose}>{cart}</div>
      <div className={summClose}> Сумма : {summ}p.</div>
      <button style={{ fontSize: 16 }} onClick={cartRemove}>
        Очистить
      </button>
    </div>
  );
}
export default OpenCart;
