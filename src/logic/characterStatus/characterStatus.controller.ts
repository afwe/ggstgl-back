import { Controller, Get, Response, Post, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Service } from './characterStatus.service';
import { timeoutQuery } from '../../util/timeoutQuery';
@Controller('characterStatus')
export class CharacterStatusController{
    constructor(private readonly CharacterStatusService: Service){ }
    @Get('getAll')
    findAll(@Response() res) {
        timeoutQuery({
            callback: this.CharacterStatusService.findAll(),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('update')
    update(@Body() bodyData, @Response() res) {
        if(!bodyData.opponentId){
            bodyData.opponentId = -1;
        } 
        timeoutQuery({
            callback: this.CharacterStatusService.updateByCharacterIdAndOpponentId(bodyData),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('delete')
    delet(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CharacterStatusService.deleteById(bodyData.characterStatusId),
            time: 500,
            responseAnno: res
        });
    }
}