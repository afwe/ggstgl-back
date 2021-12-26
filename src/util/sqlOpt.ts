export const sqlOpt = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
    entities: [__dirname+'/**/*.entity{.js,.ts}'],
    synchronize: true
}