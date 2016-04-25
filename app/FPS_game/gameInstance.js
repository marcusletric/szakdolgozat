var GameInstance = function(gameID){
    var self = this;

    self.id = gameID;
    self.running = false;
    self.queueing = false;
    self.playerQueue = [];
    self.activePlayers = [];


    self.startGame = function(){
        self.running = true;
        self.queueing = false;
        self.activePlayers = [];
        self.activePlayers = self.activePlayers.concat(self.playerQueue);
    };

    self.endGame = function(){
        self.running = false;
        self.activePlayers = [];
    };

    self.inQueue = function(player){
        return self.playerQueue.find(function(queuedPlayer){
            return player.id == queuedPlayer.id;
        });
    };

    self.startQueueing = function(timestamp,queueTime){
        self.playerQueue = [];
        self.queueing = timestamp;
        self.queueTime = queueTime;
    };

    self.queue = function(player){
        console.log('Player ' + player.id + ' added to queue.');
        player.gameID = self.id;
        self.playerQueue.push(player);
    };

    self.unQueue = function(player) {
        self.playerQueue = self.playerQueue.filter(function(queuedPlayer){
            return player.id != queuedPlayer.id;
        });

        console.log('Player ' + player.id + ' removed from queue.');
    };
};

module.exports = GameInstance;
