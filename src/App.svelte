<script lang="ts">
  import { each } from "svelte/internal";
  import { todos } from "./stores";
  import ToDoArchiveButton from "./ToDoArchiveButton.svelte";
  import ToDoInsertAddButton from "./ToDoInsertAddButton.svelte";
  import ToDoInsertInput from "./ToDoInsertInput.svelte";
  import ToDoRemaining from "./ToDoRemaining.svelte";
  import ToDoTitle from "./ToDoTitle.svelte";
  import ToDoItem from "./ToDoItem.svelte";

  let todoItems = [];
  todos.subscribe((value) => (todoItems = value));
</script>

<main>
  <ToDoTitle />
  <div class="content">
    <ToDoRemaining />
    <ToDoArchiveButton />
    <ToDoInsertInput />
    <ToDoInsertAddButton />
    <div class="items">
      {#each todoItems as todo}
        <ToDoItem item={todo} />
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  .content {
    display: grid;
    grid-template-areas: "remaining archive" "input add" "items items";
    justify-content: center;
    gap: 3em;
    align-items: end;
  }

  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
