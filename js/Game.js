class Game{
	constructor(cvs) {
	    this.cvs=cvs;
		this.g=cvs.getContext("2d");
		this.map;
		this.imageSpirits;
	}
	
	setImageSpirits(img){
		this.imageSpirits=new ImageSpirits(img);
	}
	initMap(rows,cols){
		this.map=new Map(this,rows,cols);
		this.map.paint(this.g);
	}
	loadMap(mapArray){
		let rows=mapArray[0].length;
		let cols=mapArray.length;
		this.map=new Map(this,rows,cols);
		let cells=this.map.cells;
		for(let i=0;i<cells.length;i++){
			for(let j=0;j<cells[i].length;j++){
				let cell=cells[i][j];
				cell.spiritIndex=mapArray[i][j];
			}
		}
		this.map.paint(this.g);
	}
	getCells(){
		return this.map.cells;
	}
	start(){
		this.g.strokeStyle="black";
	}
}