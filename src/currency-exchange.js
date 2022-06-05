export default class CurrencyExchanger {
  static async getRate(homeCurrency, amount) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${homeCurrency}/${amount}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return Error(error);
    }
  }
}