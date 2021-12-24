import { Controller, Get, Response, Post, Body, Request } from '@nestjs/common';
import { Service } from './user.service';
import { timeoutQuery } from '../util/timeoutQuery';
import { cookieLife } from '../util/cookieOpt';
@Controller('user')
export class UserController{
    constructor(private readonly userService: Service){ }
    @Get('list')
    findAll(@Response() res) {
        res.cookie('username', 'aabbcc我是cookie', {maxAge: 1000*60*10, httpOnly: true});
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
    find(@Body() bodyData, @Request() req, @Response() res) {
        console.log(req);
        timeoutQuery({
            callback: this.userService.login(bodyData),
            time: 1000,
            responseAnno: res,
            successFunc:[
                ()=>{
                    res.cookie('userId', bodyData.userId, {maxAge: cookieLife, httpOnly: true, signed: true})
                }
            ]
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