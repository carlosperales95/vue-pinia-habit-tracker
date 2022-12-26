<template>
    <form @submit.prevent="handleSubmit">
        <input 
            type="text"
            placeholder="I need to..."
            v-model="newHabit"    
        >
        <button>Add</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useHabitStore } from '../stores/HabitStore'
    export default {
        setup() {
            const habitStore = useHabitStore()
            const newHabit = ref('')

            const handleSubmit = () => {
                if (newHabit.value.length > 0) {
                    habitStore.addHabit({
                        title: newHabit.value,
                        isFAv: false,
                        id: Math.floor(Math.random() * 1000)
                    })
                    newHabit.value =''
                }
            }
            return { handleSubmit, newHabit }
        }
    }
</script>