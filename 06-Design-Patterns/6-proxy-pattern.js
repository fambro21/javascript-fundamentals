// The Proxy Pattern provides a placeholder or intermediary object
// that controls access to another object. It can add extra behavior
// such as security, caching, or lazy loading before passing the
// request to the real object.

function CryptocurrencyAPI() {
  this.getValue = function (coin) {
    console.log("Calling External API...");
    switch (coin) {
      case "Bitcoin":
        return "$8,500";
      case "Litecoin":
        return "$50";
      case "Ethereum":
        return "$175";
    }
  };
}

const api = new CryptocurrencyAPI();
console.log(api.getValue("Bitcoin"));
console.log(api.getValue("Litecoin"));
console.log(api.getValue("Ethereum"));

function CryptocurrencyAPIProxy() {
  this.api = new CryptocurrencyAPI();
  this.cache = {};
  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  };
}

const proxy = new CryptocurrencyAPIProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
