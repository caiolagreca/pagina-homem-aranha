function addEventoAoCartao() {
  const elementoCartoes = document.querySelectorAll('.cartao');

  elementoCartoes.forEach(function(cartao) {
		 cartao.addEventListener('mouseenter', mouseHover);
		 cartao.addEventListener('mouseleave', mouseLeave);
  });
}

function mouseHover(){
	this.classList.add('cartao--hovered');
	document.body.id=`${this.id}-hovered`;
}

function mouseLeave(){
	this.classList.remove('cartao--hovered');
	document.body.id = '';
}

document.addEventListener('DOMContentLoaded', addEventoAoCartao);

function selecionaItemCarrosel(elementoBotaoSelecionado) {
	const itemSelecionado = elementoBotaoSelecionado.id;
	const carrosel = document.querySelector('.cartao-carrosel');
	const transform = carrosel.style.transform;
	const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
	const rotateYDeg = -120 * (Number(itemSelecionado) - 1);
	const novoTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

	carrosel.style.transform = novoTransform;

	const elementoBotaoActive = document.querySelector('.controlador__botao--active');
	elementoBotaoActive.classList.remove('.controlador__botao--active');
	elementoBotaoSelecionado.classList.add('.controlador__botao--active');
}