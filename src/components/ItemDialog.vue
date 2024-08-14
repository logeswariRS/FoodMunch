<template>
  <div id="app">
    <form @submit.prevent="handleSignup">
    <label>
      Name:
      <input  v-model="items.name" type="text"/>
    </label>
    <label>
      price:
      <input  v-model="items.price" type="number"/>
    </label>
    <label>
      benefits:
      <input  v-model="items.benefits" type="text"/>
    </label>
    <button type="submit">Add Items</button></form>
    <div class="container">
      <div class="item-list">
        <div v-for="item in items" :key="item.id" class="item">
          <div class="item-details">
            <span>Item name: {{ item.name }}</span><br>
            <span>Item price: {{ item.price }}</span><br>
            <span>Item benefits: {{ item.benefits }}</span>
          </div>
          <div class="item-actions">
            <button @click="editItem(item)" style="color:green">Edit</button>
            <button @click="deleteItem(item.id)"  style="color:red">Delete</button>
          </div>
        </div>

      </div>
    </div>
    <div v-if="showDialog" class="dialog-overlay" @click.self="closeDialog">
      <div class="dialog-content">
        <h2>Edit Item</h2>
        <label>
          Name:
          <input v-model="editItemData.name" />
        </label>
        <label>
          Price:
          <input v-model="editItemData.price" />
        </label>
        <label>
          Benefits:
          <input v-model="editItemData.benefits" />
        </label>
        <div class="dialog-actions">
          <button @click="saveItem"  style="color:green">Save</button>
          <button @click="closeDialog"  style="color:red">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'itemDialog',
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1', price: '$10', benefits: 'Good' },
        { id: 2, name: 'Item 2', price: '$20', benefits: 'Better' }
      ],
      showDialog: false,
      editItemData: null
    };
  },
  mounted() {
    console.log('itemDialog loaded')
  },
  methods: {
    handleSignup(){
 
      const lastid = this.items.length>0?this.items[this.items.length-1].id:0;

      const id=lastid+1;

      const  newItems={...this.items,id}
      this.items=[...this.items,newItems];

      
    },
    editItem(item) {
      this.editItemData = { ...item };
      this.showDialog = true;
    },
    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    saveItem() {
      if (this.editItemData) {
        this.items = this.items.map(item =>
          item.id === this.editItemData.id ? this.editItemData : item
        );
        this.closeDialog();
      }
    },
    closeDialog() {
      this.showDialog = false;
      this.editItemData = null;
    }
  }
};
</script>

<style scoped>
#app{
  border: 1px solid rgb(50, 201, 70);
  margin: 30px;

}
.container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.item-list {

  flex-direction: column;
  width: 100%;
  max-width: 600px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.item-details {
  flex: 1;

}

.item-actions button {
  margin-left: 10px;
  background-color:rgb(42, 211, 70);
  padding: 10px;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background: white;
  padding: 25px;
  border-radius: 5px;
  width: 300px;
}

.dialog-actions {
  margin-top: 10px;

}

.dialog-actions button {
  margin: 10px;
  padding: 10px;
  background-color: rgb(42, 211, 70);
  
}
form label,button{
  background-color: rgb(51, 176, 214);
  padding: 7px;
  border: 1px solid green;
  margin: 20px;
}
</style>
