const test = require('../components/test/routes');

//&Fucntion to manage routes
//?The parameter is sent in app.js (main project)
const router = (app)=>{
    app.use('/test', test);
}
module.exports = router;