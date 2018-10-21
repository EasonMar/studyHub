import path from 'path';
import _ from 'lodash';
let config = {
    // 以下两者等价
    // "viewDir": path.join(__dirname, '../views/') 
    "viewDir": path.join(__dirname, '..', 'views'),
    "staticDir": path.join(__dirname, '../assets')
}
const init = () => {
    if (process.env.NODE_ENV == 'development') {
        const localConfig = {
            port: 8081
        }

        config = _.extend(config, localConfig);
    }
    if (process.env.NODE_ENV == 'production') {
        const proConfig = {
            port: 80
        }
        config = _.extend(config, proConfig);
    }
    return config;
}

const result = init();

export default result;