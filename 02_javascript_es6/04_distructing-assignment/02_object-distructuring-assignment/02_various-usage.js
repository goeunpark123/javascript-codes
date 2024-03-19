let shirts = {
    productName: '셔츠'
};

let {productName: productName2 = '상품', color: color2 = '색상', price: price2 = 0} = shirts;

console.log('productName2: ', productName2); 
console.log('color2: ', color2);
console.log('price2: ', price2);

// 프로퍼티가 많은 객체에서 원하는 정보만 추출하는 경우
let pants = {
    productName: '팬츠',
    color: '검정색',
    price: 25000
};

// rest parameter(...)로 나머지 요소를 한 번에 가져올 수도 있다.(새로운 객체가 나머지 프로퍼티를 지님)
let {productName, ...r} = pants;

console.log(`productName: ${productName}`);
console.log(`rest: ${r}`);
console.log(r);

console.log(`color: ${r.color}`);
console.log(`price: ${r.price}`);

