import JsonEditor from './JsonEditor.vue'
import JsonView from './JsonView.vue'
import ArrayView from './ArrayView.vue'
import PackageFile from '../package.json'
import Buefy from 'buefy'

const VERSION = PackageFile.version



const install = (Vue) => {
  if (install.installed) return

  Vue.component(Buefy.Checkbox.name, Buefy.Checkbox)
  Vue.component(Buefy.Field.name, Buefy.Field)
  Vue.component(Buefy.Input.name, Buefy.Input)
  Vue.component(Buefy.Select.name, Buefy.Select)
  
  Vue.component('JsonEditor', JsonEditor)
  Vue.component('json-view', JsonView)
  Vue.component('array-view', ArrayView)

  Array.prototype.rmIndex = function (index) {
	  this.splice(index, 1)
	  return this
	}
}

export default install

export const components = {
  JsonEditor,
  VERSION
}

