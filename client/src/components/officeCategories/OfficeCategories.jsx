
import { useState } from "react";
import "./officeCategories.scss";

const OfficeCategories = ({ categories }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const categoriesCardsDesk =  categories.map((item, i) => {
        return(
            <a className="category-card" href={item.path} key={i}>
                <img className="category-card__img"  src={item.img} alt={item.title}/>
                <div className="category-card__text-block">
                    <h3 className="category-card__title">{item.title}</h3>
                    <p className="category-card__descr">{item.descr}</p>
                </div>
            </a>
        );
    });

    const categoriesCardsMob =  categories.map((item, i) => {
        return(
            <div className={i == activeSlide ? "category-card category-card_active" : "category-card"} href={item.path} key={i}>
                <img className="category-card__img"  src={item.img} alt={item.title}/>
                <div className="category-card__text-block">
                    <a className="category-card__title">{item.title}</a>
                    <p className="category-card__descr">{item.descr}</p>
                </div>
            </div>
        );
    });

    const changeSlide = () => {
        if(activeSlide == categories.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
    }

    return(
        <section className="categories">
            <div className="categories__wrapper container">
                <p className="categories__text">
                    KNOW WHERE — это сеть премиальных гибких офисных пространств в самом сердце столицы, 
                    куда входят локации BLACK, BALCHUG и SIMONOV, которые оборудованы рабочими местами в формате 
                    open space, а также переговорными комнатами.
                </p>
                <div className="categories__grid">{categoriesCardsDesk}</div>
                <div className="categories__slider">
                    <div className="categories__slider-inner" onClick={changeSlide}>{categoriesCardsMob}</div>
                    <div className="categories__pagination">
                        <div className="categories__pagination-runner" style={{ width: `${100 / categories.length * (activeSlide + 1)}%`}}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeCategories;