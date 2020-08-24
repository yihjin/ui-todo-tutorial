import { fireStore } from "../config/firebaseConfig";

const COLLECTION_NAME = "todo-list";

const fetchTodos = async () => {
	const todos = {};
	(await fireStore.collection(COLLECTION_NAME).get()).docs.forEach((item) => {
		todos[item.id] = item.data();
	});
	return todos;
}

const addTodo = async (id, description) => {
	return await fireStore.collection(COLLECTION_NAME).doc(id).set({ description });
}

const updateTodo = async (id, description) => {
	return await fireStore.collection(COLLECTION_NAME).doc(id).update({ description });
}

const deleteTodo = async (id) => {
	return await fireStore.collection(COLLECTION_NAME).doc(id).delete();
}

export const firebaseApi = {
	fetchTodos,
	addTodo,
	updateTodo,
	deleteTodo,
}