import { defineStore } from 'pinia'
import MemberService from '@/services/MemberService.js'

// Option Store:  Members

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`).
// Naming the returned function use... is a convention across composables to make its usage idiomatic.
export const useMembersStore = defineStore(
  'members', // the first argument is a unique id of the store across your application; the store id used by Pinia to connect the store to the devtools
  //pass an Options Object as the second argument
  {
    //In Pinia the state is defined as a function that returns the initial state. This allows Pinia to work in both Server and Client Side.
    state: () => ({
      // arrow function recommended for full type inference
      members: [] // all properties will have their type inferred automatically
    }),
    getters: {
      //Getters are exactly the equivalent of computed values for the state of a Store.  They receive the state as the first parameter to encourage the usage of arrow function
    },
    actions: {
      /* c8 ignore start */
      async fetchMembers() {
        //call the API to retrieve the members
        const response = await MemberService.getMembers()
        this.members = response.data
      }
      /* c8 ignore stop */
    } //state as the data of the store, getters as the computed properties of the store, and actions as the methods
  }
)

// Setup Store (similar to the Vue Composition API's setup function)
// ref()s become state properties
// computed()s become getters
// function()s become actions
// Setup stores bring a lot more flexibility than Option Stores as you can create watchers within a store and freely use any composable.

// As with Vue's Composition API and Options API, pick the one that you feel the most comfortable with. If you're not sure, try Option Stores first.

// You can define as many stores as you want and you should define each store in a different file to get the most out of Pinia (like automatically allowing your bundler to code split and providing TypeScript inference).
