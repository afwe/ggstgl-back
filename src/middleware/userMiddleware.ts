import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response} from 'express';
@Injectable()
export class CookieMiddleware implements NestMiddleware{
    use(req: Request, resp: Response, next: Function) {
        let userId = req.signedCookies.userId;
        if(!userId || userId != req.body.userId){
            req.body.userId = userId;
            next();
        } else{
            resp.send({
                code: 500,
                msg: '未登录'
            })
        }
    }
}