import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2';
import { AuthDto } from "../dto";

@Injectable()
export class AuthRepository {
    constructor( public prisma: PrismaService ) { }

    async singUp( dto: AuthDto ) {
        // Generate hash.
        const hash = await argon.hash( dto.password );
        // Save to DB.
        const user = await this.prisma.user.create( {
            data: {
                email: dto.email,
                hash: hash,
            }
        } );

        console.log( user );

        return user;


    };

    async logIn() {

        return 'I am Login';
    };

}