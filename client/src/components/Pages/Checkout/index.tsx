import React, { useContext } from 'react';
import { LocalizationContext } from '../../../localization';
import { ICart } from '../../../App';
import Product, { product } from '../../Generic/Product';
import style from './style.module.css';

interface ICheckout {
	cartItems: ICart;
	onRemove: (product: product) => void;
	onUpdateQuantity: (product: product, quantity: number) => void;
}

function Checkout({ cartItems, onRemove, onUpdateQuantity }: ICheckout) {
	const strings = useContext(LocalizationContext);

	const totalCost = (product: product, quantity: number) => {
		const total = product.price * quantity;
		return total;
	};

	return (
		<div>
			<h1 className={style.shoppingCart}>{strings.shoppingCart}</h1>
			<div>
				{Object.values(cartItems).map((value, index) => (
					<div className={style.checkoutItems} key={index}>
						<div>
							<Product item={value.product} />
							<label>
								{strings.quantity}
								<input
									type="number"
									value={value.quantity}
									onChange={(event) =>
										onUpdateQuantity(
											value.product,
											parseInt(event.target.value),
										)
									}
								/>
							</label>
							<label className={style.totalCost}>
								{strings.total}
								{totalCost(value.product, value.quantity)}
							</label>
						</div>
						<div>
							<button
								className={style.removeFromCart}
								onClick={() => onRemove(value.product)}
							>
								{strings.removeFromCart}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Checkout;
