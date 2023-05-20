### Vue3 项目创建

```
npm init vue
```

### husky 安装

#### 作用

> Husky 是一个 Git Hook 工具，它的作用是在 Git 执行特定命令时触发预定义的脚本。通过 Husky 可以在代码提交前或者推送前执行相关的操作，例如代码格式化、语法检查、单元测试等，以保证代码质量和规范性。

#### 安装指令

```
npx husky-init && npm install
```

1. 注意点 : 必须先初始化 git 

### commitlint 安装

#### 作用 

> commitlint 是一个用于规范化提交信息的工具，它的作用是强制规范团队成员在 Git 提交时的信息格式，使得提交记录更加清晰、易读以及易于追踪。通过 commitlint 可以协调各个成员之间的提交记录，并在团队合作中提高开发效率和代码质量。

#### 安装指令

```
npm install --save-dev @commitlint/{config-conventional,cli}
```

1. 地址 :  [conventional-changelog/commitlint: 📓 Lint commit messages (github.com)](https://github.com/conventional-changelog/commitlint)

#### commitlint 的规范文件创建

```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

#### 添加 hooks

```
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

### 安装 eslint 和 prettier 

#### 作用 : 

> ESlint 偏向于把控项目的代码质量,而Perttier 更偏向于统一项目的编码风格

#### 安装指令

```
略过 , 因为在 npm init vue 的时候, 项目就可以进行 eslint 和 perttier 的配置
```

#### 配置项

prettier配置项

```json
// .prettierrc.json

// prettier 配置文件，用于设置代码格式化风格
{
  "$schema": "https://json.schemastore.org/prettierrc",    // 指定 JSON Schema 验证格式规范
  "semi": false,                                           // 是否在语句末尾添加分号
  "tabWidth": 2,                                           // 指定 Tab 键的宽度
  "singleQuote": true,                                     // 是否使用单引号
  "printWidth": 100,                                       // 一行最大字符数
  "trailingComma": "none",                                 // 对象或数组最后一个元素后是否添加逗号
  "bracketSpacing": true																	 // 对象左右两侧都需要空格
}
```



