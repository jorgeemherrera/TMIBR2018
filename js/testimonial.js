//Smooth Animation | Author: Jorge Eliecer Munoz Herrera
//Resource: w3Schools
$(document).ready(function(){
	//Agregar smooth scrolling a todos los enlaces
	$('a').on('click', function(evento){
		//Estar seguro que this.hash tiene un valor antes de anular el comportamiento predeterminado
		if(this.hash !== ""){
			//Prevenir comportamiento predeterminado en el clic
			evento.preventDefault();
		//Almacenar el hash
		var hash = this.hash;

		//Usar metodo jQuery animate() para agregar smooth page scroll
		//el numero opcion es (800) especifica el numero de milisegundos que toma el scroll hasta el area definida en el enlace
		$('html, body').animate({
			scrollTop: $(hash).offset().top}, 800, function(){

			//agregar el hash (#) a la url cuando termine el scroll
			window.location.hash = hash;
		});
	}//end if
	});
});
