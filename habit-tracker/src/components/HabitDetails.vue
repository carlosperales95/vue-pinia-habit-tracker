<template>
    <div class="habit">
        <h3> {{ habit.title }} </h3>
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
        </div>
    </div>
</template>

<script>
import { useHabitStore } from '../stores/HabitStore'
    export default {
        props: ['habit'],
        setup() {
            const habitStore = useHabitStore()


            return { habitStore }
        }
    }
</script>