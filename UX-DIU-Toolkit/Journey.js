/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2022            */
/*******************************************/

/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
		$scope.Grupo_ID ="DIU2.RAYSE";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/antoniogamiz/DIU";

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
            {
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Sophie",
                Photo: "francesa.jpeg",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Tiene 14 días de vacaciones y quiere conocer mundo",
                touch1: "Móvil",
                feel1: "3",
                con1: "Quiere ir a un sitio con fiesta, monumentos y muy soleado.",
                ima1: "cartoon-phone-sitting.png",

                /*** PASO #2: DECICION ***/
                goal2: "Busca en Reddit información sobre las maravillas del mundo y encuentra un foro donde hablan de la Alhambra",
                touch2: "Móvil (Reddit)",
                feel2: "4",
                con2: "No sabe español",
                ima2: "cartoon-deciding2.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Busca hosteles donde se suele alojar gente extranjera de habla inglesa",
                touch3: "Móvil (Google)",
                feel3: "2",
                con3: "No encuentra información sobre la nacionalidad de las personas que van a los hosteles",
                ima3: "cartoon-phoningangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Llama por teléfono a los sitios que ha encontrado para preguntar sobre el idioma",
                touch4: "Móvil",
                feel4: "3",
                con4: "Algunas páginas tenían la información de contacto escondida",
                ima4: "cartoon-phoning.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Intenta reservar en el primer hostel, después de que el receptionista la convence de que el idioma no será un problema ",
                touch5: "Móvil (webapp)",
                feel5: "4",
                con5: "No hay reservas para los días que ella tiene vacaciones",
                ima5: "cartoon-phone-sitting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Consigue que su compañera de trabajo le cambie las vacaciones y reserva en otra fecha",
                touch6: "Ordenador (cambio reserva OK)",
                feel6: "4",
                con6: "Ha tenido que retrasar sus vacaciones",
                ima6: "cartoon-PChard.png",



			},
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Steve",
                Photo: "empresario.jpeg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "necesita viajar a Granada para vender medicamnentos y quiero que lo acompañe su pareja",
                touch1: "Agenda",
                feel1: "4",
                con1: "comparar agendas con su pareja",
                ima1: "cartoon-writting2.png",

                /*** PASO #2: DECICION ***/
                goal2: "Busca en Internet hoteles para quedarse con su pareja",
                touch2: "Ordenador",
                feel2: "1",
                con2: "Son caros y están lejos de la zona donde va a trabajar. Ver las actividades es muy difícil.",
                ima2: "cartoon-PCangry.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Le pregunta a sus compañeros de trabajo y estos le hablan de los hosteles y lo divertidos que son en pareja.",
                touch3: "móvil",
                feel3: "3",
                con3: "Está preocupado por si a su mujer le gustará la idea",
                ima3: "cartoon-phone.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Investiga en Internet los diferentes hosteles",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay actividades interesantes.",
                ima4: "cartoon-PCtyping.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Se encuentra 3 opciones que encajan en sus preferencias",
                touch5: "Móvil",
                feel5: "3",
                con5: "Su pareja le dice que no le gustan mucho las webs que visita porque no dan demasiada información.",
                ima5: "cartoon-phone.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Decide llamar a los tres sitios y reserva en el hostel que le ofrece mayor número de actividades",
                touch6: "Ordenador (web)",
                feel6: "2",
                con6: "Ha tenido que coger notas de las actividades ya que en las webs son practicamente imposible verlas.",
                ima6: "cartoon-PCangry.png",

			}
		];

		$scope.model = $scope.Journeys[0];

	}])



