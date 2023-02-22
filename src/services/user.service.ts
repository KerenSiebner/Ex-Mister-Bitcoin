import { Injectable } from "@angular/core";

const user = {
    "name": "Gilad Zilberman",
    "coins": "100",
    "moves": ["5"]
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public getUser() {
        return user
    }
}