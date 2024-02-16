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
                },
                select: {
                    email: true,
                    id: true,
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

    async logIn( dto: AuthDto ) {
        // find the user by email
        const user = await this.prisma.user.findUnique( {
            where: {
                email: dto.email
            }
        } );
        // if user dont exist throw error
        if ( !user )
            throw new ForbiddenException( 'User not found' );
        // Compare password with argon compare function.
        const pwMatches = await argon.verify( user.hash, dto.password );
        // If password is wrong throw error.
        if ( !pwMatches )
            throw new ForbiddenException( 'Password is wrong' );
        // id everything is ok return user


        delete user.hash;

        return user;
    };

}