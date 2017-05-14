'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_session = exports.set_session = undefined;

var _redis2 = require('redis');

var _redis3 = _interopRequireDefault(_redis2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createRedisClient = function createRedisClient() {
    var _redis = _redis3.default.createClient();
    _redis.on('error', function (err) {
        console.log(err);
    });
    return _redis;
};
/**
session = {
    from : user/track
    type : redis,
    key : random,
    value : uerinfo
    time: ms
}
*/
var set_session = function set_session(session) {
    session.time = session.time || 1 * 1000 * 3600;
    switch (session.type) {
        case 'redis':
            createRedisClient().hset(session.from, session.key, session.value);
            setTimeout(function () {
                createRedisClient().hdel(session.from, session.key);
            }, session.time);
            break;
        case 'file':
            break;
    }
};
/**
session = {
    from : user/track
    type : redis,
    key : random
}
*/
var get_session = function get_session(session) {
    return new Promise(function (resolve, reject) {
        switch (session.type) {
            case 'redis':
                createRedisClient().hget(session.from, session.key, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        resolve(data);
                    }
                });
                break;
            case 'file':
                break;
        }
    });
};
exports.set_session = set_session;
exports.get_session = get_session;