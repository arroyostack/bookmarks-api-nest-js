import { Body, Controller, Get, Header, Post, Req } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { AuthService } from "./auth.service";

@Controller( 'auth' )
export class AuthController {
    constructor( public authService: AuthService ) { }

    @Post( '/signup' )
    async signUp( @Body() dto: AuthDto ) {
        return this.authService.singUp( dto );
    }

    @Post( '/login' )
    async login( @Body() dto: AuthDto ) {
        return this.authService.logIn( dto );
    }
}