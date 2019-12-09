//const goods = [
//  { title: 'Шорты', price: 350 },
//  { title: 'Носки', price: 150 },
//  { title: 'Куртка', price: 5150 },
//  { title: 'Ботинок Левый', price: 70.5 },
//  { title: 'Рваный Кед', price: 11150 },
//  { title: 'Трусы в горошек', price: 0.15 },
//  { title: 'Шапка летняя', price: 450 },
//  { title: 'Шнурки', price: 2 },
//  { title: 'Штаны красные', price: 850 },
//  { title: 'Поло', price: 1150 },
//];
//
//const renderGoodsItem = (title = 'без имени', price = '') => {
//    return `<div class="goods-list__item">
//              <div class="item-img"></div>
//              <div class="item-dscr">
//                <div class="item-name">${this.title}</div>
//                <div class="space"></div>
//                <div class="item-price">${this.price} ₽</div>
//              </div>
//              <button class="item-btn">Добавить</button>
//            </div>`
//};
//
//const renderGoodsList = (list) => {
//    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//    document.querySelector('.goods-list').innerHTML = goodsList.join('');
//};
//
//renderGoodsList(goods);

class GoodsItem {
    constructor(title = 'Без имени', price = 0) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-list__item">
                <div class="item-img"></div>
                <div class="item-dscr">
                <div class="item-name">${this.title}</div>
                <div class="space"></div>
                  <div class="item-price">${this.price}&nbsp;₽</div>
                </div>
                <button class="item-btn">Добавить</button>
              </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
  
    fetchGoods()  {
        this.goods = [
        { title: 'Шорты', price: 350 },
        { title: 'Носки', price: 150 },
        { title: 'Куртка', price: 5150 },
        { title: 'Ботинок Левый', price: 70 },
        { title: 'Рваный Кед', price: 11150 },
        { title: 'Трусы в горошек', price: 0},
        { title: 'Шапка летняя', price: 450 },
        { title: 'Шнурки', price: 2 },
        { title: 'Штаны красные', price: 850 },
        { price: 1150 },
      ];
      
      Array.prototype.sum = function (prop) {
        var total = 0
        for ( var i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop]
            }
        return total
        };
      console.log(this.goods.sum("price"));
    }
  
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();





