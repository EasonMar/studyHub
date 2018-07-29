import _ from 'lodash';
let config = {
    "viewDir": ""
}
const init = () => {
    if (process.env.NODE_ENV == 'development') {
        const localConfig = {
            port: 8081
        }

        config = _.extend(localConfig);
    }
    if (process.env.NODE_ENV == 'production') {
        const proConfig = {
            port: 80
        }
        config = _.extend(proConfig);
    }
}

const result = init();

export default result;