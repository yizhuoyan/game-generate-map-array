class ImageSpirits{
	constructor(img) {
		this.image=img;
		this.spirits=[
			{x:40,y:20,w:20,h:20},
			{x:0,y:0,w:20,h:20},
			{x:20,y:0,w:20,h:20},
			{x:40,y:0,w:20,h:20},
			{x:60,y:0,w:20,h:20},
			{x:0,y:20,w:20,h:20},
			{x:20,y:20,w:20,h:20}
			
		];
	}
	get(index){
		return this.spirits[index];
	}
}