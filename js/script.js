let dinheiro = 0;
let mps = 1;
let mpc = 1;
let c = 0;
let gem = 0;


function buyed(){
	setInterval(function(){
		dinheiro += mps;
		c += 0.001;
		$('#HUD').html("<p>" + dinheiro.toFixed(2) + "</p>");
	}, 1000);
}

$(document).ready(function(){	
	$('#inimigo').click(function(){
		dinheiro += mpc;
		$('#HUD').html("<p>" + dinheiro.toFixed(2) + "</p>");
	});
	$("#shop-list li").click(function(){
		c+= 0.01;
		let texto = this.innerText.split('-');
		console.log(texto[1]);
		if(this.value <= dinheiro){
			mpc = (mpc * 1.5);
			dinheiro -= this.value;
			$('#HUD').html("<p>" + dinheiro.toFixed(2) + "</p>");
			this.value *= 2;
			$(this).html('$ <span id="v1">' + this.value + '</span> - ' + texto[1] + ' - <span id="g1">'+ mpc.toFixed(2) + '</span>/c');
		}else{
			alert("Dinheiro insuficiente");
		}
	});

	$("#gem-list li").click(function(){
		c+= 0.01;
		console.log(this);
		if(this.value <= gem){
			buyed();
			let texto = this.innerText.split('-');
			console.log(texto[1]);
			mps = (mps * 1.1);
			gem -= this.value;
			$('#HUD').html("<p>" + gem + "</p>");
			this.value *= 2;
			$(this).html('$ <span id="v1">' + this.value + '</span> - ' + texto[1] + ' - <span id="g1">'+ mps.toFixed(2) + '</span>/s');
		}else{
			alert("Dinheiro insuficiente");
		}
	});
});