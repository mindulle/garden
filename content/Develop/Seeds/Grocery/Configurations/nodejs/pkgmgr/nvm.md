---
last-modified: "2022-11-18"
---
```toc
style: bullet
```
# install nvm in liunx
## install
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

## Troubleshooting
- if you get `nvm: command not found`
- restart your terminal, then run following commands for the different shells on command line:
_bash_ : `source ~/.bashrc`
_zsh_ : `source ~/.zshrc`
_ksh_ : `. ~/.profile`

# version
## check current version
```shell
nvm --version
```

## set default version
```shell
nvm alias default VERSION_NUM
```

# install npm
## specific version
```shell
nvm install VERSION_NUM
```
## LTS version
```shell
nvm install --lts
```

# use
## specific version
```shell
nvm use VERSION_NUM
```

## LTS version
```shell
nvm use --lts
```

# list
```shell
nvm ls
```