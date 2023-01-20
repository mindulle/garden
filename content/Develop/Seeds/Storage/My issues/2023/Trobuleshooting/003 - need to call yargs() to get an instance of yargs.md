
> [!error] Beacause yargs is so old project...
> There are some legacy code which make you confused.
> See this [issue](https://github.com/yargs/yargs/issues/1854#issuecomment-787509517).
- For further examples, see examples on official github repo.
- [Simple example](https://github.com/yargs/yargs#simple-example)
	- `hideBin` is a shorthand for [`process.argv.slice(2)`](https://nodejs.org/docs/latest/api/process.html#processargv). It has the benefit that it takes into account variations in some environments, e, g., [Electron](https://github.com/electron/electron/issues/4690)
- [Complex example](https://github.com/yargs/yargs#complex-example)