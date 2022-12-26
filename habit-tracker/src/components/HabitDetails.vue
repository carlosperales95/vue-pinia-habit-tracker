<template>
    <div 
        class="habit" 
        :class="{checked: now - new Date(habit.lastCompleted) <= 86400000 && habit.lastCompleted !== null}"
    >
        <h3> 
            {{ habit.title }} 
        </h3>
        <div class="icons">
            <i 
              class="material-icons"
              @click="habitStore.deleteHabit(habit.id)"
            > 
              delete 
            </i>
            <i 
              class="material-icons"
              :class="{active: habit.isFav}"
              @click="habitStore.toggleFav(habit.id)"
            > 
              favorite 
            </i>
            <i 
              class="material-icons check"
              @click="habitStore.completeHabit(habit.id)"
            > 
              check 
            </i>
        </div>
    </div>
</template>

<script>
import { useHabitStore } from '../stores/HabitStore'
    export default {
        props: ['habit'],
        setup() {
            const habitStore = useHabitStore()

            let now = new Date()

            return { habitStore, now }
        }
    }
</script>