const math = {
    down: x => Math.floor(x),
    halpUp: x => Math.round(x),
    up: x => Math.ceil(x),
    abs: (x, y) => Math.abs(x - y),
};

function numberEquals(x, y) {
    return math.abs(x, y) < Number.EPSILON;
}
// Number.EPSILON; 두 숫자 사이의 가장 작은 간격
let n = numberEquals(0.1 + 0.2, 0.3);

console.log('n:::', n);
