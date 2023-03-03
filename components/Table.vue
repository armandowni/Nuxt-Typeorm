<template>
  <div
    class="border-2 border-black rounded-md h-auto overflow-y-scroll w-full max-h-40"
  >
    <v-data-table
      :headers="headers"
      :items="dataTable"
      :items-per-page="5"
      class="elevation-1 text-start"
    >
      <template v-slot:[`item.from`]="{ item }">
        <div>
          <div class="">
            {{
              (item.status & 2) == 2
                ? "Nuxt App 3"
                : (item.status & 1) == 1
                ? "Nuxt App 2"
                : "Unknown"
            }}
          </div>
        </div>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div>
          <div class="flex justify-start gap-5" v-if="(item.status & 1) == 1">
            <a href="javascript:void(0)" v-on:click="editDialog(item)">
              <v-icon small>fa-pencil</v-icon>
            </a>
            <a href="javascript:void(0)" v-on:click="delDialog(item)">
              <v-icon small>fa-trash</v-icon>
            </a>
          </div>
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
          text: "Name",
          sortable: false,
          value: "name",
        },
        {
          text: "Age",
          sortable: false,
          value: "age",
        },
        {
          text: "From",
          sortable: false,
          value: "from",
        },
        {
          text: "Action",
          sortable: false,
          value: "actions",
        },
      ],
    };
  },
};
</script>
