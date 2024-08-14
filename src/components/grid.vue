<template>
    <v-container id="grid">
      <v-data-table :headers="headers" :items="items" item-key="id">
        <template v-slot:items="props">
          <tr>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>
              <v-btn @click="openDialog(props.item)" color="blue">Edit</v-btn>
              <v-btn @click="deleteItem(props.item.id)" color="red">Delete</v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
  
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Item</span>
          </v-card-title>
          <v-card-subtitle>
            <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
            <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="saveChanges" color="green">Save</v-btn>
            <v-btn @click="cancelEdit" color="grey">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  export default {
    name:'gridTab',
       data() {
      return {
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        items: [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        ],
        dialog: false,
        editedItem: {},
        originalItem: {},
      };
    },
    methods: {
      openDialog(item) {
        this.editedItem = { ...item };
        this.originalItem = { ...item };
        this.dialog = true;
      },
      saveChanges() {
        const index = this.items.findIndex(item => item.id === this.editedItem.id);
        if (index !== -1) {
          this.items[index] = { ...this.editedItem };
        }
        this.dialog = false;
      },
      cancelEdit() {
        this.editedItem = { ...this.originalItem };
        this.dialog = false;
      },
      deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles here */
  </style>
  