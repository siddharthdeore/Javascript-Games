function object(mass,x,y,vx,vy) {
	this.mass=mass;
	this.x=x;
	this.y=y;
	this.vx=vx;
	this.vy=vy;
	this.color=[Math.random()*256 Math.random()*256 Math.random()*256];
}