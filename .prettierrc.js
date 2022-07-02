module.exports = {
    // 缩进或空格数量
    tabWidth: 2,
    // 换行符类型, windows用crlf
    endOfLine: 'crlf',
    // 单行最大字符数, 屏幕1920打开vscode侧边栏的情况下极限差不多是140, 留一点空间用于个人字体大小喜好
    printWidth: 120,
    // 分号
    semi: true,
    // 单引号
    singleQuote: true,
    // 定义对象时给花括号添加空格
    bracketSpacing: true,
    // 定义对象时给key添加引号, preserve不强制格式化
    quoteProps: 'preserve',
    // 箭头函数添加括号
    arrowParens: 'always',
    // vue中的script/style是否缩进, vscode里不缩不影响折叠
    vueIndentScriptAndStyle: false,
  }
  