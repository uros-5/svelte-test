import { Writable, writable } from 'svelte/store'
export interface ToDoItemI {
    name: string,
    done: boolean,
    id: number
}
export const todos: Writable<ToDoItemI[]> = writable([{name:"a",done:false,id:0}])
export const inputTitle: Writable<string> = writable("")