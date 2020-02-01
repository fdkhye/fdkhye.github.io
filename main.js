var AM = new AssetManager();

function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
                 xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

Background.prototype.update = function () {
};




// inheritance 
function SailorMoon(game, spritesheet) {
    this.animation = new Animation(spritesheet, 39, 300, 9, 0.3, 9, true, 2);
    this.speed = 350;
    this.ctx = game.ctx;
    Entity.call(this, game, 20, 550);
}

SailorMoon.prototype = new Entity();
SailorMoon.prototype.constructor = SailorMoon;

SailorMoon.prototype.update = function () {
    //this.x += this.game.clockTick * this.speed;
    //if (this.x > 800) this.x = -230;
    //Entity.prototype.update.call(this);
}

SailorMoon.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}



function SailorMoonRibbon(game, spritesheet) {
    this.animation = new Animation(spritesheet, 39, 300, 9, 0.3, 9, true, 2);
    this.speed = 350;
    this.ctx = game.ctx;
    Entity.call(this, game, 100, 555);
}

SailorMoonRibbon.prototype = new Entity();
SailorMoonRibbon.prototype.constructor = SailorMoonRibbon;

SailorMoonRibbon.prototype.update = function () {
    //this.x += this.game.clockTick * this.speed;
    //if (this.x > 800) this.x = -230;
    //Entity.prototype.update.call(this);
}

SailorMoonRibbon.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


function SailorMoonAngel(game, spritesheet) {
    this.animation = new Animation(spritesheet, 42.57, 300, 9, 0.3, 9, true, 2);
    this.speed = 350;
    this.ctx = game.ctx;
    Entity.call(this, game, 183, 545);
}

SailorMoonAngel.prototype = new Entity();
SailorMoonAngel.prototype.constructor = SailorMoonAngel;

SailorMoonAngel.prototype.update = function () {
    //this.x += this.game.clockTick * this.speed;
    //if (this.x > 800) this.x = -230;
    //Entity.prototype.update.call(this);
}

SailorMoonAngel.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

// inheritance 
function NarutoRunning(game, spritesheet) {
    this.animation = new Animation(spritesheet, 67, 200, 4, 0.07, 4, true, 1);
    this.speed = 100;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 490);
}

NarutoRunning.prototype = new Entity();
NarutoRunning.prototype.constructor = NarutoRunning;

NarutoRunning.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

NarutoRunning.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


function Bomb(game, spritesheet) {
    this.animation = new Animation(spritesheet, 130, 130, 4, 0.1, 14, true, 1);
    this.speed = 100;
    this.ctx = game.ctx;
    Entity.call(this, game, 65, 40);
}

Bomb.prototype = new Entity();
Bomb.prototype.constructor = Bomb;

Bomb.prototype.update = function () {
    //this.x += this.game.clockTick * this.speed;
    //if (this.x > 800) this.x = -230;
    //Entity.prototype.update.call(this);
}

Bomb.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}



function NarutoRasengan(game, spritesheet) {
    this.animation = new Animation(spritesheet, 65, 200, 5, 0.25, 5, true, 1);
    this.speed = 100;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 50);
}

NarutoRasengan.prototype = new Entity();
NarutoRasengan.prototype.constructor = NarutoRasengan;

NarutoRasengan.prototype.update = function () {
    //this.x += this.game.clockTick * this.speed;
    //if (this.x > 800) this.x = -230;
    //Entity.prototype.update.call(this);
}

NarutoRasengan.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


function Moon(game, spritesheet) {
    this.animation = new Animation(spritesheet, 67.1, 67.1, 3, 1, 9, true, 2.5);
    this.speed = 100;
    this.ctx = game.ctx;
    Entity.call(this, game, 600, 40);
}

Moon.prototype = new Entity();
Moon.prototype.constructor = Moon;

Moon.prototype.update = function () {
    //this.x += this.game.clockTick * this.speed;
    //if (this.x > 800) this.x = -230;
    //Entity.prototype.update.call(this);
}

Moon.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


function KirbyJump(game, spritesheet) {
    this.animation = new Animation(spritesheet, 31.2, 80, 6, 0.3, 6, true, 1);
    this.speed = 100;
    this.ctx = game.ctx;
    Entity.call(this, game, 200, 300);
}

KirbyJump.prototype = new Entity();
KirbyJump.prototype.constructor =KirbyJump;

KirbyJump.prototype.update = function () {
    //this.x += this.game.clockTick * this.speed;
    //if (this.x > 800) this.x = -230;
    //Entity.prototype.update.call(this);
}

KirbyJump.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


function Jump(game, spritesheet) {
    this.animation = new Animation(spritesheet, 350, 400, 5, 0.09, 16, true, 1);
    this.speed = 100;
    this.ctx = game.ctx;
    Entity.call(this, game, 200, 200);
}

Jump.prototype = new Entity();
Jump.prototype.constructor =Jump;

Jump.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

Jump.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


AM.queueDownload("./img/sailor moon basic.png");
AM.queueDownload("./img/sailor moon ribbon.png");
AM.queueDownload("./img/sailor moon angel.png");
AM.queueDownload("./img/naruto running.png");
AM.queueDownload("./img/naruto rasengan.png");
AM.queueDownload("./img/bom.png");
AM.queueDownload("./img/moon.png");
AM.queueDownload("./img/kirby jump.png");
AM.queueDownload("./img/jump.png");

AM.queueDownload("./img/background.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background.png")));
    gameEngine.addEntity(new SailorMoon(gameEngine, AM.getAsset("./img/sailor moon basic.png")));
    gameEngine.addEntity(new SailorMoonRibbon(gameEngine, AM.getAsset("./img/sailor moon ribbon.png")));
    gameEngine.addEntity(new SailorMoonAngel(gameEngine, AM.getAsset("./img/sailor moon angel.png")));
    gameEngine.addEntity(new NarutoRunning(gameEngine, AM.getAsset("./img/naruto running.png")));
    gameEngine.addEntity(new NarutoRasengan(gameEngine, AM.getAsset("./img/naruto rasengan.png")));
    gameEngine.addEntity(new Bomb(gameEngine, AM.getAsset("./img/bom.png")));
    gameEngine.addEntity(new Moon(gameEngine, AM.getAsset("./img/moon.png")));
    gameEngine.addEntity(new KirbyJump(gameEngine, AM.getAsset("./img/kirby jump.png")));
    gameEngine.addEntity(new Jump(gameEngine, AM.getAsset("./img/jump.png")));
    

    console.log("All Done!");
});