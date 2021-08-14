<script lang="ts">
import { inputTitle, todos } from "./stores";
let title = "";
inputTitle.subscribe( value => title = value)
function addItem() {
    const item = {name:title,done:false,id:Math.floor(Math.random()*1000)} 
    $todos = [...$todos,item];
    inputTitle.set('');
}
</script>

<div> <button on:click={addItem}>Add</button></div>