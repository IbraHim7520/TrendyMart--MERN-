import React from 'react';
import freeDelivery from "../assets/delivery.svg"
import support from "../assets/support.svg"
import giftVoucher from "../assets/voucher.svg"
import payment from "../assets/secure.svg"
import returnProduct from "../assets/return.svg"

const Features1 = () => {
    return (
        <div className='py-16'>
            <section className="m-4 md:m-8 ">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Our Highlighted Services</h2>
		<p className="">Our highlighted features we're offering</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
			<img src={freeDelivery}></img>
			<h3 className="my-3 text-3xl font-semibold">Free Delivery</h3>
			<div className="space-y-1 leading-tight">
				<p>Free Delivery on first order and after all orders above 100$</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<img src={support}></img>
			<h3 className="my-3 text-3xl font-semibold">24/7 Coustomer Support</h3>
			<div className="space-y-1 leading-tight">
				<p>We're always here to support you and make your shopping easier</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<img src={giftVoucher}></img>
			<h3 className="my-3 text-3xl font-semibold">Gift & Vouchers</h3>
			<div className="space-y-1 leading-tight">
				<p>Free Cupon code, Vouchers, Gift and many more</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<img src={payment}></img>
			<h3 className="my-3 text-3xl font-semibold">Secure Payment</h3>
			<div className="space-y-1 leading-tight">
				<p>Secure Payment methode for online payment</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<img src={returnProduct}></img>
			<h3 className="my-3 text-3xl font-semibold">Return</h3>
			<div className="space-y-1 leading-tight">
				<p>Return broken or irrelevent product within 7 days</p>
			</div>
		</div>
	</div>

</section>
        </div>
    );
};

export default Features1;