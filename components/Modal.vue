<template>
  <div data-app>
    <v-dialog v-model="dialog" width="500">
      <slot></slot>
    </v-dialog>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    dialog: Boolean,
  },
  data() {
    return {};
  },
};
</script>
