module.exports = function (data) {
  data.keyword = data.name.replace('vide-plugin-', '')
  data.className = data.name.replace(/-\w+/g, (value) => {
    return value[1].toUpperCase() + value.slice(2) 
  })
}