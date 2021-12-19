import { Controller, Get, Response, Post, HttpCode, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import {  FileInterceptor } from '@nestjs/platform-express';
import { Service } from './character.service';
import { timeoutQuery } from '../util/timeoutQuery';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { nanoid } from 'nanoid';
@Controller('character')
export class CharacterController{
    constructor(private readonly CharacterService: Service){ }
    @Get('getAll')
    findAll(@Response() res) {
        timeoutQuery({
            callback: this.CharacterService.findAll(),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('update')
    createCat(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CharacterService.update(bodyData),
            time: 500,
            responseAnno: res
        });
    }
    @Post('img')
    @UseInterceptors(FileInterceptor("file"))
    saveImg(@UploadedFile() file, @Body() bodyData, @Response() res) {
        console.log(file);
        const newName = nanoid();
        const writeImg = createWriteStream(join(__dirname, '..', 'img', `${newName}`+file.originalname.substring(file.originalname.lastIndexOf('.'))));
        writeImg.write(file.buffer);
        timeoutQuery({
            callback: this.CharacterService.get(bodyData.id),
            time: 500,
            responseAnno: res
        });
    }
    @Get('update')
    p1(@Response() res) {
        timeoutQuery({
            callback: this.CharacterService.update(1),
            time: 500,
            responseAnno: res
        });
    }
    @Get('get')
    p2(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CharacterService.get(bodyData.characterId),
            time: 500,
            responseAnno: res
        });
    }
}