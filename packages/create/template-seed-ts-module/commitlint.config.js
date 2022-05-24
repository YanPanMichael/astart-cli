module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
			2,
			'always',
			[
				'feat', // 新功能
        'fix', // 修复 bug
        'chore', // 对构建或者辅助工具的更改
        'refactor', // 既不是修复 bug 也不是添加新功能的代码更改
        'style', // 不影响代码含义的更改 (例如空格、格式化、少了分号)
        'docs', // 只是文档的更改
        'perf', //提高性能的代码更改
        'revert',// 撤回提交
        'release',// release发布
        'test' // 添加或修正测试
			],
		],
  }
}
