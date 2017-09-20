module.exports = function (data) {
  data.promptExtension = data.promptExtension.split(' ').map(item => `"${item}"`).join(',')
  data.keyword = data.name.replace('vide-plugin-', '')
  data.className = data.name.replace(/-\w+/g, (value) => {
    return value[1].toUpperCase() + value.slice(2) 
  })
}