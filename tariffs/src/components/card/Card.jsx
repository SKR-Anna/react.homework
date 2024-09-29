// импортируем классы 
import "./Card.css";

// создаем функциональный компонент, передаем ему пропсы, он возвращает верстку карточек + условия для выбора класса 
function Card({ id, name, price, speed, info }) {
    let cardClass = "card-container card-content card-name card-prise card-text p";
    if (price == 300) {
        cardClass += " first-card-name first-card-content";
    } else if (price == 450) {
        cardClass += " second-card-name second-card-content";
    } else if (price == 550) {
        cardClass += " third-card-name third-card-content";
    } else {
        cardClass += " fourth-card-name fourth-card-content";
    }

    return (
        <div id={id} className={cardClass}>
            <p className="card-name">{name}</p>
            <p className="card-price"> руб {price} /мес </p>
            <p className="card-text">{speed}</p>
            <p className="card-text">{info}</p>
        </div>
    );
};

//     return (
//         <main className="card-container">
//             <div id={id} className="card-content">
//                 <p className="card-name">{name}</p>
//                 <p className="card-price">{price}</p>
//                 <p className="card-text">{speed}</p>
//                 <p className="card-text">{info}</p>
//             </div>
//         </main>
//     );
// };

// экспортируем компонент
export default Card;