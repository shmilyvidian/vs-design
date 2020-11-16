/* eslint-disable */
const packageJson = require('../package.json')
const version = process.env.VERSION || packageJson.version
const files = require.context('./', true, /^(\.\/infinite(\-[a-z]+)+)\/index.js$/)
function getImportComponents () {
  const result = []
  files.keys().map(key => {
    if (!key.includes('infinite')) return
    const element = files(key).default
    result.push(element)
  });
  return result
};

const components = getImportComponents()
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const exportObj = {
  install,
  version,
}

components.map(component => {
  if (component) {
    const { name } = component
    if (!name) return
    exportObj[name] = component
  };
});

export default exportObj
