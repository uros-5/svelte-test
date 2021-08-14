<script lang="ts">
import { todos } from "./stores";

export let id: number;
function deleteItem() {
    const newArray = $todos.filter(item => item.id != id)
    todos.set(newArray)
}
</script>
<button on:click={deleteItem}> Delete</button>