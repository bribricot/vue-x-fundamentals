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
})*/