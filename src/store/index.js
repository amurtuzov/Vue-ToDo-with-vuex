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
			toDos.sort(function(a,b) {
				if(a.done < b.done) {
					return 1;
				}
			})
		},
		sortUndone({toDos}) {
			toDos.sort(function(a,b) {
				if(a.done > b.done) {
					return 1;
				}
			})
		}

	},

	actions: {
		getData(context) {
			fetch('http://jsonplaceholder.typicode.com/todos?userId=1')
			.then(res => res.json())
			.then(res => {
				context.commit('putData', res);
			});
		}

	}

})