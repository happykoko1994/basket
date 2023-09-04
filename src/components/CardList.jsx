import Card from "./Card";
import arr from "../arr.js";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import "../styles/cardList.css";
import OpenCart from "./OpenCart";
function CardList() {
  const [filter, setFilter] = useState("");
  const [invite, setInvite] = useState([]);
  const [basket, setBasket] = useState([]);
  const [modal, setModal] = useState(false);
  const [close, setClose] = useState(false);
  const [summ, setSumm] = useState([0]);
  const cart = invite.map((item) => (
    <ul key={arr.id}>
      <li>
        <div className="li-text">
          {arr[item - 1].body} --
          {arr[item - 1].price}
        </div>
        <div className="cross" onClick={(id) => onClickRemove((id = item))}>
          <img src={require("../images/cross.png")} alt="cross" />
        </div>
      </li>
    </ul>
  ));

  useEffect(
    () =>
      setSumm(
        basket.reduce(function (currentSum, currentNumber) {
          return currentSum + currentNumber;
        }, 0)
      ),
    [basket]
  );
  function onClickInvite(id, value) {
    setInvite((prev) => [...prev, id]);

    setBasket((prev) => [...prev, value]);
    setSumm(
      basket.reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber;
      }, 0)
    );
  }

  function onClickRemove(id, value) {
    let price = basket.indexOf(value);
    let index = invite.indexOf(id);
    if (index > -1) {
      invite.splice(index, 1);
      basket.splice(price, 1);
      setInvite((prev) => [...prev]);
      setSumm(
        basket.reduce(function (currentSum, currentNumber) {
          return currentSum + currentNumber;
        }, 0)
      );
    }

    return invite;
  }
  function cartRemove(id, value) {
    setBasket(basket.filter((_value) => _value === value));
    setInvite(invite.filter((_id) => _id === id));
    setModal(true);
  }

  return (
    <div className="card-list-wrap">
      <div>
        <input
          placeholder="Поиск"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        {arr
          .filter((obj) => {
            return obj.title.toLowerCase().includes(filter.toLowerCase());
          })
          .map((item) => (
            <Card
              key={arr.id}
              onClickInvite={onClickInvite}
              onClickRemove={onClickRemove}
              {...item}
            />
          ))}

        <Modal
          children="Корзина очищена"
          visible={modal}
          setVisible={setModal}
        />
      </div>
      <OpenCart
        summ={summ}
        cartRemove={cartRemove}
        close={close}
        setClose={setClose}
        cart={cart}
        basket={basket}
      />
    </div>
  );
}
export default CardList;
