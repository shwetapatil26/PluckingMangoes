class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.treeThickness=10;
		
		this.image=loadImage("images/tree.png")
		this.treeBottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true})
		this.treeLeftBody=Bodies.rectangle(0, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:false})
		this.treeRightBody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:false})
		
		World.add(world, this.treeBottomBody)
		World.add(world, this.treeLeftBody)
		World.add(world, this.treeRightBody);

	}
	display()
	{
			var posBottom=this.treeBottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
			pop()
			
	}

}