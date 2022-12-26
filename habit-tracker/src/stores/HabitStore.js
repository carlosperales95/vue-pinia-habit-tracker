import { defineStore } from 'pinia'

export const useHabitStore = defineStore('habitStore', {
    state: () => ({
        habits: [
            { id: 1, title: "Exercise", isFav: true },
            { id: 2, title: "Code a bit", isFav: true },
            { id: 3, title: "Eat healthy", isFav: false }
        ],
        name: "Carlito"
    }),
    getters: {
        favs: (state) => {
            return state.habits.filter(h => h.isFav)
        },
        favCount: (state) => {
            return state.habits.reduce((sum, h) => {
                return h.isFav ? sum + 1 : sum
            }, 0)
        },
        totalCount: (state) => {
            return state.habits.length
        }
    },
    actions: {
        addHabit(habit) {
            this.habits.push(habit)
        },
        deleteHabit(id) {
            this.habits = this.habits.filter(h => h.id !== id)
        },
        toggleFav(id) {
            const habit = this.habits.find( h => h.id === id)
            habit.isFav = !habit.isFav
        }
    }
})