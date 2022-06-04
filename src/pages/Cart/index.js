import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import { Container, ContainerList, TravelItem, Info, Quantity, Subtotal, TotalPrice} from "./styles"


function Cart() {

  const { state, setState } = useContext(CartContext);
  const  totalPriceTravel = state.cart.reduce((acc, travel)=>
     acc + (travel.quantity*travel.price),0,
     );
  
  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>              
            </Info>
            <Quantity readOnly type='number' value={el.quantity} />
            <Subtotal>
              <p>{el.quantity * el.price}</p>
              <button type="button">
                <MdDelete size={24} color='0676D9' />
              </button>
            </Subtotal>                      
          </TravelItem>  
        ))}

      </ContainerList>      
      <TotalPrice>
              <p>Total:</p>
              <strong>{totalPriceTravel}</strong>  
      </TotalPrice>  
    </Container>
  );
}

export default Cart;
