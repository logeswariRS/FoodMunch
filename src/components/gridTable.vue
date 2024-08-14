<template>
  <div id="gridTable">
  <p class="empty-tab" v-if="employees.length<1">No Employees</p>
   <table border="1px solid green" v-else >
     
      <tr>
     <td>Name</td>
     <td>age</td>
     <td>city</td>
     <td>Action</td>
   </tr>
   <tr v-for="employee in employees" :key="employee.id" >
     <td v-if="editing==employee.id">
       <input type="text" v-model="employee.name">
     </td>
     <td v-else>{{ employee.name }}</td>
     <td v-if="editing==employee.id">
       <input type="text" v-model="employee.age">
     </td>
     <td v-else>{{ employee.age }}</td>
     <td v-if="editing==employee.id">
       <input type="text" v-model="employee.city">
     </td>
     <td v-else>{{ employee.city }}</td>
     <td v-if="editing==employee.id">
       <button @click="editEmployee(employee)">Save</button>
       <button  @click="cancleedit(employee)">Cancel</button>
     </td>
     <td v-else>
       <button @click="edit(employee)">Edit</button>
       <button @click="$emit('delete:employee',employee.id)">Delete</button>
     </td>
   
   </tr>
 
 </table></div>
  
 
 </template>   
   
   <script>
 
   export default {
     name: "gridTable",
   props:{
     employees:Array
   },
   data(){
     return{
       editing:null,
       employee:{
             name:'',
             age:'',
             city:''
         },
         catchemp:null,
       
     }
   
   },
   methods:{
     edit(employee){
      this.editing=employee.id;
      this.catchemp=Object.assign({},employee);
 
 
     },
     editEmployee(employee){
       console.log('employeee edit')
       if(employee.name==''||employee.age==''||employee.city==''){
         this.$emit('edit:employee',employee.id,employee)
         this.editing=null;
       }
     },
     cancleedit(employee){
       this.editing=null
       Object.assign(employee,this.catchemp)
     }
    
     },
   }
     
     </script>
     
     <style scoped>
     #gridTable{
      
       margin:100px 400px; 
     }
     table{
       width: 400px;
     }
     td{
       padding: 7px;
     }
     tr:nth-child(even){
       background-color: rgb(110, 107, 110);
       color: antiquewhite;
     }
   
     button{
       margin: 2px;
       width: 60px;
       text-align: left;
       padding: 8px;
     }
    
     </style>
     