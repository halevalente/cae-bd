// JavaScript Document
carrossel={
	id:null,to:0,direcao:"x",callback:null,rodando:0,elementClone:[],elementMove:[],init:function(){this.write()},write:
	function(){
		if(typeof setAndAnimate=="undefined"){
			document.write('<script src="js/setandanimate.js"><\/script>')
		}
		document.write("<style>			ul.carrosselFim {margin:0;}			ul.carrosselFim li.cloneOrigem,			ul.carrosselComeco li.clonado {display:none;}		</style>")
	},mover:
	function(){
		var b=0,a=0,d;if(this.rodando==0){
			this.rodando=1;
			if(typeof(arguments[0])=="object"&&arguments[0].length>=1){
				arguments=arguments[0]
			}this.to=arguments[0]["to"];
			this.id=arguments[0]["id"];
			this.direcao=typeof arguments[0]["direcao"]!="undefined"?arguments[0]["direcao"]:"x";
			this.callback=typeof arguments[0]["callback"]!="undefined"?arguments[0]["callback"]:null;
			if(this.elementClone.length>0){
				this.deletarClone()
			}
			else{
				document.getElementById(this.id).style[this.direcao=="x"?"marginLeft":"marginTop"]=0
			}
			d=document.getElementById(this.id).getElementsByTagName("li").length;
			document.getElementById(this.id).style[this.direcao=="x"?"width":"height"]=(document.getElementById(this.id).					getElementsByTagName("li")[0][this.direcao=="x"?"offsetWidth":"offsetHeight"]*d)+"px";
			for(var c=0;c<((this.to<0)?this.to*-1:this.to);c++){
				this.elementMove[this.elementMove.length]=document.getElementById(this.id).getElementsByTagName("li")[((this.to>0)?c:d-c-1)];this.elementMove[this.elementMove.length-1].className="cloneOrigem";b+=this.elementMove[this.elementMove.length-1].offsetWidth;a+=this.elementMove[this.elementMove.length-1].offsetHeight;this.elementClone[this.elementClone.length]=this.elementMove[this.elementMove.length-1].cloneNode(true);this.elementClone[this.elementClone.length-1].className="clonado"
			}if(this.to>0){
				for(var c=0;c<((this.to<0)?this.to*-1:this.to);c++){
					document.getElementById(this.id).appendChild(this.elementClone[c])
				}
			}else{
				if(this.to<0){
					document.getElementById(this.id).className="carrosselComeco";
					for(var c=0;c<((this.to<0)?this.to*-1:this.to);c++){
						document.getElementById(this.id).insertBefore(this.elementClone[c],document.getElementById(this.id).getElementsByTagName("li")[0])
}document.getElementById(this.id).style[this.direcao=="x"?"marginLeft":"marginTop"]=((this.direcao=="x"?b:a)*-1)+"px";document.getElementById(this.id).className=""}}var e=this;setAndAnimate.change({objName:this.id+"Animate",propriedade:[document.getElementById(this.id).style,this.direcao=="x"?"marginLeft":"marginTop","px"],inicio:document.getElementById(this.id).style[this.direcao=="x"?"marginLeft":"marginTop"],fim:((this.to>0)?(this.direcao=="x"?b:a)*-1:0),callback:function(){document.getElementById(carrossel.id).className="carrosselFim";
			if(e.direcao=="x"){
				document.getElementById(carrossel.id).style.marginLeft=0
			}else{
				if(e.direcao=="y"){document.getElementById(carrossel.id).style.marginTop=0}}setTimeout(function(){carrossel.deletarClone();document.getElementById(carrossel.id).className="";carrossel.rodando=0;if(e.callback!=null){e.callback()}},200)},velocidade:0.85})}},deletarClone:function(){for(var a=0;a<((this.to<0)?this.to*-1:this.to);a++){this.elementMove[a].parentNode.removeChild(this.elementMove[a])}this.elementClone=[];this.elementMove=[]}};carrossel.init();carrossel.getRodando = function(){return this.rodando;}
