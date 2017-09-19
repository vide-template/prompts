let gitUser = require('./lib/git_user')

module.exports = [{
    type: 'string',
    name: 'name',
    message: 'plugin name (eg. vide-plugin-mode-xxx|xxx)',
    validate(value) {
      if (!value) {
        return "Please enter plugin name"
      } else if (!/^vide-plugin-mode-\w+$|^\w+$/.test(value)) {
        return "Please check your plugin name. eg. vide-plugin-mode-vue or vue"
      }
      return true
    },
    filter(value) {
      if (!/^vide-plugin-mode/.test(value)) {
        value = 'vide-plugin-mode-' + value
      }
      return value
    }
  },
  {
    type: 'string',
    name: 'version',
    message: 'plugin version',
    default: '0.0.1'
  },
  {
    type: 'string',
    name: 'author',
    message: 'author',
    default: gitUser.getName()
  }
]