# Vue-Json-Edit

> visual JSON editor built as an vue component. 

This Fork uses [buefy](https://buefy.github.io), and [bulma](https://bulma.io) for the Add Json Field Form.

</br>


## **[DEMO](http://jinkin1995.github.io/vue-json-edit)**

To see my changes clone from github:

```
npm install
npm run dev
```

That will run the example.

</br>


## Getting Started
```
npm install vue-json-edit --save
```

</br>


## Usage

``` javascript
//import it in your project At your entry point

import vue from 'vue'
import JsonEditor from 'vue-json-edit'
  
Vue.use(JsonEditor)
  
```

During plugin install, the required buefy components are also registrated with vue. 

You will need to include buefy's css. I didn't import it directly as you may be Customizing it.

``` html
<!-- Buefy CSS -->
<link rel="stylesheet" href="https://unpkg.com/buefy/lib/buefy.min.css">
```
</br>

## Example
Single file component
``` html

<template>
    <JsonEditor :objData="jsonData" v-model="jsonData" ></JsonEditor>
</template>
<script>
export default {
    ...
    data: function() {
        return {
            jsonData: {
                name: 'mike',
                age: 22,
                phone: '18552129932',
                address: ['AAA C1', 'BBB C2']
            }
        }
    }
}
</script> 

```

## Todo

This fork was made to both change labels to en-us and use bulma for the add element form.

* Properly handle i18n, needs to be a plugin option.
* Use Buefy Icon component, remove font. Add plugin option for external icon set.  
* Remove unused style sheets.
* Use buefy Collapse component. Add opening and closing animations.
* Change how errors are reported. Buefy Field could have is-danger. Use toast? Don't like the popup.
* Add error checking to add element form value field. 