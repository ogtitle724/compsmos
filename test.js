function solution(coin, cards) {
  const n = cards.length;
  let myCards = new Set(cards.slice(0, n / 3));
  let left = cards.slice(n / 3).reverse();
  let memo = {};

  return game(n, left, myCards, coin, 0, memo);
}

function game(n, cards, myCards, coin, round, memo) {
  if (!cards.length) return round;

  const memoKey =
    cards.join(",") + "|" + Array.from(myCards).join(",") + "|" + coin;
  if (memo[memoKey] !== undefined) return memo[memoKey];

  let maxRound = round;
  round++;

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      let newMyCards = new Set(myCards);
      let newCoin = coin;
      let card1 = cards[i];
      let card2 = cards[j];

      if (!newMyCards.has(card1)) newCoin--;
      if (!newMyCards.has(card2)) newCoin--;

      if (newCoin >= 0) {
        newMyCards.delete(card1);
        newMyCards.delete(card2);
        let newLeft = cards.filter((_, idx) => idx !== i && idx !== j);
        maxRound = Math.max(
          maxRound,
          game(n, newLeft, newMyCards, newCoin, round, memo)
        );
      }
    }
  }

  memo[memoKey] = maxRound;
  return maxRound;
}

// 예제 입력 및 출력
console.log(solution(4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]));
