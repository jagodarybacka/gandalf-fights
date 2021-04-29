export default function keepInRange(number, min, max) {
  return Math.min(Math.max(number, min), max);
}
