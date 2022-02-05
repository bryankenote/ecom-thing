import React, { useContext } from 'react';
import { LocalizationContext } from '../../../localization';
import { ICart } from '../../../App';
import Product, { product } from '../../Generic/Product';
import style from './style.module.css';

interface ICheckout {
	cartItems: ICart;
	onRemove: (product: product) => void;
}

function Checkout({ cartItems, onRemove }: ICheckout) {
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
							<button
								className={style.removeFromCart}
								onClick={() => onRemove(value.product)}
							>
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
