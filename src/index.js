import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import CurrencyExchanger from "./currency-exchange.js";

$(document).ready(function () {
  $("#rate").click(function (e) {
    e.preventDefault();
    const homeCurrency = $("#currency").val();
    const amount = $("#amount").val();
    CurrencyExchanger.getRate(homeCurrency, amount).then(function (newResponse) {
      showExchangeAmount(newResponse, amount);
    });
  });
});
function showExchangeAmount(response, amount) {
  if (response.result === "success") {
    $("#showCurrency").text(
      `You can purchase for ${amount} USD - ${parseFloat(
        response.conversion_result
      ).toFixed(2)} ${response.target_code}`
    );
  } else {
    $(".showErrors").text(`${CurrencyExchanger.error}`);
  }
}