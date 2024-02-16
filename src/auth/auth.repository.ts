import { ForbiddenException, Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2';
import { AuthDto } from "../dto";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthRepository {
    constructor( public prisma: PrismaService ) { }

    async singUp( dto: AuthDto ) {
        try {

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
        } catch ( error ) {
            // This prisma check is used for unique constraint violation.
            if ( error instanceof PrismaClientKnownRequestError ) {
                // This prisma error 'P2002' stands for unique constraint violation.
                if ( error.code === 'P2002' ) {
                    throw new ForbiddenException( 'Email already exists' );
                }
            }
        }
    };

    async logIn() {
        // find the user by email
        // if user dont exist throw error
        // compare password
        // if password is wrong throw error
        // id everything is ok return user

        return 'I am Login';
    };

}