<template>
	<main>
		<section>
			<div class="toDos_container">
				<h1>To Do List</h1>
				<input type="text" v-model="value" placeholder="Enter what you need to do..." @keyup.enter="add(value)">
				<div v-show="this.$store.state.toDos.length > 0" class="toDo_sort">
					<button class="sortDone" @click="sortDone()" title="Сначала сделанные"></button>
					<button class="sortUndone" @click="sortUndone()" title="Сначала не сделанные"></button>
				</div>
				<ul class="toDo_list">
					<li v-for="toDo, key in this.$store.state.toDos">
						<div class="toDo_container" v-bind:class="{ toDo_done: toDo.done }">
							<span>{{toDo.name}}</span>
							<div class="todo_control_buttons">
								<button class="doneTodo" @click="done(key)" title="Отметить как выполненное"></button>
								<button class="deleteTodo" @click="del(key)" title="Удалить"></button>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>
<style lang="scss">
	main {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@mixin list {
		padding: 0;
		margin: 0;
	}
	.toDos_container h1 {
		text-align: center;
	}
	.toDos_container input {
		width: 100%;
		padding: 5px;
		margin-bottom: 10px;
		box-sizing: border-box;
	}
	.toDo_sort {
		display: flex;
		justify-content: space-between;
		width: 35px;
	}

	.toDo_sort button {
		width: 15px;
		height: 15px;
		padding: 0;
		margin: 0;
		border: 1px solid black;
		border-radius: 20%;
		cursor: pointer;
		background-color: plum;
	}
	.toDo_sort .sortDone {
		background-image: url('https://png.icons8.com/material/16/000000/sort-down.png');
		background-size: 17px;
		background-position: center;
		background-repeat: no-repeat;

	}
	.toDo_sort .sortUndone {
		background-image: url('https://png.icons8.com/material/16/000000/sort-up.png');
		background-size: 17px;
		background-position: center;
		background-repeat: no-repeat;
		
	}

	.toDo_list {
		@include list;
		display: flex;
		flex-direction: column;
		list-style: none;
		width: 300px;
		margin: 0 auto;
	}
	.toDo_done {
		background-color: green;
	}
	.toDo_list .toDo_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
		padding: 5px;
		border-bottom: 1px solid black;
	}
	.todo_control_buttons {
		display: flex;
		justify-content: space-between;
		width: 45px;
	}
	.todo_control_buttons .doneTodo {

	}
	.todo_control_buttons .deleteTodo {
		background-image: url('https://png.icons8.com/small/50/000000/trash.png');
		background-size: 17px;
		background-position: center;
		background-repeat: no-repeat;
	}
	.todo_control_buttons .doneTodo {
		background-image: url('https://png.icons8.com/color/16/000000/checkmark.png');
		background-size: 17px;
		background-position: center;
		background-repeat: no-repeat;
	}
	.todo_control_buttons button {
		display: block;
		width: 20px;
		height: 20px;
		padding: 0;
		margin: 0;
		border: 1px solid black;
		border-radius: 20%;
		cursor: pointer;
		background-color: plum;
	}

</style>

<script>

export default {
  name: 'app',
  data () {
    return {
    	value: ''
    }
  },
    components: {
  },


  mounted() {
  	console.log(this.$store.state.toDos);
  	console.log(this.$store.state.test);
  	this.$store.dispatch('getData');
  },

  methods: {
  	add: function(value) {
  		if(value !== '') {
  			this.$store.commit('addTodo', {name: value, done: false});
  		}
  		console.log(this.$store.state.todos);
  	},
  	del: function(index) {
  		this.$store.commit('deleteTodo', index);
  		console.log(index);
  	},
  	done: function (index) {
  		this.$store.commit('markAsdone', index);
  	},
  	sortDone: function() {
  		this.$store.commit('sortDone');
  	},
  	sortUndone: function() {
  		this.$store.commit('sortUndone');
  	}
  }
}
</script>