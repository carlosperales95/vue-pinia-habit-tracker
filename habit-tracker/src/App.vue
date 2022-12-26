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
      <button 
        @click="filter = 'all'"
        :class="{selected: filter === 'all'}"
      >
        All
      </button>
      <button 
        @click="filter = 'favs'"
        :class="{selected: filter === 'favs'}"
      >
        Favs
      </button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="habitStore.isLoading">Loading Habits...</div>

    <!-- habit list -->
    <div class="habit-list" v-if="filter === 'all'">
      <p><b>All:</b> You have {{ habitStore.totalCount }} habits left unchecked today</p>
      <div v-for="habit in habitStore.habits" :key="habit.id">
        <HabitDetails :habit="habit" />
      </div>
    </div>

    <!-- favs list -->
    <div class="habit-list" v-if="filter === 'favs'">
      <p><b>Favs:</b> You have {{ habitStore.favCount }} fav habits left unchecked today</p>
      <div v-for="habit in habitStore.favs" :key="habit.id">
        <HabitDetails :habit="habit" />
      </div>
    </div>

    <!-- Possible Reset state button -->
    <!-- <button @click="habitStore.$reset">Reset</button> -->

  </main>
</template>

<script>
import { useHabitStore } from './stores/HabitStore'
import HabitDetails from './components/HabitDetails.vue'
import HabitForm from './components/HabitForm.vue'
import { ref } from '@vue/reactivity'
// import { storeToRefs } from 'pinia'

  export default {
    components: { HabitDetails, HabitForm },
    setup() {
      const habitStore = useHabitStore()

      // These refs can replace the habitStore return, and take one level out habitStore.habits => habits
      // Cannot use actions tho
      // const { habits, isLoading, favs, totalCount, favCount } = storeToRefs(habitStore)

      // fetch habits
      habitStore.getHabits()

      const filter = ref('all')

      return { habitStore, filter }
    }
  }
</script>
