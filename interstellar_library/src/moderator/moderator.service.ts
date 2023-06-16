import { Injectable } from "@nestjs/common";

@Injectable()
export class ModeratorService {
    getHello(): string {
        return 'Hello Moderator!';
    }
}