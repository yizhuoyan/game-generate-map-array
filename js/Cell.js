class Cell{
	constructor(map,r,c) {
		this.map=map;
		this.r=r;
		this.c=c;
		this.w=map.cellWidth;
		this.h=map.cellHeight;
		this.x=this.r*map.cellWidth;
		this.y=this.c*map.cellHeight;
		this.spiritIndex=0;
		this.imageSpirits=map.game.imageSpirits;
	}
	paint(g){
		g.clearRect(this.x,this.y,this.w,this.h);
		//g.strokeRect(this.x,this.y);
		if(this.spiritIndex!==undefined){
			let sp=this.imageSpirits.get(this.spiritIndex);
			g.drawImage(this.imageSpirits.image,
				sp.x,sp.y,sp.w,sp.h,
				this.x,this.y,this.w,this.h
			);
		}
		g.strokeStyle="#cccccc";
		g.setLineDash([1,3]);
		g.strokeRect(this.x,this.y,this.w,this.h);
	}
	paintSpirit(index){
		this.spiritIndex=index;
		this.paint(this.map.g);
	}
	paintNextSpirit(){
		if(this.spiritIndex===undefined){
			this.spiritIndex=0;
		}
		this.spiritIndex++;
		if(this.spiritIndex>=this.imageSpirits.spirits.length){
			this.spiritIndex=0;
		}
		this.paint(this.map.g);
		
	}
}
			