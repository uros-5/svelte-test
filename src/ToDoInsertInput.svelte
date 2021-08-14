<script lang="ts">
import { inputTitle } from "./stores";

    function updateTitle() {
        inputTitle.set($inputTitle)
    }

</script>

<input type="text" bind:value={$inputTitle} on:input={updateTitle}>
