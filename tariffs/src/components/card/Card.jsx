// импортируем классы 
import "./Card.css";

// создаем функциональный компонент, передаем ему пропсы, он возвращает верстку карточек + условия для выбора класса 
function Card({ id, name, price, speed, info, onClick, isActive }) {
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

    if (isActive) {
        cardClass += "active-card"; // добавила класс, чтобы выделять выбранную карточку (но что-то я не могу этим классом управлять, с классами сложно в этом задании почему-то, но выделенная карточка меняется и славно)
    }

    return (
        <div id={id} className={cardClass} onClick={onClick}>
            <p className="card-name">{name}</p>
            <p className="card-price"> руб {price} /мес </p>
            <p className="card-text">{speed}</p>
            <p className="card-text">{info}</p>
        </div>
    );
}

// экспортируем компонент
export default Card;