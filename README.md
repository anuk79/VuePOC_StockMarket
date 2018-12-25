# Vue JS Final Assignment - Stock Trader
## Landing page
![Alt text](/PicsForReadme/LandingPage.png?raw=true)

### Stocks: 
Navigate to /stocks to buy stocks.
![Alt text](/PicsForReadme/Stocks.png?raw=true)

### Portfolio: 
Navigate to /portfolio to see total investments
![Alt text](/PicsForReadme/Portfolio.png?raw=true)

### Save & Load options:
1. Click on Save option from Save & Load dropdown to save your taded values to database. Hence, these details will persist after page reload too.
2. Click on Load option from Save & Load dropdown to undo all changes after last successful save and reload the data.
![Alt text](/PicsForReadme/SaveAndLoad.png?raw=true)

### End Day: 
Click End day to get new prices of stocks. You need to Save again for these changes to get reflected in database.


## Validations:
1. Show error when trying to buy stocks whose total cost exceeds available funds:
![Alt text](/PicsForReadme/BuyStocksError.png?raw=true)

2. Show error when trying to sell more number of stocks than in portfolio
![Alt text](/PicsForReadme/SellStocksError.png?raw=true)

3. Does not allow save if available funds become negative after End Day operations.
![Alt text](/PicsForReadme/SaveValidation.png?raw=true)


Note: Used firebase to create api urls for the above assignment.


# vue-cli

> This is a Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
