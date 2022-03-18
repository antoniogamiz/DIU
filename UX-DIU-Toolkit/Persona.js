/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.2 26/Feb/2022            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Sophie",
				Photo: "francesa.jpeg",
				Quote: "Eso es felicidad; ser absorvido por algo completo y grandioso.",
				Age: 29,
				Occupation: "Ingeniera Informática",
				Family: "Ninguna.",
				Location: "Alpes de Alta Provenza, Francia",
				Character: "Le gusta conocer gente durante actividades",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Conocer gente nueva", "Aprender más de historia", "Salir de copas", "Viajar", "Climas cálidos"],
				Frustrations: ["Soledad en su vida, en general.", "Solo puede ver monumentos histórios a través de fotografías.", "Vida nocturna poco desarrollada."],
				Bio: "Ella es de un pueblo de los Alpes, donde el ambiente es muy tranquilo y puede realizar muchas actividades deportivas. Sin embargo, la vida nocturna no es muy frecuente. Por lo que quiere visitar Granada, conocida por su fiesta, clima e historia.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 5 }

				],
                Contextos: "El trabajo remoto no le permite quedar con sus compañeros de trabajo. El ambiente frío y aislado de su pueblo hace que quiera un cambio de aires.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Steve",
				Photo: "empresario.jpeg",
				Quote: "La creatividad es un imperativo empresarial.",
				Age: 43,
				Occupation: "Empresario de Moderna",
				Family: "Pareja",
				Location: "Cambridge, USA",
				Character: "Serio, familiar, comprometido con su trabajo.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Ser un empresario de éxito", "Disfrutar de su familia", "Aprender español"],
				Frustrations: ["Dejar a su familia detrás en un viaje de negocios", "No asistir a fechas importantes (como un cumpleaños) debido al trabajo.", "La escasez de material médico tras la pandemia"],
				Bio: "Es un empresario de éxito que le gusta viajar con su familia. Por lo tanto, su familia siempre lo acompaña a los viajes de negocios, pero no pueden estar con él durante las horas de trabajo. Por lo tanto, zonas de ocio y tours son fundametales para su pareja. Ha tenido que venir a Granada a distribuir medicamentos.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 5 }

				],
                Contextos:   "Su objetivo de aprender español y el hecho de que haya numerosos hostels en Granada, hace que Steve siempre escoga oportunidades de negocio aquí." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])