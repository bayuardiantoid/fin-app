module.exports = function(bookshelf) {

    var UserModel = bookshelf.model('User', {
        tableName: 'users'
    });

    return UserModel;
};