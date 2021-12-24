import { Controller, Get, Response, Post, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Service } from './strategy.service';
import { timeoutQuery } from '../../util/timeoutQuery';
@Controller('strategy')
export class StrategyController{
    constructor(private readonly StrategyService: Service){ }
    @Get('getAll')
    findAll(@Response() res) {
        timeoutQuery({
            callback: this.StrategyService.findAll(),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('update')
    create(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.StrategyService.update(bodyData),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('delete')
    delet(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.StrategyService.deleteById(bodyData.strategyId),
            time: 500,
            responseAnno: res
        });
    }
    @Post('get')
    find(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.StrategyService.getById(bodyData.strategyId),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('getByCharacterId')
    findByCharacterId(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.StrategyService.getIds(bodyData.characterId, bodyData.opponentId),
            time: 1500,
            responseAnno: res
        });
    }
}