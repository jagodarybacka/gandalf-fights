export default function getWinnerName(gandalfHp, sauronHp) {
  if (gandalfHp === 0 && sauronHp === 0) {
    return 'Draw';
  }
  if (gandalfHp === 0) {
    return 'Sauron wins';
  }
  if (sauronHp === 0) {
    return 'Gandalf wins';
  }
}
