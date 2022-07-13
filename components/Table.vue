<template>
  <div class="flex justify-between w-auto border-2 rounded-md p-5">
    <table class="flex flex-col">
      <thead class="grid grid-cols-4 gap-5">
        <div>No.</div>
        <div>Name</div>
        <div>Age</div>
      </thead>
      <tbody class="grid grid-cols-4 gap-5">
        <div>1</div>
        <div>test</div>
        <div>10</div>
      </tbody>
    </table>
    <div class="">
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
export default {};
</script>
