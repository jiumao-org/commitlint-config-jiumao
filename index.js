module.exports = {
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
};
