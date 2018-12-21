
var friendsData = require('../data/friends.js');

function apiRoutes(app) {
    app.get('api/friends', function(req, res){
        res.json(friendsData);
    });
    app.post('api/friends', function(req,res){

        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores:[]
        };
        var scoresArray = [];
        for(var i = 0; i < friendsData.length; i++){
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;

        var comparisonArray = [];
        for (var i = 0; i < friendsData.length; i++){
            var currentComp = 0;
            for(var h = 0; h < newFriend.scores.length; h++){
                currentComp += Math.abs(newFriend.scores[h] - friendsData[i].scores[h]);
            }
            comparisonArray.push(currentComp);
        }
        var bestMatch = 0;
        for(var i = 0; i < comparisonArray;i++){
            if (comparisonArray[i] <=comparisonArray[bestMatch]){
                bestMatch = i;
            }
        }
        var bestMatch = friendsData[bestMatch];

        res.json(bestMatch);

        friendsData.push(newFriend);
    });
}

module.exports = apiRoutes;