<template>
  <main>
    
    <!-- heading -->
    <header>
      <img src="./assets/sunny-side-up.png" alt="sunny logo">
      <h1> {{ habitStore.name }}'s Habits </h1>
    </header>

    <!-- new habit form -->
    <div class="new-habit-form">
      <HabitForm />
    </div>

    <!-- filter nav -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- habit list -->
    <div class="habit-list" v-if="filter === 'all'">
      <p>You have {{ habitStore.totalCount }} habits left unchecked</p>
      <div v-for="habit in habitStore.habits" :key="habit.id">
        <HabitDetails :habit="habit" />
      </div>
    </div>

    <!-- favs list -->
    <div class="habit-list" v-if="filter === 'favs'">
      <p>You have {{ habitStore.favCount }} favs left unchecked</p>
      <div v-for="habit in habitStore.favs" :key="habit.id">
        <HabitDetails :habit="habit" />
      </div>
    </div>

  </main>
</template>

<script>
import { useHabitStore } from './stores/HabitStore'
import HabitDetails from './components/HabitDetails.vue'
import HabitForm from './components/HabitForm.vue'
import { ref } from '@vue/reactivity'

  export default {
    components: { HabitDetails, HabitForm },
    setup() {
      const habitStore = useHabitStore()

      const filter = ref('all')

      return { habitStore, filter }
    }
  }
</script>
