import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  url = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>(`${this.url}/todos`);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.url}/todos/${id}`);
  }

  addTodo(todo: Omit<Todo,"id">) {
    return this.http.post<Todo>(`${this.url}/todos`, todo);
  }
  
  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`${this.url}/todos/${todo.id}`, todo);
  }
}
