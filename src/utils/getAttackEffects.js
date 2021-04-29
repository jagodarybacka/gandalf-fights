import { WINS_CHART, ATTACK_POINTS } from 'consts';

export default function getAttackEffects(gandalfAttack, sauronAttack) {
  const gandalfWins = WINS_CHART[gandalfAttack].includes(sauronAttack);

  return {
    gandalf: (gandalfWins ? 1 : -1) * ATTACK_POINTS[sauronAttack],
    sauron: (gandalfWins ? -1 : 1) * ATTACK_POINTS[gandalfAttack]
  };
}
