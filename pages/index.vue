<template>
  <div>
    <Tutorial />
  </div>
</template>

<script lang="ts">
import Vue, { onMounted } from "vue";
import { get } from "~/endpoints";

export default {
  data() {
    return {
      test: [],
    };
  },
  async fetch() {
    this.test = await get("hello");
  },
};
</script>
