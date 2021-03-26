

# Getting Started

## Screenshot
![alt text](https://user-images.githubusercontent.com/16896205/58815886-72717d00-85f6-11e9-9829-fd02d94e08be.png)


## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)

Based on
* https://github.com/Foxandxss/angular-webpack-workflow

* http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
