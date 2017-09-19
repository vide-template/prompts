module.exports = {
  prompts: [{
    type: 'list',
    name: 'pluginType',
    message: 'Which kind of plugin do you want to create?',
    choices: [{
        name: 'prompt (eg. vide-plugin-prompt-vue)',
        value: 'prompt',
      },
      {
        name: 'mode (eg. vide-plugin-mode-vue)',
        value: 'mode',
      }
    ]
  }],
  gitUrl: {
    prompt: 'debuggap/vide-plugin-prompt-vue',
    mode: 'debuggap/vide-plugin-mode-vue'
  },
  overwrite: {
    mode: require('./overwrite-mode')
  },
  callback: {
    mode: require('./callback-mode')
  }
}