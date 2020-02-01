module.exports = function(app)
{
    app.get('/api/login', function(req,res){
        res.end();
    });

    app.get('/api/logout', function(req, res){
        res.end();
    });

    app.get('/api/signin', function(req, res){
        res.end();
    });

    app.post('/api/books', function(req, res){
        res.end();
    });

    app.put('/api/books/:book_id', function(req, res){
        res.end();
    });

    app.delete('/api/books/:book_id', function(req, res){
        res.end();
    });

}