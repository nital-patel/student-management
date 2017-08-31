const options = {
    receive: (data, result, e) => {
        console.log(e.query);
    },
    query: (e) => {
        console.log(e.query);
    },
};

const pgp = require('pg-promise') (options);

function setDatabase() {
    if (process.env.NODE_ENV === 'management' || !process.env.NODE_ENV) {
        return pgp({
            database: 'student_development',
            port: 5432,
            host: 'localhost'
        });
    } else if (process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABASE_URL);
    }
}

const db = setDatabase();

module.exprots =db;