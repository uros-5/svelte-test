<script lang="ts">
  import { todos } from "./stores";
  import type {ToDoItemI } from './stores'
  export let item: ToDoItemI;
  import ToDoItemDeleteButton from "./ToDoItemDeleteButton.svelte";
  function updateItem() {
    item.done = !item.done
    todos.set($todos)
  }
</script>

<div style="display: inherit;gap:2em;">
  <input type="checkbox" bind:checked={item.done} on:click={updateItem} />
  <p>{item.name}</p>
  <ToDoItemDeleteButton  id={item.id}/>
</div>
