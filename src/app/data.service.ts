export class ItemsService{
  Items: {
    name: string,
    desc: string,
    price: number,
    url: string}[] = [
      {name: 'Iphone X', desc:'Brand new Iphone X', price: 750,
      url:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009748cv11d.jpg'},

      {name: 'Iphone 7', desc:'Brand new Iphone 7', price: 599,
      url:'https://i0.wp.com/technewsground.com/wp-content/uploads/2017/03/iphone-7-productred.jpg'},

      {name: 'LG Curved Screen', desc:'TV Screen 65 Inch', price: 999,
      url:'http://4k.com/wp-content/uploads/2016/02/LG-65EC9700-lined-up.jpg'},
      {name: 'Samsung Galaxy', desc:'Android Phone Brand new', price: 369,
      url:'https://staticshop.o2.co.uk/product/images/samsung_galaxy_s8_64gb_midnight_black_front_sku_header.png'},
      {name: 'LG Android Phone', desc:'Android Phone Used', price: 290,
      url:'http://www.lg.com/us/images/cell-phones/md05820850/G6-350.jpg'},
      {name: 'XBox One', desc:'Video Game console', price: 59,
      url:'https://compass-ssl.xbox.com/assets/e7/d4/e7d46aea-90d0-4bf1-9544-cc85d59f6d18.jpg?n=Xbox-Family_Home-Hero-0_FY-18-X1X-Lead_1067x667_02.jpg'},
      {name: 'Play Station 4', desc:'USED PS4 with controllers', price: 89,
      url:'https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16'},
      {name: 'Nexus 6p', desc:'Google Nexus phone', price: 1200,
      url:'https://images-na.ssl-images-amazon.com/images/I/618wu1gJaQL._SX425_.jpg'},
      {name: 'Pixel 2', desc:'Best Android phone 2018', price: 186,
      url:'https://cdn.wccftech.com/wp-content/uploads/2017/12/Google-Pixel-2-and-Pixel-2-XL.png'},
      {name: 'Samsung curved LCD screen', desc:'TV Screen 65 Inch', price: 2400,
      url:'https://i.ytimg.com/vi/2q_2GjEyvNY/maxresdefault.jpg'}
    ]

  getAllItems(){
    return this.Items;
  }
  cart = [];
  pushToCart(item){
    this.cart.push(item);
  }
  getCart() {
    return this.cart;
  }
  getTotalCost(){
    let total = 0;
    for(let item of this.cart){
      total += item.price;
    }
    return total;

  }

}
