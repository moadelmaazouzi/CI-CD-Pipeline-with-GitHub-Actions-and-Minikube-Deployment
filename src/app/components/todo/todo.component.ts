import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
} 
@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  editId: number | null = null;
  editTitle: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: Date.now(),
        title: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  startEdit(todo: Todo) {
    this.editId = todo.id;
    this.editTitle = todo.title;
  }

  updateTodo() {
    if (this.editId !== null && this.editTitle.trim()) {
      const todo = this.todos.find(t => t.id === this.editId);
      if (todo) {
        todo.title = this.editTitle;
      }
      this.editId = null;
      this.editTitle = '';
    }
  }

  cancelEdit() {
    this.editId = null;
    this.editTitle = '';
  }
}
