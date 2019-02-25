import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		toDos: [
			{ name: 'lul', done: false }
		],
		test: []
	},

	mutations: {
		putData({test}, data) {
			console.log(data);
			test.push(...data);
			// test = data;
		},
		addTodo({toDos}, toDo ) {
			toDos.push(toDo);
		},
		deleteTodo({toDos}, index) {
			toDos.splice(index, 1)
		},
		markAsdone({toDos}, index) {
			toDos[index].done = true;
		},
		sortDone({toDos}) {
			console.log(1)
			toDos.sort(function(a,b) {
				if(a.done > b.done) {
					return -1;
				}
			})
		},
		sortUndone({toDos}) {
			toDos.sort(function(a,b) {
				if(a.done < b.done) {
					return -1;
				}
			})
		},
		// filterDone({toDos}) {
		// 	let filteredTodos = toDos.filter(function(item) {
		// 		return item.done == true;
		// 	})
		// 	toDos.length = 0;
		// 	toDos.push(...filteredTodos);
		// }

	},

	actions: {
		getData(context) {
			fetch('http://jsonplaceholder.typicode.com/todos?userId=1')
			.then(res => res.json())
			.then(res => {
				context.commit('putData', res);
			});
		}

	},
	getters: {
		allTodos(state) {
			return state.toDos;
		},
		undoneTodos(state) {
			return state.toDos.filter(todo => !todo.done);
		},
		doneTodos(state) {
			return state.toDos.filter(todo => todo.done);
		}
	}

})