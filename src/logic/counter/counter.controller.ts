import { Controller, Get, Response, Post, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Service } from './counter.service';
import { timeoutQuery } from '../../util/timeoutQuery';
@Controller('counter')
export class CounterController{
    constructor(private readonly CounterService: Service){ }
    @Get('getAll')
    findAll(@Response() res) {
        timeoutQuery({
            callback: this.CounterService.findAll(),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('update')
    create(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CounterService.update(bodyData),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('delete')
    delet(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CounterService.deleteById(bodyData.counterId),
            time: 500,
            responseAnno: res
        });
    }
    @Post('get')
    find(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CounterService.getById(bodyData.counterId),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('getByCharacterId')
    findByCharacterId(@Body() bodyData, @Response() res) {
        let callBack = async (characterId)=>{
            let counterList = await this.CounterService.findAll();
            counterList.filter(item=>item.characterId==characterId||item.opponentId==characterId);
            let repFunc = async()=>{
                return counterList;
            }
            return repFunc()
        }
        timeoutQuery({
            callback: callBack(bodyData.characterId),
            time: 2000,
            responseAnno: res
        });
    }
}