let pants = {
    productName: "바지",
    color: '검정색',
    price: 3000,
    getInfo() {
        console.log(this.productName, '...');
    }
};

// let productName = pants.productName;
// let color = pants.color;
// let price = pants.price;

// let {productName, color, price} = pants;
let {price, color, productName} = pants;

console.log(productName, color, price);

console.log(getInfo);
getInfo();

// 객체 구조분해 할당으로 꺼낸 변수 대신 다른 것 쓰고 싶다면
let {color: co, price: pr, productName: pn} = pants;
console.log(co, pr, pn);
