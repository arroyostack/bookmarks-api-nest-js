import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthRepository } from "./auth.repository";

@Module( {
    controllers: [AuthController],
    providers: [AuthService, AuthRepository],
    imports: [PrismaModule],
} )
export class AuthModule {

}