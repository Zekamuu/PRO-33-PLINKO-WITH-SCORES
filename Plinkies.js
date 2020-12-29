class Plinkies {
    constructor(x, y, r){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(matterWorld, this.body);
    }
    show(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x, pos.y, this.radius);
    }
    
}