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

### 安装vant 和 unplugin-auto-import 和 unplugin-vue-components

#### vant

##### 作用

> 第三方组件库

##### 安装指令

```
npm i vant
```

##### 文档

[介绍 - Vant 4 (gitee.io)](http://vant-contrib.gitee.io/vant/#/zh-CN/home)

#### unplugin-auto-import

##### 作用

>unplugin-auto-import 是一款用于 Vue 3 项目中的插件，它在编写 Vue 组件时可以自动地导入所需的代码模块或类库。
>
>具体来说，当我们在编写 Vue 组件时，unplugin-auto-import 可以自动检测我们所需要引入的模块，然后根据相关配置，在需要时自动地导入相应的代码模块或类库。这样，我们就不必手动添加 import 语句，大大缩短了我们的开发时间，并且减少了出错的可能性。
>
>unplugin-auto-import 的优点在于它是一个基于 Vite 和 Rollup 的轻量级解决方案，可以与现有的构建工具和开发流程无缝集成。同时，它还支持按需加载，可以减小项目的打包体积，提高页面加载速度。
>
>总之，unplugin-auto-import 插件可以帮助我们更加高效地编写 Vue 组件，让我们专注于业务逻辑的实现，而不是纠结于 import 语句的添加。

##### 安装指令

```
npm install -D unplugin-auto-import
```



#### unplugin-vue-components

##### 作用

> unplugin-vue-components 是一款用于 Vue 3 项目中的插件，它可以自动地将第三方 UI 组件库的代码模块注册为 Vue 组件，从而大大简化了我们在 Vue 项目中使用 UI 组件库的流程。
>
> 具体来说，当我们在编写 Vue 组件时，如果需要使用一个第三方的 UI 组件库，通常需要手动地引入组件并将其注册为 Vue 组件。但是，借助 unplugin-vue-components 插件，我们可以通过简单的配置，自动地将第三方组件库的组件注册为 Vue 组件，然后在组件中直接使用它们，不需要额外的引入和注册步骤。
>
> unplugin-vue-components 的优点在于它支持多种主流的 UI 组件库，并且可以按需注册组件，减小项目的打包体积，提高页面加载速度。此外，它还提供了一些高级功能，如自定义组件名、按需导入、忽略部分组件等，可以根据项目的实际需求进行灵活配置。
>
> 总之，unplugin-vue-components 插件可以帮助我们更加高效地使用第三方 UI 组件库，让我们专注于业务逻辑的实现，而不是纠结于组件的注册和引入过程。

##### 安装指令

```
npm install -D unplugin-vue-components
```



##### vant 和 unplugin-auto-import 和 unplugin-vue-components 的配置

```javascript
// vite.config.js

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 自动引入vant 组件
      resolvers: [VantResolver()],
      dts: 'types/auto-imports.d.ts'

    }),
    Components({
      // 指定扫描组件库的路径
      dirs: ['src/components'],
      // 自动导入组件库
      extensions: ['vue'],
      // 自动引入vant 组件
      resolvers: [VantResolver()],
      dts: 'types/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

#### eslint 和 unplugin-auto-import 引发的错误处理

![iShot_2023-05-22_11.59.25](/Users/yanmiao/Desktop/element-h5/README.assets/iShot_2023-05-22_11.59.25.png)

##### 处理方法 

1. 在 vite.config.js 中进行如下操作

```
 // vite.config.js
 AutoImport({
      imports: ['vue', 'vue-router'],
      // 自动引入vant 组件
      resolvers: [VantResolver()],
      dts: 'types/auto-imports.d.ts',
      eslintrc: { // 添加如下代码并且运行 npm run dev , 运行后会生成 .eslintrc-auto-import.json 文件 
        enabled: true
      },
    }),
```

2. 在 .eslintrc.cjs 中进行如下操作

```JavaScript

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    // 添加如下代码 
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
```

3. 重新启动程序, `npm run dev` 如果还不生效, 则删除 `.idea`文件再重试 

##### 参考文章

https://juejin.cn/post/7155770734403387428
