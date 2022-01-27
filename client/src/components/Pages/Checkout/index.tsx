import React, { useContext } from 'react';
import { LocalizationContext } from '../../../localization';
import { ICart } from '../../../App';
import Product from '../../Generic/Product';
import style from './style.module.css';

interface ICheckout {
	cartItems: ICart;
}

function Checkout({ cartItems }: ICheckout) {
	const strings = useContext(LocalizationContext);

	return (
		<div>
			<div>
				<h1>{strings.shoppingCart}</h1>
				<div className={style.border}></div>
			</div>
			<div>
				{Object.values(cartItems).map((value, index) => (
					<div className="checkout-item" key={index}>
						<Product item={value.product} />
						<h3 className="checkout-item-qty">
							{strings.quantity}: {value.quantity}
						</h3>
						<div className={style.border}></div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Checkout;
