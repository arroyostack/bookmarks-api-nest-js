import { Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { AuthRepository } from "./auth.repository";

@Injectable()
export class AuthService {
    constructor( public authRepository: AuthRepository ) { }

    async singUp( dto: AuthDto ) {
        console.log( dto );
        return this.authRepository.singUp( dto );
    };

    async logIn( dto: AuthDto ) {
        return this.authRepository.logIn( dto );
    };

}