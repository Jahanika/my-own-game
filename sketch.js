// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;
var player1Score,player2Score

function preload() {
coinImg=loadAnimation("coin/1.PNG","coin/2.PNG","coin/3.PNG","coin/5.PNG")
treasureImg=loadImage("treasure.png")
diamondImg=loadImage("diamond.png")
daytime=loadImage("daytime.jpeg")
nighttime=loadImage("nightTime.jpeg")
C1=loadImage("c1.png")
C2=loadImage("c2.png")
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	
	player1 = createSprite(150, 100, 20, 20)
	player1.shapeColor = "red"
	player1.addImage(C1)
	player1.scale=0.06

	player2 = createSprite(180, 100, 20, 20)
	player2.shapeColor = "yellow"
	player2.addImage(C2)
	player2.scale=0.06

	player1Score=0
	player2Score=0

	coin1=createSprite(200,200,10,10)
	coin1.scale=0.3
	coin1.addAnimation("coin",coinImg)

	coin2=createSprite(500,200,10,10)
	coin2.scale=0.3
	coin2.addAnimation("coin",coinImg)

	coin3=createSprite(500,600,10,10)
	coin3.scale=0.3
	coin3.addAnimation("coin",coinImg)

	coin4=createSprite(700,300,10,10)
	coin4.scale=0.3
	coin4.addAnimation("coin",coinImg)

	coin5=createSprite(200,550,10,10)
	coin5.scale=0.3
	coin5.addAnimation("coin",coinImg)

	coin6=createSprite(750,500,10,10)
	coin6.scale=0.3
	coin6.addAnimation("coin",coinImg)

	coin7=createSprite(240,420,10,10)
	coin7.scale=0.3
	coin7.addAnimation("coin",coinImg)

	coin8=createSprite(700,600,10,10)
	coin8.scale=0.3
	coin8.addAnimation("coin",coinImg)

	coin9=createSprite(410,370,10,10)
	coin9.scale=0.3
	coin9.addAnimation("coin",coinImg)

	treasure1=createSprite(300,300,10,10)
	treasure1.addImage(treasureImg)
	treasure1.scale=0.2

	treasure2=createSprite(500,680,10,10)
	treasure2.addImage(treasureImg)
	treasure2.scale=0.2


	diamond1=createSprite(150,670,10,10)
	diamond1.addImage(diamondImg)
	diamond1.scale=0.08

	b1 = createSprite(100, 400, 5, 600)
	b1.shapeColor="white"
	b2 = createSprite(800, 400, 5, 600)
	b3 = createSprite(500, 100, 600, 5)
	b4 = createSprite(400, 700, 600, 5)
	b5 = createSprite(150, 180, 100, 5)
	b6 = createSprite(200, 160, 5, 40)
	b7 = createSprite(240, 200, 5, 100)
	b8 = createSprite(240, 220, 200, 5)
	b9 = createSprite(300, 140, 5, 80)
	b10 = createSprite(340, 180, 5, 80)
	b11 = createSprite(390, 175, 5, 150)
	b12 = createSprite(410, 250, 40, 5)
	b13 = createSprite(465, 170, 150, 5)
	b14 = createSprite(540, 215, 5, 95)
	b15 = createSprite(540, 140, 5, 5)
	b16 = createSprite(600, 240, 5, 200)
	b17 = createSprite(490, 340, 230, 5)
	b18 = createSprite(477, 290, 5, 95)
	b19 = createSprite(375, 340, 5, 95)
	b20 = createSprite(350, 370, 50, 5)
	b21 = createSprite(325, 345, 5, 50)
	b22 = createSprite(300, 320, 50, 5)
	b23 = createSprite(275, 300, 5, 50)
	b24 = createSprite(205, 275, 135, 5)
	b25 = createSprite(140, 245, 5, 55)
	b26 = createSprite(640, 260, 80, 5)
	b27 = createSprite(680, 260, 5, 130)
	b28 = createSprite(640, 140, 5, 80)
	b29 = createSprite(740, 200, 5, 150)
	b30 = createSprite(710, 230, 60, 5)
	b31 = createSprite(725, 380, 150, 5)
	b32 = createSprite(650, 380, 5, 100)
	b33 = createSprite(600, 400, 100, 5)
	b34 = createSprite(600, 450, 5, 100)
	b35 = createSprite(635, 500, 5, 100)
	b36 = createSprite(550, 470, 5, 150)
	b37 = createSprite(500, 430, 100, 5)
	b38 = createSprite(450, 430, 5, 100)
	b39 = createSprite(200, 400, 5, 250)
	b40 = createSprite(130, 340, 60, 5)
	b41 = createSprite(170, 390, 60, 5)
	b42 = createSprite(130, 440, 60, 5)
	b43 = createSprite(170, 490, 60, 5)
	b44 = createSprite(175, 590, 150, 5)
	b45 = createSprite(150, 615, 5, 50)
	b46 = createSprite(200, 675, 5, 50)
	b47 = createSprite(240, 615, 5, 50)
	b48 = createSprite(150, 570, 5, 50)
	b49 = createSprite(240, 570, 5, 50)
	b50 = createSprite(300, 395, 5, 150)
	b51 = createSprite(250, 400, 100, 5)
	b52 = createSprite(250, 400, 5, 80)
	b53 = createSprite(350, 450, 100, 5)
	b54 = createSprite(350, 475, 5, 100)
	b55 = createSprite(350, 500, 100, 5)
	b56 = createSprite(400, 510, 5, 50)
	b57 = createSprite(430, 630, 5, 140)
	b58 = createSprite(400, 600, 60, 5)
	b59 = createSprite(375, 625, 5, 50)
	b60 = createSprite(350, 650, 50, 5)
	b61 = createSprite(325, 625, 5, 50)
	b62 = createSprite(300, 600, 50, 5)
	b63 = createSprite(280, 650, 5, 100)
	b64 = createSprite(480, 650, 100, 5)
	b65 = createSprite(530, 630, 5, 60)
	b66 = createSprite(500, 505, 5, 150)
	b67 = createSprite(680, 520, 90, 5)
	b68 = createSprite(725, 510, 5, 50)
	b69 = createSprite(750, 535, 50, 5)
	b70 = createSprite(750, 585, 5, 100)
	b71 = createSprite(725, 635, 150, 5)
	b72 = createSprite(650, 620, 5, 80)
	b73 = createSprite(650, 580, 80, 5)
	b74 = createSprite(580, 655, 5, 90)
}
function draw() {
	background(nighttime);
	drawSprites();
	playerDirections()
	player1Collide()
	player2Collide()
	treasurePlayer1()
	treasurePlayer2()
	image(C1,width-300,100,50,50)
	image(C2,width-300,200,50,50)
	textSize(30)
	fill("255")
	text(player1Score,width-200,130)
	text(player2Score,width-200,230)
}
function changeDirection(player, x, y) {
	player.x = player.x + x
	player.y = player.y + y
}
function player1Collide() {
	player1.collide(b1)
	player1.collide(b2)
	player1.collide(b3)
	player1.collide(b4)
	player1.collide(b5)
	player1.collide(b6)
	player1.collide(b7)
	player1.collide(b8)
	player1.collide(b9)
	player1.collide(b10)
	player1.collide(b11)
	player1.collide(b12)
	player1.collide(b13)
	player1.collide(b14)
	player1.collide(b15)
	player1.collide(b16)
	player1.collide(b17)
	player1.collide(b18)
	player1.collide(b19)
	player1.collide(b20)
	player1.collide(b21)
	player1.collide(b22)
	player1.collide(b23)
	player1.collide(b24)
	player1.collide(b25)
	player1.collide(b26)
	player1.collide(b27)
	player1.collide(b28)
	player1.collide(b29)
	player1.collide(b30)
	player1.collide(b31)
	player1.collide(b32)
	player1.collide(b33)
	player1.collide(b34)
	player1.collide(b35)
	player1.collide(b36)
	player1.collide(b37)
	player1.collide(b38)
	player1.collide(b39)
	player1.collide(b40)
	player1.collide(b41)
	player1.collide(b42)
	player1.collide(b43)
	player1.collide(b44)
	player1.collide(b45)
	player1.collide(b46)
	player1.collide(b47)
	player1.collide(b48)
	player1.collide(b49)
	player1.collide(b50)
	player1.collide(b51)
	player1.collide(b52)
	player1.collide(b53)
	player1.collide(b54)
	player1.collide(b55)
	player1.collide(b56)
	player1.collide(b57)
	player1.collide(b58)
	player1.collide(b59)
	player1.collide(b60)
	player1.collide(b61)
	player1.collide(b62)
	player1.collide(b63)
	player1.collide(b64)
	player1.collide(b65)
	player1.collide(b66)
	player1.collide(b67)
	player1.collide(b68)
	player1.collide(b69)
	player1.collide(b70)
	player1.collide(b71)
	player1.collide(b72)
	player1.collide(b73)
	player1.collide(b74)
}
function player2Collide() {
	player2.collide(b1)
	player2.collide(b2)
	player2.collide(b3)
	player2.collide(b4)
	player2.collide(b5)
	player2.collide(b6)
	player2.collide(b7)
	player2.collide(b8)
	player2.collide(b9)
	player2.collide(b10)
	player2.collide(b11)
	player2.collide(b12)
	player2.collide(b13)
	player2.collide(b14)
	player2.collide(b15)
	player2.collide(b16)
	player2.collide(b17)
	player2.collide(b18)
	player2.collide(b19)
	player2.collide(b20)
	player2.collide(b21)
	player2.collide(b22)
	player2.collide(b23)
	player2.collide(b24)
	player2.collide(b25)
	player2.collide(b26)
	player2.collide(b27)
	player2.collide(b28)
	player2.collide(b29)
	player2.collide(b30)
	player2.collide(b31)
	player2.collide(b32)
	player2.collide(b33)
	player2.collide(b34)
	player2.collide(b35)
	player2.collide(b36)
	player2.collide(b37)
	player2.collide(b38)
	player2.collide(b39)
	player2.collide(b40)
	player2.collide(b41)
	player2.collide(b42)
	player2.collide(b43)
	player2.collide(b44)
	player2.collide(b45)
	player2.collide(b46)
	player2.collide(b47)
	player2.collide(b48)
	player2.collide(b49)
	player2.collide(b50)
	player2.collide(b51)
	player2.collide(b52)
	player2.collide(b53)
	player2.collide(b54)
	player2.collide(b55)
	player2.collide(b56)
	player2.collide(b57)
	player2.collide(b58)
	player2.collide(b59)
	player2.collide(b60)
	player2.collide(b61)
	player2.collide(b62)
	player2.collide(b63)
	player2.collide(b64)
	player2.collide(b65)
	player2.collide(b66)
	player2.collide(b67)
	player2.collide(b68)
	player2.collide(b69)
	player2.collide(b70)
	player2.collide(b71)
	player2.collide(b72)
	player2.collide(b73)
	player2.collide(b74)
}
function playerDirections() {
	if (keyDown(UP_ARROW)) {
		changeDirection(player1, 0, -2)
	}
	if (keyDown(DOWN_ARROW)) {
		changeDirection(player1, 0, 2)
	}
	if (keyDown(RIGHT_ARROW)) {
		changeDirection(player1, 2, 0)
	}
	if (keyDown(LEFT_ARROW)) {
		changeDirection(player1, -2, 0)
	}
	if (keyDown("W")) {
		changeDirection(player2, 0, -2)
	}
	if (keyDown("S")) {
		changeDirection(player2, 0, 2)
	}
	if (keyDown("D")) {
		changeDirection(player2, 2, 0)
	}
	if (keyDown("A")) {
		changeDirection(player2, -2, 0)
	}
}
function treasurePlayer1(){
	if(player1.isTouching(coin1)){
		coin1.destroy()
		player1Score+=10
	}
	if(player1.isTouching(coin2)){
		coin2.destroy()
		player1Score+=10
	}
	if(player1.isTouching(coin3)){
		coin3.destroy()
		player1Score+=10
	}
	if(player1.isTouching(coin4)){
		coin4.destroy()
		player1Score+=10
	}
	if(player1.isTouching(coin5)){
		coin5.destroy()
		player1Score+=10
	}
	if(player1.isTouching(coin6)){
		coin6.destroy()
		player1Score+=10
	}
	if(player1.isTouching(coin7)){
		coin7.destroy()
		player1Score+=10
	}
	if(player1.isTouching(coin8)){
		coin8.destroy()
		player1Score+=10
	}
	if(player1.isTouching(treasure1)){
		treasure1.destroy()
		player1Score+=50
	}
	if(player1.isTouching(treasure2)){
		treasure2.destroy()
		player1Score+=50
	}
	if(player1.isTouching(diamond1)){
		diamond1.destroy()
		player1Score+=100
	}
}
function treasurePlayer2(){
	if(player2.isTouching(coin1)){
		coin1.destroy()
		player2Score+=10
	}
	if(player2.isTouching(coin2)){
		coin2.destroy()
		player2Score+=10
	}
	if(player2.isTouching(coin3)){
		coin3.destroy()
		player2Score+=10
	}
	if(player2.isTouching(coin4)){
		coin4.destroy()
		player2Score+=10
	}
	if(player2.isTouching(coin5)){
		coin5.destroy()
		player2Score+=10
	}
	if(player2.isTouching(coin6)){
		coin6.destroy()
		player2Score+=10
	}
	if(player2.isTouching(coin7)){
		coin7.destroy()
		player2Score+=10
	}
	if(player2.isTouching(coin8)){
		coin8.destroy()
		player2Score+=10
	}
	if(player2.isTouching(treasure1)){
		treasure1.destroy()
		player2Score+=50
	}
	if(player2.isTouching(treasure2)){
		treasure2.destroy()
		player2Score+=50
	}
	if(player2.isTouching(diamond1)){
		diamond1.destroy()
		player2Score+=100
	}
}