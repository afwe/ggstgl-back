import { Controller, Get, Response, Post, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Service } from './logStatus.service';
import { timeoutQuery } from '../../util/timeoutQuery';
@Controller('logStatus')
export class LogStatusController{
    constructor(private readonly LogStatusService: Service){ }
    @Get('get')
    findAll(@Response() res) {
        timeoutQuery({
            callback: this.LogStatusService.get(),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('update')
    create(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.LogStatusService.update(bodyData),
            time: 1500,
            responseAnno: res
        });
    }
}