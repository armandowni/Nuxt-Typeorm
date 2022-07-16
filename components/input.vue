<template>
  <input
    type="text"
    class="border-2 border-bg-black rounded-md w-20"
    placeholder="{this.placeholder}"
  />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    placeholder: String,
  },
});
</script>
