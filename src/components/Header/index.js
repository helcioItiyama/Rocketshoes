import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <MdShoppingBasket size={36} color="#fff" />
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
      </Cart>
    </Container>
  );
}
