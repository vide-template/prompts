let gitUser = require('./lib/git_user')

module.exports = [{
    type: 'string',
    name: 'name',
    message: 'plugin name (eg. vide-plugin-toolbar-xxx|xxx)',
    validate(value) {
      if (!value) {
        return "Please enter plugin name"
      } else if (!/^vide-plugin-toolbar-\w+$|^\w+$/.test(value)) {
        return "Please check your plugin name. eg. vide-plugin-toolbar-vue or vue"
      }
      return true
    },
    filter(value) {
      if (!/^vide-plugin-toolbar/.test(value)) {
        value = 'vide-plugin-toolbar-' + value
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
    name: 'description',
    message: 'description',
    validate (value) {
      if (!value) {
        return "Please input the description"
      } else if (value.length > 200) {
        return "Description is too long"
      } else {
        return true
      }
    }
  }
]