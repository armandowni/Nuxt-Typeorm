<template>
  <div>
    <!-- <Tutorial /> -->
    <li v-for="(data, index) in test" :key="index">
      {{ data.name }} ({{ data.age }})
    </li>
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
