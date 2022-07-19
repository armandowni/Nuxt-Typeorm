<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div id="header" class="flex flex-col justify-center pt-8 sm:pt-0">
        <span class="text-center font-extrabold text-xl"
          >Template project with</span
        >
        <div class="flex flex-col lg:flex-row items-center gap-0 lg:gap-2">
          <a
            class="flex justify-center sm:pt-0"
            href="https://nuxtjs.org"
            target="_blank"
          >
            <LogoNuxt />
          </a>
          <span class="text-6xl">+</span>
          <a
            class="flex justify-center sm:pt-0"
            href="https://typeorm.io/"
            target="_blank"
          >
            <LogoTypeorm />
          </a>
        </div>
        <span class="text-center font-extrabold text-xl"
          >and many more ...</span
        >
      </div>
      <div class="mt-5 bg-white shadow sm:rounded-lg px-5 py-2 w-auto">
        <div class="font-bold text-2xl pb-3">Here the example</div>
        <div class="w-full border-2 rounded-md p-5">
          <button
            class="bg-blue-600 rounded-md text-white px-5 py-2 mb-5 text-sm"
            @click="addDialog()"
          >
            Add Data
          </button>
          <Modal :dialog="dialogAdd || dialogEdit">
            <v-card>
              <v-card-title class="">
                {{ !dataForm ? "Add" : "Edit" }} Data
              </v-card-title>

              <div class="pb-5 px-5">
                <form
                  action=""
                  class="flex flex-col justify-center items-center gap-2 w-22"
                >
                  <Input
                    placeholder="Name"
                    v-model="dataForm.name"
                    name="name"
                  />
                  <Input placeholder="Age" v-model="dataForm.age" name="age" />

                  <div class="flex gap-5" id="buttons">
                    <button class="" v-on:click="delData(dataForm)">
                      Submit
                    </button>
                    <button
                      class="bg-blue-500 rounded-md text-white py-3 px-5"
                      v-on:click="cancel()"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </v-card>
          </Modal>
          <Modal :dialog="dialogDel">
            <v-card>
              <v-card-title class="">
                Are you sure want to delete {{ dataForm?.name }}
              </v-card-title>
              <v-card-actions>
                <div class="flex gap-5" id="buttons">
                  <button class="border-2" v-on:click="delData(dataForm)">
                    Submit
                  </button>
                  <button class="border-2" v-on:click="cancel()">Cancel</button>
                </div>
              </v-card-actions>
            </v-card>
          </Modal>

          <Table
            :dataTable="resultDataTable"
            :editDialog="editDialog"
            :delDialog="delDialog"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useApi } from "../endpoints";

const api = useApi();

export default {
  data() {
    return {
      resultDataTable: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDel: false,
      dataForm: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    addDialog() {
      this.dialogAdd = true;
    },
    editDialog(data: any) {
      delete data.created;
      delete data.updated;
      delete data.deleted;
      console.log(data);

      this.dataForm = data;
      this.dialogEdit = true;
    },
    delDialog(data: any) {
      delete data.created;
      delete data.updated;
      delete data.deleted;
      this.dataForm = data;
      this.dialogDel = true;
    },
    addData(data: any) {
      console.log(data);
      // await api.post(`/test`);
      // this.cancel();
    },
    async editData(data: any) {
      console.log(data);
      // await api.put(`/test/${data?.id}`);
      // this.cancel();
    },
    async delData(data: any) {
      await api.del(`/test/${data?.id}`);
      this.cancel();
    },
    async cancel() {
      this.dialogAdd = false;
      this.dialogEdit = false;
      this.dialogDel = false;
    },
    async getData() {
      this.resultDataTable = await api.get("/test");
      this.resultDataTable = this.resultDataTable[0];
    },
  },
  async fetch() {
    await this.getData();
  },
};
</script>
