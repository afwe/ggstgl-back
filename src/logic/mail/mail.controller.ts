import { Controller, Get, Response, Post, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Service } from './mail.service';
import { timeoutQuery } from '../../util/timeoutQuery';
@Controller('mail')
export class MailController{
    constructor(private readonly MailService: Service){ }
    @Get('getAll')
    findAll(@Response() res) {
        timeoutQuery({
            callback: this.MailService.findAll(),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('get')
    find(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.MailService.getById(bodyData.mailId),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('getByUserId')
    findByCharacterId(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.MailService.getById(bodyData.userId),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('read')
    read(@Body() bodyData, @Response() res){
        timeoutQuery({
            callback: this.MailService.read(bodyData.mailId),
            time: 1500,
            responseAnno: res
        });
    }
}