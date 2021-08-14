<script lang="ts">
  import { todos } from "./stores";
  let items = [];
  $: completed = $todos.filter((item) => 
    item.done == false 
  );
</script>

<p>{completed.length} of {$todos.length}</p>