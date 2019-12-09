"use string"

const goods = [
  { title: 'Шорты', price: 350 },
  { title: 'Носки', price: 150 },
  { title: 'Куртка', price: 5150 },
  { title: 'Ботинок Левый', price: 70.5 },
  { title: 'Рваный Кед', price: 11150 },
  { title: 'Трусы в горошек', price: 0.15 },
  { title: 'Шапка летняя', price: 450 },
  { title: 'Шнурки', price: 2 },
  { title: 'Штаны красные', price: 850 },
  { title: 'Поло', price: 1150 },
];

const renderGoodsItem = (title = 'без имени', price = '') => {
    return `<div class="goods-list__item">
              <div class="item-img"></div>
              <div class="item-dscr">
                <div class="item-name">${title}</div>
                <div class="space"></div>
                <div class="item-price">${price}</div>
              </div>
              <button class="item-btn">Добавить</button>
            </div>`
};

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);
