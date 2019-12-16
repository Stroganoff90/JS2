const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url, callback) {
  return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest(); 

      xhr.open('GET', url);

      if (window.XMLHttpRequest) {
          const xhr = new window.XMLHttpRequest();
          resolve(xhr);
      } else {
          const xhr = new  window.ActiveXObject('Microsoft.XMLHTTP');
          reject(xhr);
      }

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              const body = JSON.parse(xhr.responseText);
              callback(body);
          }
      };

      xhr.onerror = function() {
        reject(new Error("АШЫПКА"));
      };
      
      xhr.send();
  });  
}


class GoodsItem {
    constructor(product_name = 'Без имени', price = 0) {
        this.title = product_name;
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
  
    fetchGoods(cb)  {
      makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
          this.goods = goods;
          cb();
      });
    }
    // на случай крашнутого джейсона
    
  //   fetchGoods()  {
  //       this.goods = [
  //       { title: 'Шорты', price: 350 },
  //       { title: 'Носки', price: 150 },
  //       { title: 'Куртка', price: 5150 },
  //       { title: 'Ботинок Левый', price: 70 },
  //       { title: 'Рваный Кед', price: 11150 },
  //       { title: 'Трусы в горошек', price: 0},
  //       { title: 'Шапка летняя', price: 450 },
  //       { title: 'Шнурки', price: 2 },
  //       { title: 'Штаны красные', price: 850 },
  //       { price: 1150 },
  //     ];
  // }
      
    totalPrice() {
      return this.goods.reduce((accum, item) => {
          if (item.price) accum += item.price;
          return accum;
      }, 0);
    }
  
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}
  
class Cart extends GoodsList {
  constructor(props) {
    super(props);
  }
  clean() {}
  incGood() {}
  decGood() {}
}

class CartItem extends GoodsItem {
  constructor(props) {
    super(props);
  }
  delete() {}
}

const list = new GoodsList();
list.fetchGoods( function() {
    list.render();
});