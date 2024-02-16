import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller( 'auth' )
export class AuthController {
    constructor( private authService: AuthService ) { }

    @Post( '/signup' )
    signUp() {
        this.authService.singUp();
    }

    @Post( '/login' )
    login() {
        this.authService.logIn();
    }
}