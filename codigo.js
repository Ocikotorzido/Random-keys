const contenedor = document.querySelector(".flex-container");

document.querySelector(".button").value = "COMPRAR"




function crearLlaves (nombre,modelo,precio){
	
	img = "<img class='llave-img' src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b> pesos </p>`;
	return[img,nombre,modelo,precio];
}

const llave = crearLlaves("Llave1","modelo x","100");

const changHidden = (number)=>{
	document.querySelector(".key-data").value = number
}

let fragmento = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
	let modeloRandom = Math.round(Math.random()*100000);
	let precioRandom = Math.round(Math.random()*10+30);
	let llave = crearLlaves(`llave ${i}`,`modelo ${modeloRandom}`, precioRandom);
	
	
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{
		document.querySelector(".key-data").value = modeloRandom;
	});
	

	div.tabIndex = i;

	div.classList.add(`item-${i}`,`flex-item`);
	div.innerHTML += llave[0] + llave[1] + llave[2] + llave[3];
	
	fragmento.appendChild(div);


	// div.innerHTML = llave;


	// contenedor.appendChild += div;
	// contenedor.innerHTML += llave[0] + llave[1] + llave[2];
}

contenedor.appendChild(fragmento)
// contenedor.innerHTML = llave[0] + llave[1] + llave[2];





// document.write(llave[0],llave[1],llave[2]);