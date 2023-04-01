import { addItem, removeItem, updateItem } from '../utils/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const dispatch = useDispatch();
const cartItems = useSelector(store => store.cart.items);


export const addFoodItem = (item) => {
    console.log(item?.card?.info?.id);

    const existingItem = cartItems.find(
      (i) => i.card?.info?.id === item?.card?.info?.id
    );

    // console.log("item "+ {existingItem});

    if (existingItem) {
      dispatch(
        updateItem({
        //   id: existingItem.item?.data?.info?.id,
          id: existingItem.card.info.id,
          qty: existingItem.qty+1
        })
      );
    } else {
      dispatch(addItem({ ...item, qty: 1 }));
    }
  };

 export const removeFoodItem = (item) => {
    console.log(item?.card?.info?.id);

    const existingItem = cartItems.find(
      (i) => i.card?.info?.id === item?.card?.info?.id
    );

    // console.log("item "+ {existingItem});

    if (existingItem) {
      if(existingItem.qty>1){
        dispatch(
          updateItem({
          //   id: existingItem.item?.data?.info?.id,
            id: existingItem.card.info.id,
            qty: existingItem.qty-1
          })
        );
      }
      else{
        dispatch(removeItem({
          id: existingItem.card.info.id,
          }))
      } 
    } 
  };