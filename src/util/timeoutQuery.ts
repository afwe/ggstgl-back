const err = {
    code: 500,
    msg: 'nestjs数据查询超时/错误'
};
const emptySuccessResponse = {
    msg: 'success',
};
export const timeoutQuery = (props) => {
    const {callback, time, responseAnno, successFunc = []} = props;
    function queryTimeOut(time) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject(err);
            }, time);
        });
    };
    Promise.race([
        callback.then((response)=>{
            if(!response.msg){
                try{
                    successFunc.forEach(func=>{
                            func();
                    }) 
                }
                catch(err){
                    console.log(err);
                }
                if(!response){
                    responseAnno.send({
                        code: 200,
                        data: emptySuccessResponse
                    });
                } else{
                    responseAnno.send({
                        code: 200,
                        data: response
                });
                }
            }
            else{
                responseAnno.send({
                    code: 500,
                    data: response
                });
            }
        }).catch((err)=>{
            responseAnno.send(err);
        }),
        queryTimeOut(time).catch((err)=>{
            responseAnno.send(err);
        })
    ])
}