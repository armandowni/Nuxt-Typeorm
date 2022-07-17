<template>
  <div class="flex w-full border-2 rounded-md p-5 gap-5">
    <!-- {{ dataTable }} -->
    <div class="border-2 border-black rounded-md">
      <v-data-table :headers="headers" :items="data" :items-per-page="5" class="elevation-1">
      </v-data-table>
    </div>
    <div class="form border-2 border-black rounded-md p-10">
      Want to Try?
      <form action="" class="flex flex-col items-start gap-2">
        <Input placeholder="test" />
        <Input placeholder="test" />

        <button class="border-2">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    dataTable: [],
  },
  mounted() {
    this.data = this.dataTable.resultDataTable
  },
  data() {
    return {
      data: [],
      headers: [{
        text: "Name",
        value: 'name',
      }, {
        text: "Age",
        value: 'age',
      }]
    }
  }
});
</script>
