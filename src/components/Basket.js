import React from "react";

const Counters = props => {
  let fee = 2.5;

  return (
    <div>
      {props.counters.length > 0 ? (
        <div className="basket">
          <button className="check-out">Valider mon panier</button>{" "}
          <div>
            <div className="counters">
              {props.counters.map((x, index) => (
                <div key={index} className="counter">
                  <div className="increments">
                    <i
                      className="fas fa-minus-circle"
                      onClick={() =>
                        x.value > 0 ? props.handleDecrement(x) : "none"
                      }
                    />
                    <div className="value">{x.value}</div>
                    <i
                      className="fas fa-plus-circle"
                      onClick={() => props.handleIncrement(x)}
                    />{" "}
                    <div>{x.title}</div>
                  </div>

                  <div className="lineTotal">
                    {(x.price * x.value).toFixed(2)} €
                  </div>
                </div>
              ))}
            </div>
            <div className="subs">
              <div className="subtotal">
                <div>Sous-total</div>
                <div>{props.handleTotal().toFixed(2)} €</div>
              </div>
              <div className="delivery">
                <div>Frais de livraison</div>
                <div>{fee.toFixed(2)} €</div>
              </div>
            </div>
            <div className="total">
              <div>Total</div>
              <div>{(props.handleTotal() + fee).toFixed(2)} €</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-basket basket">
          <button className="check-out">Valider mon panier</button>
          <div className="counters">Votre panier est vide</div>
        </div>
      )}
    </div>
  );
};

export default Counters;
