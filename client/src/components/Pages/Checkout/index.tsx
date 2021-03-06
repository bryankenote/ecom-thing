import React, { useCallback, useContext, useMemo } from 'react';
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

	const totalCostPerItem = useCallback(
		(product: product, quantity: number) => {
			const total = product.price * quantity;
			return total.toFixed(2);
		},
		[],
	);

	const orderTotal = useMemo(() => {
		const newCartArray = Object.values(cartItems).map(
			(value) => value.quantity * value.product.price,
		);
		const initialOrderTotal = 0;
		const orderTotalSum = newCartArray.reduce(
			(prevVal, currVal) => prevVal + currVal,
			initialOrderTotal,
		);
		return orderTotalSum.toFixed(2);
	}, [cartItems]);

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
											parseInt(event.target.value) || 0,
										)
									}
								/>
							</label>
							<label className={style.totalCost}>
								{strings.total}
								{totalCostPerItem(
									value.product,
									value.quantity,
								)}
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
			<div>
				<label className={style.orderTotal}>
					{strings.orderTotal}
					{orderTotal}
				</label>
			</div>
		</div>
	);
}

export default Checkout;
