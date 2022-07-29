import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { ParsedCommandLine } from 'typescript';

const Canvas = styled.canvas`
    display: block;
    margin: 0px auto;
    background: black;
`

// type Position = {
//     w:number;
//     h:number;
//     x:number;
//     y:number;
// }


// enum KeyBindings{
//     "Up" = 38,
//     "Down" = 40,
//     W = 87,
//     S = 83
// }

// use 1의 바 -> up/down 키보드 인식->백엔드로 post
// 공 컴포넌트
// user 2의 바 -> 백엔드에서 받아옴

const Ball = (ballPosition:number[], score:number[], xVel:number, yVel:number, context:any, leftY:number, rightY:number) => {

    const speed:number = 5;
    const cavansH = 400;
    const canvasW = 700;
    const ballSize : number = 10;
    const w : number = ballSize;
    const h : number = ballSize;
    const paddleH = 60;
    
    if(ballPosition[1] <= 10){
        yVel = 1;
    }
    if(ballPosition[1] + h >= cavansH - 10){
        yVel = -1;
    }
    if(ballPosition[0] <= 0){  
        ballPosition[0] = canvasW / 2 - w / 2;
        score[1] += 1;
    }
    if(ballPosition[0] + w >= canvasW){
        ballPosition[0] = canvasW / 2 - w / 2;
        score[0] += 1;
    }
    if(ballPosition[0] <= 40){
        if(ballPosition[1] >= leftY && ballPosition[1] + h <= leftY + paddleH){
            xVel = 1;
        }
    }
    if(ballPosition[0] + w >= canvasW - 40){
        if(ballPosition[1] >= rightY && ballPosition[1] + h <= rightY + paddleH){
            xVel = -1;
        }
    }
    ballPosition[0] += xVel * speed;
    ballPosition[1] += yVel * speed;
    context.fillStyle = "#fff";
    context.fillRect(ballPosition[0],ballPosition[1],ballSize,ballSize);
    return ([ballPosition[0], ballPosition[1], score[0], score[1], xVel, yVel]);
}

const leftPaddle = (arr:boolean[], context:any, y:number) => {
    
    const speed:number = 10;
    const canvasHeight = 400; // 하드코딩 
    const paddleWidth:number = 20;
    const paddleHeight:number = 60;
    const x :number = 20; // walloffset
    let yVel = 0;
    if(arr[1]===true){
    yVel = -1;
    if(y <= 20){
        yVel = 0
    }
    }else if(arr[0]===true){
        yVel = 1;
        if(y + paddleHeight >= canvasHeight - 20){
            yVel = 0;
        }
    }else{
        yVel = 0;
    }
    y += yVel * speed;
    context.fillStyle = "#fff";
    context.fillRect(x,y,paddleWidth,paddleHeight);
    return y;
}

const rightPaddle = (arr:boolean[], context:any, y:number) => {
    
    const speed:number = 10;
    const canvasHeight = 400; // 하드코딩 
    const canvasWidth = 700;
    const paddleWidth:number = 20;
    const paddleHeight:number = 60;
    const wallOffset:number = 20;
    const x:number = canvasWidth - (wallOffset + paddleWidth);
    let yVel = 0;
    if(arr[3] === true){
        yVel = -1;
    if(y <= 20){
        yVel = 0
    }
    }else if(arr[2] === true){
        yVel = 1;
        if(y + paddleHeight >= canvasHeight - 20){
            yVel = 0;
        }
    }else{
        yVel = 0;
    }
    y = y + yVel * speed;
    context.fillStyle = "#fff";
    context.fillRect(x,y,paddleWidth,paddleHeight);
    return y;
}



const Pong = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const keysPressed  = [false, false, false, false];
    const keys = ["ArrowDown", "ArrowUp", "s", "w"];
    const requestAnimationRef = useRef<number>(0);
    const canvas = canvasRef.current;
    const gameContext = canvas?.getContext("2d");
    let leftY = 400 / 2 - 20 / 2;
    let rightY = 400 / 2 - 20 / 2;
    const ballSize : number = 10;
    const ballPosition = [700/2 - 10/2, 400/2 - 10/2];
    const score = [0, 0];
    let arr = [...ballPosition, ...score, -1, 1];

    const drawBoardDetails = (context:any) =>{
        const canvasWidth = 700;
        const canvasHeight = 400;
        context.strokeStyle = "#fff";
        context.lineWidth = 5;
        context.strokeRect(10,10,canvasWidth - 20 ,canvasHeight - 20);
        for (var i = 0; i + 30 < canvasHeight; i += 30) {
            context.fillStyle = "#fff";
            context.fillRect(canvasWidth / 2 - 10, i + 10, 15, 20);
        }
        context.fillText(arr[2], 280, 50);
        context.fillText(arr[3], 390, 50);
    } 
 
    const update = ()=>{
        if (!gameContext)
            return;
        gameContext.font = "30px Orbitron";
        gameContext.fillStyle = "#000";
        gameContext.fillRect(0,0,700,400);
        drawBoardDetails(gameContext);
        leftY = leftPaddle(keysPressed, gameContext, leftY);
        rightY = rightPaddle(keysPressed, gameContext, rightY);
        arr = Ball([arr[0], arr[1]], [arr[2], arr[3]], arr[4], arr[5], gameContext, leftY, rightY);
    }
    const render = () => {
        update();
        if (arr[2] > 0 || arr[3] > 0)
        {
            gameContext?.fillText("Game Over", 280, 200);
            return ;
        }
        requestAnimationFrame(render);
    } 

    useEffect(() => {
        let idx;
        window.addEventListener("keydown", (e) => {
            if ((idx = keys.indexOf(e.key)) >= 0)
                keysPressed[idx] = true;
         });
         window.addEventListener("keyup", (e) => {
            if ((idx = keys.indexOf(e.key)) >= 0)
                keysPressed[idx] = false;
         })
         requestAnimationRef.current  = requestAnimationFrame(render);
         return () => cancelAnimationFrame(requestAnimationRef.current);
    }, [])

    return (
        <>
        <Canvas width="700" height="400" ref={canvasRef}/>
        </>
    );
}
export default Pong;

// 게임을 그려줘야 하는 경우
// 1. Player1 position 변경 -> keyevent 발생 -> 백엔드에 post
// 2. Player2 position 변경 -> 그리기 전에 백엔드에 요청
// 3. 볼의 포지션 변경
