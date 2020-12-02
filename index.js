function toFixed(n) {
  return parseFloat(n.toFixed(3))
}

function randomRangeStep(min, max, step) {
  var delta,
      range,
      rand;
  if (arguments.length < 2) {
      max = min;
      min = 0;
  }
  if (!step) {
      step = 1;
  }
  delta = max - min;
  range = delta / step;
  rand = Math.random();
  rand *= range;
  rand = Math.floor(rand);
  rand *= step;
  rand += min;
  return toFixed(rand)
}


function randomOverage(min, max, step, n) {
  let summ = 0

  for (let i = 0; i < n; i++) {
    summ += randomRangeStep(min, max, step)
  }

  return toFixed(summ / n)
}


const t = 300 // с
const T = 300 // k
const p = 10e4 // Па
const k = 1.38e-27 // Дж/к
const d = 0.01 // метр
const h = 0.1 // метр
const q_e = 1.6e-18

const result = {}

const V = (Math.PI * (d ** 2) / 4) * h
const N = (p * V) / (k * T)
const n = N / V
const I = randomOverage(0.35, 0.5, 0.05, 10)
const n_ion = 2 * N


result.p =  n * k * T

const q_e_abs = Math.abs(I * t / n_ion)

const delta_q_e = Math.abs(q_e_abs - q_e)
const epsilon_q_e = delta_q_e / Math.abs(q_e)

console.log({
  t,
  T,
  p,
  k,
  d,
  h,
  q_e,
  result,
  V,
  N,
  n,
  I,
  n_ion,
  q_e_abs,
  delta_q_e,
  epsilon_q_e
})