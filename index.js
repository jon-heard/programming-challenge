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
}
function execFrame() {
    requestAnimationFrame(execFrame);
    renderer.render(stage);
}
initialize();
},{"pixi.js":undefined}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLDhDQUE4QztBQUM5QyxJQUFPLElBQUksV0FBVyxTQUFTLENBQUMsQ0FBQztBQUVqQyxjQUFjO0FBQ1YsU0FBUztBQUNULElBQU0sUUFBUSxHQUFzQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RFLElBQU0sS0FBSyxHQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsRCxJQUFJLFNBQWEsQ0FBQztBQUNsQixpQkFBaUI7QUFDakIsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDMUIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLGFBQWE7QUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbEIsaUJBQWlCO0FBQ2pCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDbkI7SUFDSSxTQUFTO0lBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLFdBQVc7SUFDWCxJQUFJLENBQUMsTUFBTTtTQUNOLEdBQUcsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUM7U0FDcEMsR0FBRyxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQztTQUNuQyxHQUFHLENBQUMsVUFBVSxFQUFFLHFCQUFxQixDQUFDO1NBQ3RDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUM7U0FDNUMsR0FBRyxDQUFDLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztTQUMxQyxHQUFHLENBQUMsWUFBWSxFQUFFLHVCQUF1QixDQUFDO1NBQzFDLEdBQUcsQ0FBQyxNQUFNLEVBQUssaUJBQWlCLENBQUM7U0FDakMsSUFBSSxDQUFDLFVBQVUsTUFBMEIsRUFBRSxZQUFnQjtRQUN4RCxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUM5QyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDakQsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ2hELGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNoRCxhQUFhLEVBQUUsQ0FBQztRQUNoQixTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRDtJQUNJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbEYsSUFBSSxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUM1RCxJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQzVELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUNuQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRDtJQUNJLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVELFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5pbXBvcnQgUElYSSA9IHJlcXVpcmUoJ3BpeGkuanMnKTtcclxuXHJcbi8vIGdsb2JhbCB2YXJzXHJcbiAgICAvLyBzeXN0ZW1cclxuICAgIGNvbnN0IHJlbmRlcmVyOlBJWEkuV2ViR0xSZW5kZXJlciA9IG5ldyBQSVhJLldlYkdMUmVuZGVyZXIoMTI4MCwgNzIwKTtcclxuICAgIGNvbnN0IHN0YWdlOlBJWEkuQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICBsZXQgcmVzb3VyY2VzOmFueTtcclxuICAgIC8vIGdhbWUgY29uc3RhbnRzXHJcbiAgICBjb25zdCBCT0FSRF9PRkZTRVRfWCA9IDEwO1xyXG4gICAgY29uc3QgQk9BUkRfT0ZGU0VUX1kgPSA1MDtcclxuICAgIGNvbnN0IEJPQVJEX1BBRERJTkdfWCA9IDQ7XHJcbiAgICBjb25zdCBCT0FSRF9QQURESU5HX1kgPSA0O1xyXG4gICAgLy8gZ2FtZSBzdGF0ZVxyXG4gICAgdmFyIGJvYXJkU2l6ZSA9IDg7XHJcbiAgICAvLyBnYW1lIHJlc291cmNlc1xyXG4gICAgdmFyIGFycm93VGV4dHVyZXMgPSBbXTtcclxuICAgIHZhciBib2FyZCA9IFtdO1xyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgLy8gU3lzdGVtXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLnZpZXcpO1xyXG4gICAgLy8gVGV4dHVyZXNcclxuICAgIFBJWEkubG9hZGVyXHJcbiAgICAgICAgLmFkZCgndGlsZTEnLCAnaW1hZ2VzL3RpbGVfYmx1ZS5wbmcnKVxyXG4gICAgICAgIC5hZGQoJ3RpbGUyJywgJ2ltYWdlcy90aWxlX3JlZC5wbmcnKVxyXG4gICAgICAgIC5hZGQoJ2Fycm93X3VwJywgJ2ltYWdlcy9hcnJvd191cC5wbmcnKVxyXG4gICAgICAgIC5hZGQoJ2Fycm93X3JpZ2h0JywgJ2ltYWdlcy9hcnJvd19yaWdodC5wbmcnKVxyXG4gICAgICAgIC5hZGQoJ2Fycm93X2Rvd24nLCAnaW1hZ2VzL2Fycm93X2Rvd24ucG5nJylcclxuICAgICAgICAuYWRkKCdhcnJvd19sZWZ0JywgJ2ltYWdlcy9hcnJvd19sZWZ0LnBuZycpXHJcbiAgICAgICAgLmFkZCgnY2hpcCcsICAgICdpbWFnZXMvY2hpcC5wbmcnKVxyXG4gICAgICAgIC5sb2FkKGZ1bmN0aW9uIChsb2FkZXI6UElYSS5sb2FkZXJzLkxvYWRlciwgbmV3UmVzb3VyY2VzOmFueSkge1xyXG4gICAgICAgICAgICByZXNvdXJjZXMgPSBuZXdSZXNvdXJjZXM7XHJcbiAgICAgICAgICAgIGFycm93VGV4dHVyZXNbMF0gPSByZXNvdXJjZXMuYXJyb3dfdXAudGV4dHVyZTtcclxuICAgICAgICAgICAgYXJyb3dUZXh0dXJlc1sxXSA9IHJlc291cmNlcy5hcnJvd19yaWdodC50ZXh0dXJlO1xyXG4gICAgICAgICAgICBhcnJvd1RleHR1cmVzWzJdID0gcmVzb3VyY2VzLmFycm93X2Rvd24udGV4dHVyZTtcclxuICAgICAgICAgICAgYXJyb3dUZXh0dXJlc1szXSA9IHJlc291cmNlcy5hcnJvd19sZWZ0LnRleHR1cmU7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlQm9hcmQoKTtcclxuICAgICAgICAgICAgZXhlY0ZyYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoKSB7XHJcbiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGJvYXJkU2l6ZTsgKyt5KSB7XHJcbiAgICAgICAgYm9hcmRbeV0gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGJvYXJkU2l6ZTsgKyt4KSB7XHJcbiAgICAgICAgICAgIHZhciB0aWxlID0gKCh4ICsgeSkgJSAyID09IDApID8gcmVzb3VyY2VzLnRpbGUxLnRleHR1cmUgOiByZXNvdXJjZXMudGlsZTIudGV4dHVyZTtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uWCA9IHggKiAoNjQgKyBCT0FSRF9QQURESU5HX1gpICsgQk9BUkRfT0ZGU0VUX1g7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSB5ICogKDY0ICsgQk9BUkRfUEFERElOR19ZKSArIEJPQVJEX09GRlNFVF9ZO1xyXG4gICAgICAgICAgICBib2FyZFt5XVt4XSA9IG5ldyBQSVhJLlNwcml0ZSh0aWxlKTtcclxuICAgICAgICAgICAgYm9hcmRbeV1beF0ucG9zaXRpb24ueCA9IHBvc2l0aW9uWDtcclxuICAgICAgICAgICAgYm9hcmRbeV1beF0ucG9zaXRpb24ueSA9IHBvc2l0aW9uWTtcclxuICAgICAgICAgICAgYm9hcmRbeV1beF0uYXJyb3cgPSBuZXcgUElYSS5TcHJpdGUoYXJyb3dUZXh0dXJlc1syXSk7XHJcbiAgICAgICAgICAgIGJvYXJkW3ldW3hdLmFycm93LnR5cGUgPSAyO1xyXG4gICAgICAgICAgICBib2FyZFt5XVt4XS5hZGRDaGlsZChib2FyZFt5XVt4XS5hcnJvdyk7XHJcbiAgICAgICAgICAgIHN0YWdlLmFkZENoaWxkKGJvYXJkW3ldW3hdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWNGcmFtZSgpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShleGVjRnJhbWUpO1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHN0YWdlKTtcclxufVxyXG5cclxuaW5pdGlhbGl6ZSgpO1xyXG4iXX0=
