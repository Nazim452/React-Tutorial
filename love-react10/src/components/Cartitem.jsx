import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast';
import { remmove } from '../redux/Slices/CartSlice'
const Cartitem = ({item, itemIndex}) => {
  
  const dispath = useDispatch();


  const removeFromCart=()=>{
    
    dispath(remmove(item.id));
    toast.success("Item removed successfully");
  }
  return (
    <div>
       <div>
        <div>
          <img src={item.image}  />
        </div>

        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>

        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>

       </div>
    </div>
  )
}

export default Cartitem