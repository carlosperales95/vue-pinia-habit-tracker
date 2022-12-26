import { defineStore } from 'pinia'

export const useHabitStore = defineStore('habitStore', {
    state: () => ({
        habits: [],
        isLoading: false,
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
        async getHabits() {
            this.isLoading = true
            const res = await fetch('http://localhost:3000/habits')
            const data = await res.json()

            this.habits = data
            this.isLoading = false
        },
        async addHabit(habit) {
            this.habits.push(habit)

            const res= await fetch('http://localhost:3000/habits',{
                method: 'POST',
                body: JSON.stringify(habit),
                headers: {'Content-Type': 'application/json'}
            })

            if (res.error) {
                console.log(re.error)
            }
        },
        async deleteHabit(id) {
            this.habits = this.habits.filter(h => h.id !== id)

            const res = await fetch('http://localhost:3000/habits/' + id,{
                method: 'DELETE',
            })

            if (res.error) {
                console.log(re.error)
            }
        },
        async toggleFav(id) {
            const habit = this.habits.find( h => h.id === id)
            habit.isFav = !habit.isFav

            const res = await fetch('http://localhost:3000/habits/' + id,{
                method: 'PATCH',
                body: JSON.stringify({isFav: habit.isFav}),
                headers: {'Content-Type': 'application/json'}
            })

            if (res.error) {
                console.log(re.error)
            }
        }
    }
})