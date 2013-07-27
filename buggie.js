var
    connectRoute = require('connect-route');
    connect = require('connect'),
    app = connect();

app.use(connect.static(__dirname))
   .use(connectRoute(function (router) {
    router.get('/', function (req, res, next) {
        res.statusCode = 302;
        res.setHeader('Location', 'index.html');
        res.end();
    });

    router.get('/bug/item/:id', function (req, res, next) {
        res.end('to return detail of No.'+req.params.id+' bug');
    });

    router.get('/bug/list', function (req, res, next) {
        res.end('to return list of bugs in json');
    });

    router.get('/bug/new', function (req, res, next) {
        res.end('to create a new bug issue');
    });

    router.get('/bug/fix/:id', function (req, res, next) {
        res.end('to mark No.'+req.params.id+' bug as fixed');
    });

    router.get('/bug/del/:id', function (req, res, next) {
        res.end('to delete No.'+req.params.id+' bug issue');
    });
}));

app.listen(3000);