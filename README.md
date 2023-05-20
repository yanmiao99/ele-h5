### Vue3 项目创建

```
npm init vue
```

### husky 安装

```
npx husky-init && npm install
```

1. 注意点 : 必须先初始化 git 

### commitlint 安装

```
npm install --save-dev @commitlint/{config-conventional,cli}





```

#### 运行 一下命令, 进行commitlint 的文件创建

```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

#### 添加 hooks

```
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```
