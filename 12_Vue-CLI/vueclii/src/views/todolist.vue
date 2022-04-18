<template>
    <div id="app" class="container mt-4">
      <div v-if="!isEditing">
        <input class="form-control form-control-lg" type="text" v-model="todo" />
        <input class="btn btn-success mt-3" type="submit" value="Tambahkan" @click="storeTodo" />
      </div>
      <div v-else class="mt-3">
        <input class="form-control form-control-lg" type="text" v-model="todo" />
        <input class="btn btn-success mt-3" type="submit" value="Update" @click="updateTodo" />
      </div>

      <ol>
        <li class="mt-3" v-for="(todo, index) in todos" v-bind:key="index" 
        @click="()=> redirect(todo)">
          {{ todo }}
          <button class="btn btn-primary" @click="editTodo(index, todo)">Edit</button>
          <button class="btn btn-danger ms-3" @click="removeTodo(index)">Delete</button>
        </li>
         <div  class=" mt-5 alert alert-warning alert-dismissible fade show" role="alert" v-if="todos.length >=4"><strong>Hebat!</strong></div>
      </ol>
    </div>
</template>

<script>
export default ({
      name: "TaskPage",
      data () { return {
        isEditing: false,
          todo: "",
          todos: [],
          selectedTodo: null,
      }
      },
      methods: {
          storeTodo() {
            this.todos.push(this.todo);
            this.todo = "";
          },

          removeTodo(index) {
            this.todos.splice(index, 1);
          },

          updateTodo() {
            this.todos.splice(this.selectedIndex, 1, this.todo);
            this.todo = "";
            this.isEditing = false;
          },

          editTodo(index, todo) {
            this.isEditing = true;
            this.todo = todo;
            this.selectedIndex = index;
          },
          redirect(todo){
            return this.$router.push({ name: "TaskDetail", params:{title : todo }});
          },
        },
      })
</script>
<style>
</style>