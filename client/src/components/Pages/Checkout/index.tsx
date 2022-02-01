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
			<h1 className={style.shoppingCart}>{strings.shoppingCart}</h1>
			<div>
				{Object.values(cartItems).map((value, index) => (
					<div className={style.checkoutItems} key={index}>
						<div>
							<Product item={value.product} />
							<h3>
								{strings.quantity}: {value.quantity}
							</h3>
						</div>
						<div>
							<button className={style.deleteButton}>
								{strings.deleteItem}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Checkout;
