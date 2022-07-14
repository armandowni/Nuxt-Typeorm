<template>
  <div>
    <Tutorial :dataTable="{test}"></Tutorial>
  </div>
</template>

<script lang="ts">
import Tutorial from '../components/Tutorial.vue'
import { useApi } from "../endpoints"
const api = useApi()

export default {
  data() {
    return {
      test: [],
    };
  },
  components: {
    Tutorial
  },
  async fetch() {
    await api.get('/hello').then((result) => {
      // console.log(result);

      this.test = result[0]
    }).catch(err => console.log(err)
    );
  },
};
</script>
