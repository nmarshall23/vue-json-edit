<template>
  <b-field 
    grouped

  >
    <b-input 
      v-if="needName"
      v-model="keyName" 
      size="is-small"
      placeholder="name" 
    />
    <b-select 
      v-model="formatSelected"
      size="is-small"
    >
      <option
        :value="item" 
        v-for="item in formats" 
        :key="item"
      >
        {{ item }}
      </option>
    </b-select>

    <p class="control">
        <b>:</b>
    </p>

    <template v-if="formatSelected !='array' && formatSelected != 'object'">
        <b-input 
          v-if="formatSelected == 'string'"
          v-model="valName" 
          size="is-small"
          key="string-input"
          placeholder="value"
        />
        <b-input 
          v-if="formatSelected == 'number'"
          type="number" 
          v-model.number="valName" 
          size="is-small"
          key="number-input"
          placeholder="number value" 
        />
        <b-checkbox
          class="checkboxFix"
          v-if="formatSelected == 'boolean'"
          v-model="valName"
          size="is-small"
        >
          {{ valName }}
        </b-checkbox>
    </template>

    <p class="control">
        <button 
          class="button is-primary is-small"
          @click="confirm" 
        >Add</button>
    </p>
    <p class="control">
        <button 
          class="button is-small" 
          @click="cancel" 
        >Cancel</button>
    </p>
  </b-field>
</template>

<script>
export default {
    name: "ItemAddForm",
    data: function() {
        return {
            formats: ["string", "array", "object", "number", "boolean"],
            formatSelected: "string",
            //--
            keyName: "",
            valName: ""
        };
    },
    props: {
        needName: {
            default: true
        }
    },
    methods: {
        confirm: function() {
            let val = null;
            if (
                this.formatSelected === "array" ||
                this.formatSelected === "object"
            ) {
                val = [];
            } else {
                val = this.valName;
            }

            let objData = {
                key: this.needName ? this.keyName : null,
                val: val,
                type: this.formatSelected
            };

            this.$emit("confirm", objData);
            this.keyName = "";
            this.valName = "";
            this.formatSelected = "string";
        },

        cancel: function() {
            this.$emit("cancel");
        },
    }
};
</script>

<style lang="less" scoped>

.f-input,
.f-btns {
    display: inline-block;
}

.f-btns {
    display: inline-block;
    margin-top: 0.5em;
}

.f-confirm {
    color: #fff;
    background: #05a5d1;
}

.add-form {
    margin-bottom: 20px;
    font-size: .6em;
}

.checkboxFix {
  padding-right: 0.5em;
  // height: 1em;
}

</style>