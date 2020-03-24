class Map{
	constructor(game,x,y) {
		this.game=game;
		this.g=game.g;
		this.rows=x;
		this.cols=y;
		this.cells;
		this.cellWidth=game.cvs.width/this.rows;
		this.cellHeight=game.cvs.height/this.cols;
		this.init();
	}
	init(){
		let cells=this.cells=new Array(this.cols);
		for(let i=0;i<cells.length;i++){
			cells[i]=new Array(this.rows);
			for(let j=0;j<cells[i].length;j++){
				cells[i][j]=new Cell(this,j,i);
			}
		}
		
	}
	getCell(x,y){
		return this.cells[y][x];
	}
	paint(g){
		let cells=this.cells;
		g.lineWidth =1;
		for(let i=0;i<cells.length;i++){
			for(let j=0;j<cells[i].length;j++){
				cells[i][j].paint(g);
			}
		}
	}
}