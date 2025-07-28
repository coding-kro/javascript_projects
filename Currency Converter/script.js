const fromAmountElement = document.querySelector(".amount");
const convertAmountElement = document.querySelector(".convertedAmount");
const fromCurrencyElement = document.querySelector(".fromCurrency");
const toCurrencyElement = document.querySelector(".toCurrency");
const resultElement = document.querySelector(".result");
const converterContainer = document.querySelector(".converter-container");

//Array to populate the select tages with these countries
const countries = [
  { code: "AED", name: "United Arab Emirates dirham" },
  { code: "AFN", name: "Afghan afghani" },
  { code: "ALL", name: "Albanian lek" },
  { code: "AMD", name: "Armenian dram" },
  { code: "AOA", name: "Angolan kwanza" },
  { code: "ARS", name: "Argentine peso" },
  { code: "AUD", name: "Australian dollar" },
  { code: "AWG", name: "Aruban florin" },
  { code: "AZN", name: "Azerbaijan manat" },
  { code: "BAM", name: "Bosnia and Herzegovina convertible mark" },
  { code: "BBD", name: "Barbadian dollar" },
  { code: "BDT", name: "Bangladeshi taka" },
  { code: "BGN", name: "Bulgarian lev" },
  { code: "BHD", name: "Bahraini dinar" },
  { code: "BIF", name: "Burundian franc" },
  { code: "BMD", name: "Bermudian dollar" },
  { code: "BND", name: "Brunei dollar" },
  { code: "BOB", name: "Boliviano" },
  { code: "BOV", name: "Bolivian Mvdol (funds code)" },
  { code: "BRL", name: "Brazilian real" },
  { code: "BSD", name: "Bahamian dollar" },
  { code: "BTN", name: "Bhutanese ngultrum" },
  { code: "BWP", name: "Botswana pula" },
  { code: "BYN", name: "Belarusian ruble" },
  { code: "BZD", name: "Belize dollar" },
  { code: "CAD", name: "Canadian dollar" },
  { code: "CDF", name: "Congolese franc" },
  { code: "CHF", name: "Swiss franc" },
  { code: "CLF", name: "Unidad de Fomento (Chile, funds code)" },
  { code: "CLP", name: "Chilean peso" },
  { code: "CNY", name: "Chinese yuan" },
  { code: "COP", name: "Colombian peso" },
  { code: "COU", name: "Colombian Unidad de Valor Real (funds code)" },
  { code: "CRC", name: "Costa Rican colón" },
  { code: "CUP", name: "Cuban peso" },
  { code: "CVE", name: "Cabo Verde escudo" },
  { code: "CZK", name: "Czech koruna" },
  { code: "DJF", name: "Djibouti franc" },
  { code: "DKK", name: "Danish krone" },
  { code: "DOP", name: "Dominican peso" },
  { code: "DZD", name: "Algerian dinar" },
  { code: "EGP", name: "Egyptian pound" },
  { code: "ERN", name: "Eritrean nakfa" },
  { code: "ETB", name: "Ethiopian birr" },
  { code: "EUR", name: "Euro" },
  { code: "FJD", name: "Fijian dollar" },
  { code: "FKP", name: "Falkland Islands pound" },
  { code: "GBP", name: "British pound sterling" },
  { code: "GEL", name: "Georgian lari" },
  { code: "GHS", name: "Ghanaian cedi" },
  { code: "GIP", name: "Gibraltar pound" },
  { code: "GMD", name: "Gambian dalasi" },
  { code: "GNF", name: "Guinean franc" },
  { code: "GTQ", name: "Guatemalan quetzal" },
  { code: "GYD", name: "Guyanese dollar" },
  { code: "HKD", name: "Hong Kong dollar" },
  { code: "HNL", name: "Honduran lempira" },
  { code: "HRK", name: "Croatian kuna" },
  { code: "HTG", name: "Haitian gourde" },
  { code: "HUF", name: "Hungarian forint" },
  { code: "IDR", name: "Indonesian rupiah" },
  { code: "ILS", name: "Israeli new shekel" },
  { code: "INR", name: "Indian rupee" },
  { code: "IQD", name: "Iraqi dinar" },
  { code: "IRR", name: "Iranian rial" },
  { code: "ISK", name: "Icelandic króna" },
  { code: "JMD", name: "Jamaican dollar" },
  { code: "JOD", name: "Jordanian dinar" },
  { code: "JPY", name: "Japanese yen" },
  { code: "KES", name: "Kenyan shilling" },
  { code: "KGS", name: "Kyrgyzstani som" },
  { code: "KHR", name: "Cambodian riel" },
  { code: "KMF", name: "Comoro franc" },
  { code: "KPW", name: "North Korean won" },
  { code: "KRW", name: "South Korean won" },
  { code: "KWD", name: "Kuwaiti dinar" },
  { code: "KYD", name: "Cayman Islands dollar" },
  { code: "KZT", name: "Kazakhstani tenge" },
  { code: "LAK", name: "Lao kip" },
  { code: "LBP", name: "Lebanese pound" },
  { code: "LKR", name: "Sri Lankan rupee" },
  { code: "LRD", name: "Liberian dollar" },
  { code: "LSL", name: "Lesotho loti" },
  { code: "LYD", name: "Libyan dinar" },
  { code: "MAD", name: "Moroccan dirham" },
  { code: "MDL", name: "Moldovan leu" },
  { code: "MGA", name: "Malagasy ariary" },
  { code: "MKD", name: "Macedonian denar" },
  { code: "MMK", name: "Myanmar kyat" },
  { code: "MNT", name: "Mongolian tögrög" },
  { code: "MOP", name: "Macanese pataca" },
  { code: "MRU", name: "Mauritanian ouguiya" },
  { code: "MUR", name: "Mauritian rupee" },
  { code: "MVR", name: "Maldivian rufiyaa" },
  { code: "MWK", name: "Malawian kwacha" },
  { code: "MXN", name: "Mexican peso" },
  { code: "MXV", name: "Mexican Unidad de Inversion (UDI)" },
  { code: "MYR", name: "Malaysian ringgit" },
  { code: "MZN", name: "Mozambican metical" },
  { code: "NAD", name: "Namibian dollar" },
  { code: "NGN", name: "Nigerian naira" },
  { code: "NIO", name: "Nicaraguan córdoba" },
  { code: "NOK", name: "Norwegian krone" },
  { code: "NPR", name: "Nepalese rupee" },
  { code: "NZD", name: "New Zealand dollar" },
  { code: "OMR", name: "Omani rial" },
  { code: "PAB", name: "Panamanian balboa" },
  { code: "PEN", name: "Peruvian sol" },
  { code: "PGK", name: "Papua New Guinean kina" },
  { code: "PHP", name: "Philippine peso" },
  { code: "PKR", name: "Pakistani rupee" },
  { code: "PLN", name: "Polish złoty" },
  { code: "PYG", name: "Paraguayan guaraní" },
  { code: "QAR", name: "Qatari riyal" },
  { code: "RON", name: "Romanian leu" },
  { code: "RSD", name: "Serbian dinar" },
  { code: "RUB", name: "Russian ruble" },
  { code: "RWF", name: "Rwandan franc" },
  { code: "SAR", name: "Saudi riyal" },
  { code: "SBD", name: "Solomon Islands dollar" },
  { code: "SCR", name: "Seychellois rupee" },
  { code: "SDG", name: "Sudanese pound" },
  { code: "SEK", name: "Swedish krona" },
  { code: "SGD", name: "Singapore dollar" },
  { code: "SHP", name: "Saint Helena pound" },
  { code: "SLE", name: "Sierra Leonean leone" },
  { code: "SOS", name: "Somali shilling" },
  { code: "SRD", name: "Surinamese dollar" },
  { code: "SSP", name: "South Sudanese pound" },
  { code: "STN", name: "São Tomé and Príncipe dobra" },
  { code: "SVC", name: "Salvadoran colón" },
  { code: "SYP", name: "Syrian pound" },
  { code: "SZL", name: "Swazi lilangeni" },
  { code: "THB", name: "Thai baht" },
  { code: "TJS", name: "Tajikistani somoni" },
  { code: "TMT", name: "Turkmenistani manat" },
  { code: "TND", name: "Tunisian dinar" },
  { code: "TOP", name: "Tongan paʻanga" },
  { code: "TTD", name: "Trinidad and Tobago dollar" },
  { code: "TWD", name: "New Taiwan dollar" },
  { code: "TZS", name: "Tanzanian shilling" },
  { code: "UAH", name: "Ukrainian hryvnia" },
  { code: "UGX", name: "Ugandan shilling" },
  { code: "USD", name: "United States dollar" },
  { code: "USN", name: "United States dollar (next day, funds code)" },
  { code: "UYU", name: "Uruguayan peso" },
  { code: "UZS", name: "Uzbekistani som" },
  { code: "VED", name: "Venezuelan digital bolívar" },
  { code: "VES", name: "Venezuelan sovereign bolívar" },
  { code: "VND", name: "Vietnamese đồng" },
  { code: "VUV", name: "Vanuatu vatu" },
  { code: "WST", name: "Samoan tala" },
  { code: "XAF", name: "CFA franc BEAC" },
  { code: "XCD", name: "East Caribbean dollar" },
  { code: "XOF", name: "CFA franc BCEAO" },
  { code: "XPF", name: "CFP franc" },
  { code: "YER", name: "Yemeni rial" },
  { code: "ZAR", name: "South African rand" },
  { code: "ZMW", name: "Zambian kwacha" },
  { code: "ZWL", name: "Zimbabwean dollar (current)" },
];

//showing countries from array to select tag
countries.forEach((country) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");

  option1.value = option2.value = country.code;
  option1.textContent =
    option2.textContent = `${country.code} (${country.name})`;

  fromCurrencyElement.appendChild(option1);
  toCurrencyElement.appendChild(option2);

  //setting default values
  fromCurrencyElement.value = "USD";
  toCurrencyElement.value = "INR";
});

const getExchangeRate = async () => {
  const amount = parseFloat(fromAmountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;
  resultElement.textContent = "Fetching Exchange Rates....";

  try {
    //Fetch data from API
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    if (typeof conversionRate === "undefine") {
      resultElement.textContent =
        "Exchange rate data is not avaliable for selected countries!!!";
      convertAmountElement = "";
    } else {
      convertAmountElement.value = convertedAmount;
      resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }
  } catch (error) {
    converterContainer.innerHTML = `<h2>Error while fetching exchange rates!!!</h2>`;
  }
};

fromAmountElement.addEventListener("input", getExchangeRate);
fromCurrencyElement.addEventListener("change", getExchangeRate);
toCurrencyElement.addEventListener("change", getExchangeRate);
window.addEventListener("load", getExchangeRate);
