'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _list = require('./lib/list.js');

var _list2 = _interopRequireDefault(_list);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _cookie = require('./expand/cookie.js');

var _wxPush = require('./wx/wxPush.js');

var _wxPush2 = _interopRequireDefault(_wxPush);

var _session = require('./expand/session.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//let url = 'http://j5ntpe.natappfree.cc/index';
var handle = function handle() {
    //req.query get参数
    _list2.default.get('/get', function (req, res) {
        // console.log(req)
        console.log(req.query);
    });
    //requery.body post参数
    _list2.default.post('/post', function (req, res) {
        switch (req.msType) {
            case 'json':
                console.log(req.body);
                break;
            case 'xml':
                (0, _wxPush2.default)(req.xml);
                break;
        }
    });
    // app.get('/abc',(req,res) => {
    //     console.log(req.query);
    //     res.write('abcdefg');
    // });
};
//import getCode from './wx/getCode.js';
//import getToken from './wx/getToken.js';
//import getUserInfo from './wx/getUserInfo.js';
exports.default = handle;