const err = {
    code: 500,
    msg: 'nestjs数据查询超时/错误'
};
const emptySuccessResponse = {
    msg: 'success',
};
export const timeoutQuery = (props) => {
    const {callback, time, responseAnno} = props;
    function queryTimeOut(time) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject(err)
            }, time);
        });
    };
    Promise.race([
        callback.then((response)=>{
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
        }).catch((err)=>{
            responseAnno.send(err);
        }),
        queryTimeOut(time).catch((err)=>{
            responseAnno.send(err);
        })
    ])
}