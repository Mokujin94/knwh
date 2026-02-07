import React, {useEffect} from "react";
import Questions from "../questions/Questions";
import Applications from "../applications/Applications";
import "./faqBlock.scss";

const FaqBlock = ({ array, setForm, pagesStyle, title="FAQ" }) => {

    const setFAQItems = array.map(({ title, descr }, i) => {
		return(
            <div className="faq__item" key={i}>
                <Questions title={title} descr={descr} />
            </div>
        )
	});

    useEffect(() => {    
            const script = document.createElement("script");
            script.id = "amoforms_script_1097986";
            script.src =
                "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782321";
    
            document.body.appendChild(script);
        }, []);

    return(
        <section className={'faq ' + pagesStyle}>
            <div className="faq__wrapper container">
                <h2 className="faq__title">{title}</h2>
                <div className="faq__grid">
                    {setFAQItems}
                </div>

                <Applications
                    title="Остались вопросы?"
                    descr="Оставьте заявку и наш специалист с вами свяжется."
                    button="Оставить заявку"
                    style={"apliHome"}
                    setForm={setForm}
                />
                {/* <script id="amoforms_script_1097986" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782321"></script> */}
            </div>
        </section>
    )
}

export default FaqBlock;