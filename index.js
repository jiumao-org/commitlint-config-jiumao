/**
 * Git提交描述规范
 *
 * 提交信息应该包含Header(必填)、Body(选填)和Footer(选填)
 *
 * 格式如下:
 *    // header
 *    <type>(<scope>): <subject>
 *    // 空一行
 *    <body>
 *    // 空一行
 *    <footer>
 *
 * Header:
 *   格式: <type>(<scope>): <subject>
 *
 *   <type>: 用来説明commit的类别 必填
 *     1. feat: 新功能
 *     2. fix: BUG修复
 *     3. docs: 文档
 *     4. style: 代码格式(不影响代码运行的变动)
 *     5. refactor: 重构
 *     6. test: 关于测试
 *     7. chore: 构建过程或辅助工具的变动
 *     8. revert: 还原代码
 *   <scope>: 表示影响的范围 选填
 *   <subject>: commit 目的的简短描述
 *
 * Body
 *   本次 commit 的详细描述，可以分成多行
 *
 * Footer
 *   只用于两种情况 关联Issue 和 关闭Issue
 *
 *   关联Issue:
 *      格式: Issue #1, #2, #3
 *   关闭Issue:
 *      格式: Close #1, #2, #3
 *
 * 完整示例:
 *   feat(document module): 添加了新功能
 *
 *   添加**新功能
 *
 *   - 功能1
 *   - 功能2
 *
 *   Issue #1, #2
 *   Close #1
 */

module.exports = {
  rules: {
    // Header
    'header-max-length': [2, 'always', 72],
    // <type>枚举
    'type-enum': [2, 'always', [
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'test',
      'chore',
      'revert'
    ]],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // <scope> 格式 小写
    'scope-case': [2, 'always', 'lower-case'],
    // <subject> 不能为空
    'subject-empty': [2, 'never'],
    // <subject> 以.为结束标志
    'subject-full-stop': [2, 'never', '.'],
    // <subject> 格式
    'subject-case': [2, 'never',
      [
        'sentence-case',
        'start-case',
        'pascal-case',
        'upper-case'
      ]
    ],
    // <body> 以空行开头
    'body-leading-blank': [1, 'always'],
    // <footer> 以空行开头
    'footer-leading-blank': [1, 'always']
  }
};
