import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response} from 'express';
@Injectable()
export class CookieMiddleware implements NestMiddleware{
    use(req: Request, resp: Response, next: Function) {
        console.log(req.signedCookies.userId);
        let userId = req.signedCookies.userId;
        if(!userId || userId != req.body.userId){
            resp.send({
                code: 500,
                msg: '未登录'
            })
        } else{
            next();
        }
    }
}