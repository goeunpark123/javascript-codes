var dog = {
    name: 'dog',
    eat: function(food) {
        console.log(`${food}를 먹는다`);
    }
}

dog.eat('apple');

/* ES6 이후부터는 메소드를 정의할 때 콜론(:)과 function 키워드를 생략한 축약 표현 사용 가능 */
var dog2 = {
    name: 'dog2',
    eat(food) {
        console.log(`${food}를 먹는다`);
    }
}

dog2.eat('apple');