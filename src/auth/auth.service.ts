import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor( private prisma: PrismaService ) { }
    logIn() {
        return 'I am Login';
    };

    singUp() {
        return 'I am Signup';
    };
}