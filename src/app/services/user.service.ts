import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../crud/user';

//REPLACE THIS WITH THE CRUID SERVICE
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
  //this is the address for the mockup jason-server that retreives data from the 
  private apiServer = "http://localhost:3000";

    getAll() {
        return this.http.get<User[]>(`${this.apiServer}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.apiServer}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${this.apiServer}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.apiServer}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiServer}/users/${id}`);
    }
}