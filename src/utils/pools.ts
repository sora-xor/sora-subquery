// getters & setter for flag, should we sync poolXYK reserves
// and then calc asset prices
export const PoolsPrices = {
  flag: true,
  get() {
      return this.flag;
  },
  set(flag: boolean) {
      this.flag = flag;
  },
};