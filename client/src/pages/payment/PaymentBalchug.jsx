import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Footer from "../../components/footer/Footer";

import './payment.scss';

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}

function Payment () {
    return (
        <>
            <section className="payment-page">
                <div className="container">
                    <h1>Payment Balchug</h1>

                    <link rel="stylesheet" href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css?v=1.27.0" />
                    <form class="yoomoney-payment-form" action="https://yookassa.ru/integration/simplepay/payment" method="post" accept-charset="utf-8" >
                        <div class="ym-products ym-display-none">
                            <div class="ym-block-title ym-products-title">Товары</div>

                            <div class="ym-product">
                                <div class="ym-product-line">
                                    <span class="ym-product-description">
                                        <span class="ym-product-count">1×</span>Услуги</span>
                                    <span class="ym-product-price" data-price="0.0" data-id="686" data-count="1">0,00&nbsp;₽</span>
                                </div>
                                
                                <input disabled="" type="hidden" name="text" value="Услуги" />
                                <input disabled="" type="hidden" name="price" value="0.0" />
                                <input disabled="" type="hidden" name="quantity" value="1" />
                                <input disabled="" type="hidden" name="paymentSubjectType" value="service" />
                                <input disabled="" type="hidden" name="paymentMethodType" value="full_payment" />
                                <input disabled="" type="hidden" name="tax" value="4" />
                            </div>
                        </div>
                        <input value="" type="hidden" name="ym_merchant_receipt" />

                        <div class="ym-customer-info">
                            <div class="ym-block-title">О покупателе</div>
                            <input name="cps_email" class="ym-input" placeholder="Email" type="text" value="" />
                        </div>

                        <div class="ym-hidden-inputs">
                            <input name="taxSystem" type="hidden" value="1" />
                        </div>

                        <input name="customerNumber" type="hidden" value="Оплата услуги" />
                        <input name="sumEqualPrice" type="hidden" value="true" />

                        <div class="ym-payment-btn-block ym-before-line ym-align-space-between">
                            <div class="ym-input-icon-rub">
                                <input name="sum" placeholder="0.00" class="ym-input ym-sum-input ym-required-input" type="number" step="any" />
                            </div>
                            <button data-text="Оплатить" class="ym-btn-pay ym-result-price">
                                <span class="ym-text-crop">Оплатить</span> 
                                <span class="ym-price-output"></span>
                            </button>
                            <img src="https://yookassa.ru/integration/simplepay/img/iokassa-gray.svg?v=1.27.0" class="ym-logo" width="114" height="27" alt="ЮKassa" />
                        </div>

                        <input name="shopId" type="hidden" value="330285" />
                    </form>
                    {AddLibrary("https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js?v=1.27.0")}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Payment;