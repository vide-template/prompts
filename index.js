module.exports = {
  prompts: [{
    type: 'list',
    name: 'pluginType',
    message: 'Which kind of plugin do you want to create?',
    choices: [
      {
        name: 'prompt (eg. vide-plugin-prompt-vue)',
        value: 'prompt',
      },
      {
        name: 'mode (eg. vide-plugin-mode-vue)',
        value: 'mode',
      },
      {
        name: 'toolbar (eg. vide-plugin-toolbar-qrcode)',
        value: 'toolbar',
      }
    ]
  }],
  gitUrl: {
    prompt: 'vide-template/prompt',
    mode: 'vide-template/mode',
    toolbar: 'vide-template/toolbar'
  },
  overwrite: {
    mode: require('./overwrite-mode'),
    prompt: require('./overwrite-prompt'),
    toolbar: require('./overwrite-toolbar')
  },
  callback: {
    mode: require('./callback-mode'),
    prompt: require('./callback-prompt'),
    toolbar: require('./callback-toolbar')
  }
}