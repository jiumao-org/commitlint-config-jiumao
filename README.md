# CommitLint Config

[![npm](https://img.shields.io/npm/v/%40jiumao%2Fcommitlint-config.svg)](https://www.npmjs.com/package/@jiumao/commitlint-config)
![](https://img.shields.io/github/stars/jiumao-fe/commitlint-config-jiumao.svg)
![](https://img.shields.io/github/license/jiumao-fe/commitlint-config-jiumao.svg)
![](https://img.shields.io/github/issues/jiumao-fe/commitlint-config-jiumao.svg)
![](https://img.shields.io/github/forks/jiumao-fe/commitlint-config-jiumao.svg)

> JiuMao前端团队 CommitLint 配置

# Usage

1. 安装commitlint

```
yarn add -D @commitlint/cli husky
```

2. 项目添加`commitlint.config.js`配置文件

```
const { rules } = require('@jiumao/commitlint-config');

module.exports = {
  rules
};
```

3. package.json添加如下代码

```
"scripts": {
  "commitmsg": "commitlint -E HUSKY_GIT_PARAMS"
},
"husky": {
  "hooks": {
    "commit-msg": "npm run commitmsg"
  }
}
```

# Git commit规范

提交格式如下

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

提交信息应该包含Header(必填)、Body(选填)和Footer(选填)

Header:

```
<type>(<scope>): <subject>
```

<type>: 用来説明commit的类别, 可选值如下

* `feat`: 新功能
* `fix`: BUG修复
* `docs`: 文档
* `style`: 代码格式(不影响代码运行的变动)
* `refactor`: 重构
* `test`: 关于测试
* `chore`: 构建过程或辅助工具的变动
* `revert`: 还原代码

<scope>: 表示影响的范围 选填

<subject>: commit 目的的简短描述

Body:
 本次 commit 的详细描述，可以分成多行
 
Footer
  只用于两种情况 关联Issue 和 关闭Issue

关联Issue:
  格式: Issue #1, #2, #3
关闭Issue:
  格式: Close #1, #2, #3
  
  
# 示例

```
feat(document module): 添加了新功能
 
添加**新功能

- 功能1
- 功能2

Issue #1, #2
Close #1
```

# 参考

* [my-commit-message](https://yanhaijing.com/git/2016/02/17/my-commit-message)
* [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
