// импортируем необходимые модули

import { useState } from 'react'
// useState из React для управления состоянием приложения

import Card from './components/card/Card.jsx'
import Button from './components/card/Button.jsx'
// Компоненты Card и Button из соответствующих файлов, стили для каждого из них уже импортированы в компоненты

import './App.css'
// Стили из файла App.css, но я их почти все закомментировала, чтобы они не сбивали мне стили для компонентов

import { tariffs } from './tariffs.js'
// Массив tariffs из файла tariffs.js, на основе данных из этого массива создаются карточки



function App() {
  const [activeCardId, setActiveCardId] = useState(null);
  // определяем состояние activeCardId с помощью хука useState, первоначально это состояние равно null, что означает, что ни одна карточка не выбрана. Хук useState имеет 2 переменных, одна из которых - название состояния (activeCardId в данном случае), а вторая - функция, которая меняет это состояние (setActiveCardId в данном случае)
  const handleCardClick = (id) => {
    setActiveCardId(id);
  };
  // также определяем функцию handleCardClick, которая будет вызываться при клике на карточку. Эта функция обновляет состояние activeCardId новым значением id, которое передается в функцию.
  return (
    <main>
      <div className="card-container">
        {tariffs.map((card) => (
          // используем метод map для отображения списка карточек из массива tariffs. Каждая карточка имеет следующие пропсы:
          <Card
            key={card.id}
            // key - уникальный идентификатор карточки

            name={card.name}
            price={card.price}
            speed={card.speed}
            info={card.info}
            // name, price, speed, info - свойства карточки

            onClick={() => handleCardClick(card.id)}
            // вот тут вызывается функция handleCardClick.

            isActive={activeCardId === card.id}
          // isActive - флаг (это пропс из компонента card), который будет true, если карточка является активной (то есть ее id совпадает с activeCardId).
          // Когда мы кликаем на карточку, функция handleCardClick обновляет состояние activeCardId новым значением id, которое передается в функцию. Затем, когда мы рендерим список карточек, мы проверяем, является ли activeCardId равным id текущей карточки, и если да, то мы устанавливаем isActive в true.
          //  isActive не является зарезервированным словом, это общепринятая конвенция в React использовать isActive или active для указания, находится ли компонент в активном или выбранном состоянии. 
          />
        ))}
      </div>
      <Button active={activeCardId ? true : false} />
      {/* вот тут происходит то, о чем я писала в компоненте button - значение определяется тернарным оператором: пропс active будет true, если activeCardId не является null (то есть выбрана какая-либо из карточек), и false, если activeCardId === null (то есть карточка не выбрана). */}
    </main>
  );
}

export default App
