function luckyMoney(money, giftees) {
  if (money < 0 || money >= 100) return 2; //incorrect money input
  if (giftees < 0 || giftees >= 10) return -2; //incorrect giftees input
  if (money >= giftees * 8) return giftees; //spend the entire budget (unless there is enough budget to give everyone 8)
  if (money < giftees) return 0; // not enough money
  let b = money,
    g = giftees; // enough budget for giftees left after donating 8 as much as possible
  while (b >= 8 + (g - 1) && g > 0) {
    b -= 8;
    g--;
  }
  if (g === 1 && b === 4) return 0;
  return giftees - g;
}
