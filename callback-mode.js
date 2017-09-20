const fs = require('fs')
const path = require('path')
module.exports = function (data) {
  data.keyword = data.name.replace('vide-plugin-', '')
  data.className = data.name.replace(/-\w+/g, (value) => {
    return value[1].toUpperCase() + value.slice(2) 
  })
  // 修改文件名
  let src = path.join(process.cwd(), data.name, 'mode-vue.js')
  let des = path.join(process.cwd(), data.name, data.keyword + '.js')
  fs.rename(src, des)
}