<template>
  <div class="border-2 border-black rounded-md h-auto overflow-y-scroll w-full max-h-40">
    <v-data-table
      :headers="headers"
      :items="dataTable"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <div class="flex justify-end gap-5">
          <a href="javascript:void(0)" v-on:click="editDialog(item)">
            <v-icon small>fa-pencil</v-icon>
          </a>
          <a href="javascript:void(0)" v-on:click="delDialog(item)">
            <v-icon small>fa-trash</v-icon>
          </a>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    dataTable: [],
    editDialog: Function,
    delDialog: Function,
  },
  data() {
    return {
      headers: [
        {
          align: "left",
          text: "Name",
          sortable: false,
          value: "name",
        },
        {
          align: "left",
          text: "Age",
          sortable: false,
          value: "age",
        },
        {
          align: "right",
          text: "Action",
          value: "actions",
          sortable: false,
        },
      ],
    };
  },
};
</script>
