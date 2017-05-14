'use strict';   
import app from './lib/list.js';
import querystring from 'querystring';
//import getCode from './wx/getCode.js';
//import getToken from './wx/getToken.js';
//import getUserInfo from './wx/getUserInfo.js';
import {get_cookie,set_cookie} from './expand/cookie.js'; 
import wxPush from './wx/wxPush.js';
import {set_session,get_session} from './expand/session.js';
//let url = 'http://j5ntpe.natappfree.cc/index';
let handle = function() {
   //req.query get参数
    app.get('/get', (req, res) => {
       // console.log(req)
        console.log(req.query)
    });
    //requery.body post参数
    app.post('/post',(req, res) => {
        switch (req.msType) {
            case 'json' :
                console.log(req.body);
                break;
            case 'xml' :
                wxPush(req.xml);
                break;
        }
    });
    // app.get('/abc',(req,res) => {
    //     console.log(req.query);
    //     res.write('abcdefg');
    // });
}
export default handle;
