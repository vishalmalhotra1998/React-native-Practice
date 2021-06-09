import {action, observable, makeObservable} from 'mobx';
class TodoList {
  value: any = [];
  constructor() {
    makeObservable(this, {
      value: observable,
      addData: action,
      deleteData: action,
    });
  }
  addData = (items: any) => {
    this.value = [
      ...this.value,
      {id: Math.random().toFixed(2) + 1, name: items},
    ];
  };
  deleteData = (name: any) => {
    this.value = this.value.filter((ele: any) => ele.name === name);
  };
}
const TodoListObject = new TodoList();
export default TodoListObject;
