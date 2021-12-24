import { Controller, Get, Response, Post, Body, Request, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Service } from './commit.service';
import { timeoutQuery } from '../util/timeoutQuery';
import { ComponentService } from '../component/exportService.service';
import { StrategyService } from '../strategy/StrategyServer.service';
import { UserService } from '../user/exportService.service';
@Controller('commit')
export class CommitController{
    constructor(
        private readonly CommitService: Service,
        private readonly componentService: ComponentService,
        private readonly strategyService: StrategyService,
        private readonly userService: UserService
        ){ }
    @Get('getAll')
    findAll(@Response() res) {
        timeoutQuery({
            callback: this.CommitService.findAll(),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('update')
    create(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CommitService.update(bodyData),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('delete')
    delet(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CommitService.deleteById(bodyData.commitId),
            time: 500,
            responseAnno: res
        });
    }
    @Post('get')
    find(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CommitService.getById(bodyData.commitId),
            time: 1500,
            responseAnno: res
        });
    }
    @Post('getByCharacterId')
    findByCharacterId(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.CommitService.getById(bodyData.characterId),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('pass')
    passCommit(@Body() bodyData, @Request() req, @Response() res){
        timeoutQuery({
            callback: async ()=>{
                let user = await this.userService.getById(bodyData.userId);
                if(user.isAdmin == 0){
                    return {code: 400, msg: '权限不足'};
                }
                let commit = await this.CommitService.getById(bodyData.commitId);
                if(commit.commitType==0){
                    await this.componentService.createComponent(bodyData);
                    return await this.CommitService.update({...commit,commitStatus: 1 });
                } else {
                    await this.strategyService.createStrategy(bodyData);
                    return await this.CommitService.update({...commit,commitStatus: 1 });
                }
            },
            time: 2000,
            responseAnno: res
        })
    }

    @Post('reject')
    rejectCommit(@Body() bodyData, @Request() req, @Response() res){
        timeoutQuery({
            callback: async ()=>{
                let user = await this.userService.getById(bodyData.userId);
                if(user.isAdmin == 0){
                    return {code: 400, msg: '权限不足'};
                }
                let commit = await this.CommitService.getById(bodyData.commitId);
                if(commit.commitType==0){
                    return await this.CommitService.update({...commit,commitStatus: 2 });
                } else {
                    return await this.CommitService.update({...commit,commitStatus: 2 });
                }
            },
            time: 2000,
            responseAnno: res
        })
    }
}