const template = `{{#if compareUrl}}
# [v{{nextRelease.version}}]({{compareUrl}}) ({{datetime "UTC:yyyy-mm-dd"}})
{{else}}
# v{{nextRelease.version}} ({{datetime "UTC:yyyy-mm-dd"}})
{{/if}}
`

module.exports = {
  template,
}
