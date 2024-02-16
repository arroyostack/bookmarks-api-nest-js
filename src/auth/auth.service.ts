import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

    logIn() {
        return 'I am Login';
    };

    singUp() {
        return 'I am Signup';
    };
}