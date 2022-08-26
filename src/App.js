import './App.css';

function App() {
  return (
    <div className="wrapper">







      <div className="c-cart-drawer__overlay">
        <div className="c-cart-drawer">
          <h2 className="c-cart-drawer__title">
            Cart
          </h2>

          <div className="c-cart-drawer__item">
            <img className="c-cart-drawer__item-image" src="img/nikies/4.jpg" alt="Nikie"></img>

            <div className="c-cart-drawer__item-info">
              <p className="c-cart-drawer__item-title">
                Nike Air Max Flyknit Racer
              </p>
              <b className="c-cart-drawer__item-price">
                200 ASD
              </b>
            </div>
            <img src="img/btn-remove.svg" alt="Remove"></img>
          </div>
        </div>

        {/* <div className={styles.drawer}>
          <h2 className="d-flex justify-between mb-30">
            Корзина <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
          </h2>

          {items.length > 0 ? (
            <div className="d-flex flex-column flex">
              <div className="items flex">
                {items.map((obj) => (
                  <div key={obj.id} className="cartItem d-flex align-center mb-20">
                    <div
                      style={{ backgroundImage: `url(${ obj.imageUrl })` }}
                      className="cartItemImg"></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src="img/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                ))}
              </div>
              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice} руб. </b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>{(totalPrice / 100) * 5} руб. </b>
                  </li>
                </ul>
                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                  Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
                </button>
              </div>
            </div>
          ) : (
            <Info
              title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
              description={
                isOrderComplete
                  ? `Ваш заказ #${ orderId } скоро будет передан курьерской доставке`
                  : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
              }
              image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
            />
          )}
        </div> */}
      </div>











      <header className="c-header">
        <div className="c-header__left">
          <img className="c-header__left-logo" src="img/logo.png" alt="Logotype" />
          <div>
            <h3 className="c-header__left-title">
              Almost Nikie
            </h3>
            <p className="c-header__left-subtitle">
              Best shoes shop
            </p>
          </div>
        </div>
        <ul className="c-header__right">
          <li className="c-header__right-item">
            <img className="c-header__right-cart-logo" src="img/cart.svg" alt="Cart" />
            <span>300 AUS</span>
          </li>
          <li className="c-header__right-item">
            <img className="c-header__right-user-logo" src="img/user.svg" alt="User" />
          </li>
        </ul>
      </header>

      <div className="c-content">
        <div className="c-content__title-container">

          <h1 className="c-content__title">
            All shoes
          </h1>

          <div className="c-content__search">
            <img className="c-content__search-icon" src="img/search.svg" alt="Search">
            </img>
            <input className="c-content__search-input" placeholder="Search..."></input>
          </div>
        </div>

        <div className="c-card__container">
          <div className="c-card">
            <div className="c-card__favorite">
              <img className="c-card__favorite-icon" src="img/unliked.svg" alt="Unliked"></img>
            </div>

            <img className="c-card__image" src="img/nikies/4.jpg" alt="Nikies" />
            <h5 className="c-card__title">Nike Air Max Flyknit Racer</h5>
            <div className="c-card__wrapper">
              <div className="c-card__price-container">
                <span>Price:</span>
                <b>200 ASD</b>
              </div>
              <button className="c-card__btn">
                <img className="c-card__btn-icon" src="img/plus.svg" alt="Add to cart"></img>
              </button>
            </div>
          </div>
          <div className="c-card">
            <img className="c-card__image" src="img/nikies/2.jpg" alt="Nikies" />
            <h5 className="c-card__title">Nike Air Max Flyknit Racer</h5>
            <div className="c-card__wrapper">
              <div className="c-card__price-container">
                <span>Price:</span>
                <b>200 ASD</b>
              </div>
              <button className="c-card__btn">
                <img className="c-card__btn-icon" src="img/plus.svg" alt="Add to cart"></img>
              </button>
            </div>
          </div>
          <div className="c-card">
            <img className="c-card__image" src="img/nikies/3.jpg" alt="Nikies" />
            <h5 className="c-card__title">Nike Air Max Flyknit Racer</h5>
            <div className="c-card__wrapper">
              <div className="c-card__price-container">
                <span>Price:</span>
                <b>200 ASD</b>
              </div>
              <button className="c-card__btn">
                <img className="c-card__btn-icon" src="img/plus.svg" alt="Add to cart"></img>
              </button>
            </div>
          </div>
          <div className="c-card">
            <img className="c-card__image" src="img/nikies/5.jpg" alt="Nikies" />
            <h5 className="c-card__title">Nike Air Max Flyknit Racer</h5>
            <div className="c-card__wrapper">
              <div className="c-card__price-container">
                <span className="c-card__price-label">Price:</span>
                <b className="c-card__price">200 ASD</b>
              </div>
              <button className="c-card__btn">
                <img className="c-card__btn-icon" src="img/plus.svg" alt="Add to cart"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
