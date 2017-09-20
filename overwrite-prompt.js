let gitUser = require('./lib/git_user')

module.exports = [{
    type: 'string',
    name: 'name',
    message: 'plugin name (eg. vide-plugin-prompt-xxx|xxx)',
    validate(value) {
      if (!value) {
        return "Please enter plugin name"
      } else if (!/^vide-plugin-prompt-\w+$|^\w+$/.test(value)) {
        return "Please check your plugin name. eg. vide-plugin-prompt-vue or vue"
      }
      return true
    },
    filter(value) {
      if (!/^vide-plugin-prompt/.test(value)) {
        value = 'vide-plugin-prompt-' + value
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
  },
  {
    type: 'string',
    name: 'promptExtension',
    message: 'prompt extension, split by space (eg. `css sass less`)',
    validate (value) {
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        return "Please check your extension."
      }
      return true
    }
  }
]