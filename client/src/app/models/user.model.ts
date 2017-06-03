import {ToolModel} from './tool.model';

export class UserModel {
    _id?: string;
    username: string;
    email: string;
    image?: string;
    password: string;
    favorites: ToolModel[];

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.favorites = [];
    }
}
