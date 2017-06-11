(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jiboProgrammingChallenge = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/// <reference path="../typings/index.d.ts" />
var PIXI = require('pixi.js');
// global vars
// system
var renderer = new PIXI.WebGLRenderer(1280, 720);
var stage = new PIXI.Container();
var resources;
// game constants
var BOARD_OFFSET_X = 10;
var BOARD_OFFSET_Y = 50;
var BOARD_PADDING_X = 4;
var BOARD_PADDING_Y = 4;
// game state
var boardSize = 8;
// game resources
var arrowTextures = [];
var board = [];
function initialize() {
    // System
    document.body.appendChild(renderer.view);
    // Textures
    PIXI.loader
        .add('tile1', 'images/tile_blue.png')
        .add('tile2', 'images/tile_red.png')
        .add('arrow_up', 'images/arrow_up.png')
        .add('arrow_right', 'images/arrow_right.png')
        .add('arrow_down', 'images/arrow_down.png')
        .add('arrow_left', 'images/arrow_left.png')
        .add('chip', 'images/chip.png')
        .load(function (loader, newResources) {
        resources = newResources;
        arrowTextures[0] = resources.arrow_up.texture;
        arrowTextures[1] = resources.arrow_right.texture;
        arrowTextures[2] = resources.arrow_down.texture;
        arrowTextures[3] = resources.arrow_left.texture;
        generateBoard();
        execFrame();
    });
}
function generateBoard() {
    for (var y = 0; y < boardSize; ++y) {
        board[y] = [];
        for (var x = 0; x < boardSize; ++x) {
            var tile = ((x + y) % 2 == 0) ? resources.tile1.texture : resources.tile2.texture;
            var positionX = x * (64 + BOARD_PADDING_X) + BOARD_OFFSET_X;
            var positionY = y * (64 + BOARD_PADDING_Y) + BOARD_OFFSET_Y;
            board[y][x] = new PIXI.Sprite(tile);
            board[y][x].position.x = positionX;
            board[y][x].position.y = positionY;
            board[y][x].arrow = new PIXI.Sprite(arrowTextures[2]);
            board[y][x].arrow.type = 2;
            board[y][x].addChild(board[y][x].arrow);
            stage.addChild(board[y][x]);
        }
    }
    randomizeBoard();
}
function randomizeBoard() {
    for (var y = 0; y < boardSize; ++y) {
        for (var x = 0; x < boardSize; ++x) {
            var type = Math.floor(Math.random() * 4);
            board[y][x].arrow.texture = arrowTextures[type];
            board[y][x].arrow.type = type;
        }
    }
}
function execFrame() {
    requestAnimationFrame(execFrame);
    renderer.render(stage);
}
initialize();
},{"pixi.js":undefined}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLDhDQUE4QztBQUM5QyxJQUFPLElBQUksV0FBVyxTQUFTLENBQUMsQ0FBQztBQUVqQyxjQUFjO0FBQ1YsU0FBUztBQUNULElBQU0sUUFBUSxHQUFzQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RFLElBQU0sS0FBSyxHQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsRCxJQUFJLFNBQWEsQ0FBQztBQUNsQixpQkFBaUI7QUFDakIsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDMUIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLGFBQWE7QUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbEIsaUJBQWlCO0FBQ2pCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDbkI7SUFDSSxTQUFTO0lBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLFdBQVc7SUFDWCxJQUFJLENBQUMsTUFBTTtTQUNOLEdBQUcsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUM7U0FDcEMsR0FBRyxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQztTQUNuQyxHQUFHLENBQUMsVUFBVSxFQUFFLHFCQUFxQixDQUFDO1NBQ3RDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUM7U0FDNUMsR0FBRyxDQUFDLFlBQVks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QUUsQ0FBQztZQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVEO0lBQ0kscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCBQSVhJID0gcmVxdWlyZSgncGl4aS5qcycpO1xyXG5cclxuLy8gZ2xvYmFsIHZhcnNcclxuICAgIC8vIHN5c3RlbVxyXG4gICAgY29uc3QgcmVuZGVyZXI6UElYSS5XZWJHTFJlbmRlcmVyID0gbmV3IFBJWEkuV2ViR0xSZW5kZXJlcigxMjgwLCA3MjApO1xyXG4gICAgY29uc3Qgc3RhZ2U6UElYSS5Db250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgIGxldCByZXNvdXJjZXM6YW55O1xyXG4gICAgLy8gZ2FtZSBjb25zdGFudHNcclxuICAgIGNvbnN0IEJPQVJEX09GRlNFVF9YID0gMTA7XHJcbiAgICBjb25zdCBCT0FSRF9PRkZTRVRfWSA9IDUwO1xyXG4gICAgY29uc3QgQk9BUkRfUEFERElOR19YID0gNDtcclxuICAgIGNvbnN0IEJPQVJEX1BBRERJTkdfWSA9IDQ7XHJcbiAgICAvLyBnYW1lIHN0YXRlXHJcbiAgICB2YXIgYm9hcmRTaXplID0gODtcclxuICAgIC8vIGdhbWUgcmVzb3VyY2VzXHJcbiAgICB2YXIgYXJyb3dUZXh0dXJlcyA9IFtdO1xyXG4gICAgdmFyIGJvYXJkID0gW107XHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAvLyBTeXN0ZW1cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIudmlldyk7XHJcbiAgICAvLyBUZXh0dXJlc1xyXG4gICAgUElYSS5sb2FkZXJcclxuICAgICAgICAuYWRkKCd0aWxlMScsICdpbWFnZXMvdGlsZV9ibHVlLnBuZycpXHJcbiAgICAgICAgLmFkZCgndGlsZTInLCAnaW1hZ2VzL3RpbGVfcmVkLnBuZycpXHJcbiAgICAgICAgLmFkZCgnYXJyb3dfdXAnLCAnaW1hZ2VzL2Fycm93X3VwLnBuZycpXHJcbiAgICAgICAgLmFkZCgnYXJyb3dfcmlnaHQnLCAnaW1hZ2VzL2Fycm93X3JpZ2h0LnBuZycpXHJcbiAgICAgICAgLmFkZCgnYXJyb3dfZG93bicsICdpbWFnZXMvYXJyb3dfZG93bi5wbmcnKVxyXG4gICAgICAgIC5hZGQoJ2Fycm93X2xlZnQnLCAnaW1hZ2VzL2Fycm93X2xlZnQucG5nJylcclxuICAgICAgICAuYWRkKCdjaGlwJywgICAgJ2ltYWdlcy9jaGlwLnBuZycpXHJcbiAgICAgICAgLmxvYWQoZnVuY3Rpb24gKGxvYWRlcjpQSVhJLmxvYWRlcnMuTG9hZGVyLCBuZXdSZXNvdXJjZXM6YW55KSB7XHJcbiAgICAgICAgICAgIHJlc291cmNlcyA9IG5ld1Jlc291cmNlcztcclxuICAgICAgICAgICAgYXJyb3dUZXh0dXJlc1swXSA9IHJlc291cmNlcy5hcnJvd191cC50ZXh0dXJlO1xyXG4gICAgICAgICAgICBhcnJvd1RleHR1cmVzWzFdID0gcmVzb3VyY2VzLmFycm93X3JpZ2h0LnRleHR1cmU7XHJcbiAgICAgICAgICAgIGFycm93VGV4dHVyZXNbMl0gPSByZXNvdXJjZXMuYXJyb3dfZG93bi50ZXh0dXJlO1xyXG4gICAgICAgICAgICBhcnJvd1RleHR1cmVzWzNdID0gcmVzb3VyY2VzLmFycm93X2xlZnQudGV4dHVyZTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZCgpO1xyXG4gICAgICAgICAgICBleGVjRnJhbWUoKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZCgpIHtcclxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgYm9hcmRTaXplOyArK3kpIHtcclxuICAgICAgICBib2FyZFt5XSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgYm9hcmRTaXplOyArK3gpIHtcclxuICAgICAgICAgICAgdmFyIHRpbGUgPSAoKHggKyB5KSAlIDIgPT0gMCkgPyByZXNvdXJjZXMudGlsZTEudGV4dHVyZSA6IHJlc291cmNlcy50aWxlMi50ZXh0dXJlO1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb25YID0geCAqICg2NCArIEJPQVJEX1BBRERJTkdfWCkgKyBCT0FSRF9PRkZTRVRfWDtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IHkgKiAoNjQgKyBCT0FSRF9QQURESU5HX1kpICsgQk9BUkRfT0ZGU0VUX1k7XHJcbiAgICAgICAgICAgIGJvYXJkW3ldW3hdID0gbmV3IFBJWEkuU3ByaXRlKHRpbGUpO1xyXG4gICAgICAgICAgICBib2FyZFt5XVt4XS5wb3NpdGlvbi54ID0gcG9zaXRpb25YO1xyXG4gICAgICAgICAgICBib2FyZFt5XVt4XS5wb3NpdGlvbi55ID0gcG9zaXRpb25ZO1xyXG4gICAgICAgICAgICBib2FyZFt5XVt4XS5hcnJvdyA9IG5ldyBQSVhJLlNwcml0ZShhcnJvd1RleHR1cmVzWzJdKTtcclxuICAgICAgICAgICAgYm9hcmRbeV1beF0uYXJyb3cudHlwZSA9IDI7XHJcbiAgICAgICAgICAgIGJvYXJkW3ldW3hdLmFkZENoaWxkKGJvYXJkW3ldW3hdLmFycm93KTtcclxuICAgICAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoYm9hcmRbeV1beF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJhbmRvbWl6ZUJvYXJkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbWl6ZUJvYXJkKCkge1xyXG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBib2FyZFNpemU7ICsreSkge1xyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgYm9hcmRTaXplOyArK3gpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuICAgICAgICAgICAgYm9hcmRbeV1beF0uYXJyb3cudGV4dHVyZSA9IGFycm93VGV4dHVyZXNbdHlwZV07XHJcbiAgICAgICAgICAgIGJvYXJkW3ldW3hdLmFycm93LnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXhlY0ZyYW1lKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGV4ZWNGcmFtZSk7XHJcbiAgICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpO1xyXG59XHJcblxyXG5pbml0aWFsaXplKCk7XHJcbiJdfQ==
