// 전달 받은 값을 1 증가시켜 반환
function increase(value) {
    return value + 1;
}

// 전달 받은 값을 1 감소시켜 반환
function decrease(value) {
    return value - 1;
}

// 전달 받은 함수에 전달 받은 값을 적용시켜주는 고차 함수(전달 받은 함수를 활용하는 함수)
function apply(func, value) {
    return func(value);
}

console.log(apply(increase, 5));
console.log(apply(decrease, 5));

/* 배열의 정렬을 다룰 때의 예시 */
console.log([3, 2, 1, 5, 4].sort(function(left, right) {return right - left}));

/* 비동기 처리(이벤트, 타이머, ajax, fetch, ...)에 활용되는 중요한 패턴 */