import { Controller, Get, Response, Post, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Service } from './component.service';
import { timeoutQuery } from '../util/timeoutQuery';
@Controller('component')
export class ComponentController{
    constructor(private readonly ComponentService: Service){ }
    @Get('getAll')
    findAll(@Response() res) {
        timeoutQuery({
            callback: this.ComponentService.findAll(),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('update')
    create(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.ComponentService.update(bodyData),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('delete')
    delet(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.ComponentService.deleteById(bodyData.componentId),
            time: 500,
            responseAnno: res
        });
    }
    @Post('get')
    find(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.ComponentService.getById(bodyData.componentId),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('getByCharacterId')
    findByCharacterId(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.ComponentService.getById(bodyData.characterId),
            time: 1000,
            responseAnno: res
        });
    }
}