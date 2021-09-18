//Example of the lesson 1 

/*const store = createStore({
	state: {
		loadingStatus: 'notLoading',
		todos: []
	},
	mutations: {
		SET_LOADING_STATUS(state, status) {
			state.loadingStatus = status
		},
		SET_TODOS (state, todos) {
			state.todos = todos
		}
	},
	actions: {
		fetchTodos(context) {
			context.commit('SET_LOADING_STATUS', 'loading')
			axios.get('/api/todos').then(response => {
				context.commit('SET_LOADING_STATUS', 'notLoading')
				context.commit('SET_LOADING_STATUS', response.data.todos)
			})
		}
	},
	getters: {

	}
	
In our State, we have an isLoading property, along an array for todos.
Below that we have a Mutation to switch our isLoading state between true and false. Along with a Mutation to set our state with the todos that we’ll receive from an API call in our action below.
Our Action here has multiple steps. First, it’ll commit the Mutation to set the isLoading status to true. Then it’ll make an API call, and when the response returns, it will commit the Mutation to set the isLoading status to false. Finally it’ll commit the Mutation to set the state of our todos with the response we got back from our API.
If we need the ability to only retrieve the todos that are labeled done, we can use a Getter for that, which will retrieve only the specific state that we want.

	const store = new Vuex.Store({
	  state : {
	  isLoading = false,
	  todos = [ 
	    { id : 1, text : '...', done : true },
	    { id : 2, text : '...', done : false },
	    { id : 3, text : '...', done : true },
	   ]
	 },
	 getters: {
	 doneTodos(state) {
	   return state.todos.filter(todo => todo.done)
	 }
       }
})*/
