import { Controller, Get, Response, Post, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { timeoutQuery } from '../util/timeoutQuery';
@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){ }
    @Get('list')
    findAll(@Response() res) {
        res.cookie('username', 'aabbcc我是cookie', {maxAge: 1000*60*10, httpOnly: true, signed: true});
        timeoutQuery({
            callback: this.userService.findAll(),
            time: 500,
            responseAnno: res
        });
    }
    @Post('register')
    register(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.userService.register(bodyData),
            time: 500,
            responseAnno: res
        });
    }
    @Post('delete')
    delet(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.userService.deleteById(bodyData.componentId),
            time: 500,
            responseAnno: res
        });
    }
    @Post('login')
    find(@Body() bodyData, @Response() res) {
        res.cookie('username', 'aabbcc我是cookie', {maxAge: 1000*60*10, httpOnly: true, signed: true});
        timeoutQuery({
            callback: this.userService.login(bodyData.componentId),
            time: 1000,
            responseAnno: res
        });
    }
    @Post('update')
    update(@Body() bodyData, @Response() res) {
        timeoutQuery({
            callback: this.userService.update(bodyData),
            time: 500,
            responseAnno: res
        });
    }
}