import React from 'react';
import Button from '@mui/material/Button';

import { addtocart } from '../../Redux/addToCart';
import { useDispatch } from 'react-redux';
import Show_details_modal from './detailsModal';
import BlueButton from '../../../Components/BlueButton';

function Card_footer({ dataCard }) {
  const dispatch = useDispatch();
  const addToCartDetail = () => {
    dispatch(addtocart(dataCard));
  };

  return (
    <div>
      <ul>
        <li onClick={addToCartDetail}>
          <BlueButton
            variant='outlined'
            style={{
              width: '50%',
              marginBottom: '15px',
              fontWeight: 'bold',
              translate: '50%',
            }}
          >
            Add To Cart
          </BlueButton>
        </li>
        <li>
          <Show_details_modal dataUse={dataCard} />
        </li>
      </ul>
    </div>
  );
}

export default Card_footer;
