<template>
  <div class="flex w-full border-2 rounded-md p-5 gap-5">
    <table class="flex flex-col border-2 flex-1">
      <thead class="border-b-2">
        <tr class="grid grid-cols-3 gap-2">
          <div class="border-r-2">No.</div>
          <div class="border-r-2 text-left">Name</div>
          <div>Age</div>
        </tr>
      </thead>
      <tbody>
        <div
          v-for="(data, index) in dataTable.resultDataTable"
          :key="index"
          class="grid grid-cols-3 gap-2"
        >
          <div class="border-r-2 border-b-2">{{ index + 1 }}</div>
          <div class="border-r-2 border-b-2">{{ data.name }}</div>
          <div class="border-b-2">{{ data.age }}</div>
        </div>
      </tbody>
    </table>
    <!-- <div class="form">
      Want to Try?
      <form action="" class="flex flex-col items-start gap-2">
        <Input v-bind:placeholder="Name" />
        <Input v-bind:placeholder="Age" />

        <button class="border-2">Submit</button>
      </form>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    dataTable: [],
  },
});
</script>
