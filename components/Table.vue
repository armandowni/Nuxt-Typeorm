<template>
  <div class="flex w-auto border-2 rounded-md p-5 gap-5">
    <table class="flex flex-col border-2 flex-1">
      {{dataTable}}
      <thead class="border-b-2 ">
        <tr class="grid grid-cols-3 gap-5">
          <div class="border-r-2">No.</div>
          <div class="border-r-2">Name</div>
          <div>Age</div>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in dataTable.dataTable.test" :key=index class="grid grid-cols-3 gap-5">
          <div class="border-r-2 border-b-2">{{ index + 1 }}</div>
          <div class="border-r-2 border-b-2">{{ data.name }}</div>
          <div class="border-b-2"> {{ data.age }}</div>
        </tr>
      </tbody>
    </table>
    <div class="form">
      Want Try?
      <form action="" class="flex flex-col items-start gap-5">
        <input type="text" placeholder="name" class="border-2 rounded-sm" />
        <input type="text" placeholder="age" class="border-2 rounded-sm" />

        <button class="border-2">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataTable: []
  }
};
</script>
