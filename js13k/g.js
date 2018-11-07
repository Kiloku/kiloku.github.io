var cv = document.getElementById('c')
var c = cv.getContext('2d')
var pl = {x:10, y:560, w:40, h:10}
var bt = {r:0, l:0, sp:0}
var bl = []
var tm = 100
var ivl = 100
var hp = 15
var enspd = 2;
var sc = 0;
function rnd(n, x) {
  return Math.random() * (x - n) + n;
}
var gv = 0;
var en = [{x:rnd(10,500), y: 40, w:40, h:10}]
dr()

var prsp = 0;
function dr(){
	tm-= 1;
	c.font = "32px Arial"
	if (tm <= 0)
	{
		if (ivl > 10)
		{
			ivl-=4;
		}
		tm = ivl
		let ps = rnd(10, 750)
		en.push({x:0+ps, y:0, w:40, h:10})
		enspd += 0.1;
	}
	c.fillStyle = '#000'
	c.fillRect(0, 0, 800, 600)
	c.fillStyle = '#fff'
	if (gv == 1)
	{	
		c.fillStyle = 'red'
		c.font = "72px Arial"
		c.fillText("YOU DIED", 230, 300)
		c.fillText("SCORE: " + sc, 230, 380)

		return;
	}
	c.fillRect(pl.x, pl.y, pl.w, pl.h)
	c.fillRect(pl.x + 15, pl.y-10, 10, 10)
	pl.x+=10*bt.r;
	pl.x-=10*bt.l;
	for (var i = 0; i < bl.length; i++)
	{
		let e = bl[i];
		c.fillRect(e.x , e.y , e.w, e.h);
		e.y -= 5;
	}
	c.fillText("Base Health: " + hp, 10, 32)
	c.fillText("Score: " + sc, 10, 64)


	c.fillStyle='red'
	for (var i = 0; i < en.length; i++)
	{
		let e = en[i];
		c.fillRect(e.x , e.y , e.w, e.h);
		e.y += enspd;
		for (var j = 0; j < bl.length; j++)
		{
			let z = bl[j];
			if (col(e,z))
			{
				en.splice(i,1);
				bl.splice(j,1);
				sc++;
			}
		}
		if (e.y > 600)
		{
			hp--;
			en.splice(i,1);
		}
	}

	if (bt.sp == 1 && prsp == 0)
		bl.push({x:pl.x+ 15, y:pl.y- 10, w:10, h:10});
	prsp = bt.sp;
	if (hp <= 0)
	{
		gv = 1;
	}
	

}

document.addEventListener("keydown", kd, false);
document.addEventListener("keyup", ku, false);

setInterval(dr, 33)
function kd(e) {
	let k = e.keyCode
    if(k == 39)
        bt.r = 1;
    else if(k == 37)
        bt.l = 1;
    if(k == 32)
    	bt.sp = 1;
}
function ku(e) {
	let k = e.keyCode
    if(k == 39)
        bt.r = 0;
    else if(k == 37)
        bt.l = 0;
    if(k == 32)
    	bt.sp = 0;
}
function col(r1, r2)
{
  return !(r2.x > r1.x + r1.w || 
	    r2.x + r2.w < r1.x || 
        r2.y > r1.y + r1.h ||
        r2.y + r2.h < r1.y);
}