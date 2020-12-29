class Balls {
    constructor(x, y, r){
        var options = {
            restitution:0.4
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(matterWorld, this.body);
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }
    addScore(){
        var pos = this.body.position;
        if(pos.y>1090 && pos.y < 1120 && pos.x < 100){
          score = score+100;
          pos.y = 1300;
        }
        if(pos.y>1090 && pos.y < 1120 && pos.x < 200 && pos.x > 101){
            score = score + 200;
            pos.y = 1300;
        }
        if(pos.y>1090 && pos.y < 1120 && pos.x < 300 && pos.x > 201){
            score = score + 300;
            pos.y = 1300
        }
        if(pos.y>1090 && pos.y < 1120 && pos.x < 400 && pos.x > 301){
            score = score + 500;
            pos.y = 1300
        }
        if(pos.y>1090 && pos.y < 1120 && pos.x < 500 && pos.x > 401){
            score = score + 300;
            pos.y = 1300
        }
        if(pos.y>1090 && pos.y < 1120 && pos.x < 600 && pos.x > 501){
            score = score + 200;
            pos.y = 1300
        }
        if(pos.y>1090 && pos.y < 1120 && pos.x < 700 && pos.x > 501){
            score = score + 100;
            pos.y = 1300
        }
    }
    
}