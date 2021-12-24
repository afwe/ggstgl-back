import { Controller, Get, Response, Post, Body, Request, Inject} from '@nestjs/common';
import { Service } from './commit.service';
import { timeoutQuery } from '../../util/timeoutQuery';
import { ComponentService } from '../component/exportService.service';
import { StrategyService } from '../strategy/StrategyServer.service';
import { UserService } from '../user/exportService.service';
import { async } from 'rxjs';
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
    @Post('resolve')
    passCommit(@Body() bodyData, @Request() req, @Response() res){
        let callBack = async ()=>{
            let user = await this.userService.getById(bodyData.userId);
            if(user.isAdmin == 0){
                return async()=>{
                    return {
                        code: 500,
                        msg: '权限不足'
                    }
                }
            }
            let commit = await this.CommitService.getById(bodyData.commitId);
            if(commit.commitType==0){
                await this.componentService.update({
                    characterId: commit.characterId,
                    componentDescription: commit.commitDescription,
                    commiterId: commit.userId
                });
                return await this.CommitService.update({...commit,commitStatus: 1 });
            } else {
                await this.strategyService.createStrategy({
                    characterId: commit.characterId,
                    opponentId: commit.opponentId,
                    strategyDescription: commit.commitDescription,
                    commiterId: commit.userId
                });
                return await this.CommitService.update({...commit,commitStatus: 1 });
            }
        }
        timeoutQuery({
            callback: callBack(),
            time: 2000,
            responseAnno: res
        })
    }

    @Post('reject')
    rejectCommit(@Body() bodyData, @Request() req, @Response() res){
        let callBack = async ()=>{
            let user = await this.userService.getById(bodyData.userId);
            if(user.isAdmin == 0){
                return async()=>{
                    return {
                        code: 500,
                        msg: '权限不足'
                    }
                }
            }
            let commit = await this.CommitService.getById(bodyData.commitId);
            console.log('??');
            if(commit.commitType==0){
                return await this.CommitService.update({...commit,commitStatus: 2 });
            } else {
                return await this.CommitService.update({...commit,commitStatus: 2 });
            }
        };
        timeoutQuery({
            callback: callBack() ,
            time: 2000,
            responseAnno: res
        })
    }
}