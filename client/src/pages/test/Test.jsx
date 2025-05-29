import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Footer from "../../components/footer/Footer";

import './test.scss';

function AddScript() {
    return (
      <>
        {/* <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js?v=1.23.0"></script> */}
        <script>console.log('aa')</script>
      </>
    );
  }

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}

function Test () {

    return (
        <>
            <section className="test-page">
                <div className="container">
                    <h2>Тестовая страница</h2>

                    {/* <link rel="stylesheet" href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css?v=1.23.0" />
                    <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js?v=1.23.0"></script>
                    <form class="yoomoney-payment-form" action="https://yookassa.ru/integration/simplepay/payment" method="post" accept-charset="utf-8" >
                        <div class="ym-payment-btn-block ym-align-space-between">
                            <div class="ym-input-icon-rub">
                                <input name="sum" placeholder="0.00" class="ym-input ym-sum-input ym-required-input" type="number" step="any" />
                            </div>
                            <button data-text="Заплатить" class="ym-btn-pay ym-result-price">
                                <span class="ym-text-crop">Заплатить</span> 
                                <span class="ym-price-output"></span>
                            </button>
                            <img src="https://yookassa.ru/integration/simplepay/img/iokassa-gray.svg?v=1.23.0" class="ym-logo" width="114" height="27" alt="ЮKassa" />
                        </div>
                        <input name="shopId" type="hidden" value="330285" />
                    </form> */}

                    <link rel="stylesheet" href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css?v=1.23.0" />
                    <form class="yoomoney-payment-form" action="https://yookassa.ru/integration/simplepay/payment" method="post" accept-charset="utf-8" >

                        <div class="ym-products">
                            <div class="ym-block-title ym-products-title">Товары</div>

                            <div class="ym-product">
                                <div class="ym-product-line">
                                    <span class="ym-product-description">День</span>
                                    <span class="ym-product-price" data-price="1590" data-id="440" data-count="1">1&nbsp;590,00&nbsp;₽</span>
                                </div>
                                <div class="ym-product-line ym-align-items-center">
                                    <span class="ym-label-text">Количество</span>
                                    <div class="ym-count-input">
                                        <input class="ym-input" value="1.00" type="number" step="any" />
                                        <span class="ym-count-control ym-count-plus"></span>
                                        <span class="ym-count-control ym-count-minus"></span>
                                    </div>
                                </div>

                                <input disabled="" type="hidden" name="text" value="День" />
                                <input disabled="" type="hidden" name="price" value="1590" />
                                <input disabled="" type="hidden" name="quantity" value="1" />
                                <input disabled="" type="hidden" name="paymentSubjectType" value="commodity" />
                                <input disabled="" type="hidden" name="paymentMethodType" value="full_payment" />
                                <input disabled="" type="hidden" name="tax" value="4" />
                            </div>
                            <div class="ym-product">
                                <div class="ym-product-line">
                                    <span class="ym-product-description">Гость-неделя</span>
                                    <span class="ym-product-price" data-price="9900" data-id="306" data-count="1">9&nbsp;900,00&nbsp;₽</span>
                                </div>
                                <div class="ym-product-line ym-align-items-center">
                                    <span class="ym-label-text">Количество</span>
                                    <div class="ym-count-input">
                                        <input class="ym-input" value="1.00" type="number" step="any" />
                                        <span class="ym-count-control ym-count-plus"></span>
                                        <span class="ym-count-control ym-count-minus"></span>
                                    </div>
                                </div>
                                <input disabled="" type="hidden" name="text" value="Гость-неделя" />
                                <input disabled="" type="hidden" name="price" value="9900" />
                                <input disabled="" type="hidden" name="quantity" value="1" />
                                <input disabled="" type="hidden" name="paymentSubjectType" value="commodity" />
                                <input disabled="" type="hidden" name="paymentMethodType" value="full_payment" />
                                <input disabled="" type="hidden" name="tax" value="4" />
                            </div>
                        </div>
                        <input value="" type="hidden" name="ym_merchant_receipt" />

                        <div class="ym-customer-info">
                            <div class="ym-block-title">О покупателе</div>
                            <input class="ym-input" name="email" placeholder="Телефон или Email для чека" type="text" />    
                        </div>

                        <div class="ym-hidden-inputs">
                        <input name="taxSystem" type="hidden" value="1" />
                        </div>

                        <div class="ym-payment-btn-block ym-before-line ym-align-space-between">
                            <div class="ym-input-icon-rub ym-display-none">
                                <input name="sum" placeholder="0.00" class="ym-input ym-sum-input ym-required-input" type="number" step="any" value="11490" />
                            </div>
                            <button data-text="Заплатить" class="ym-btn-pay ym-result-price">
                                <span class="ym-text-crop">Заплатить</span> 
                                <span class="ym-price-output">11&nbsp;490,00&nbsp;₽</span>
                            </button>
                            <img src="https://yookassa.ru/integration/simplepay/img/iokassa-gray.svg?v=1.23.0" class="ym-logo" width="114" height="27" alt="ЮKassa" />
                        </div>

                        <input name="shopId" type="hidden" value="330285" />
                    </form>
                    {AddLibrary("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js")}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Test;