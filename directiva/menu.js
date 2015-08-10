app.directive('menuPrincipal', function() {
	console.log("Directiva");
	return {
		scope: {
			jsonMenu: '=?',
			bloquearMenu: '=?',
			menuAbierto: '=?',
			menuActual: '=?'
		},
		restrict: 'E',
		replace: 'true',
		templateUrl: 'directiva/menu-plantilla.html',
		link: function(scope, elem, attrs) {
			//Variables iniciales
			scope.TituloMenu = "";
			scope.menuActual = scope.menuActual ? scope.menuActual : "0";  
			scope.ElementosMenuIzquierda = [];
			scope.OpcionesMenuIzquierda = [];
			
			//Funciones
			scope.AbrirMenu = function(){
				scope.ClaseMenu = "AbrirMenu";
				scope.menuAbierto = true;
			};
			
			scope.CerrarMenu = function(){
				scope.ClaseMenu = "";
				scope.menuAbierto = false;
			};
			
			scope.AsignarUbicacionMenu = function(menuID){
				console.log(scope.menuActual,menuID);
				if(scope.menuActual.indexOf(menuID) == 0 && scope.menuActual !== menuID){ //devolver
					console.log("Devolver");
					var DiferenciaNiveles = scope.menuActual.split(".").length - menuID.split(".").length;
					var UltimoMenu;
					for(var index=0; index < DiferenciaNiveles; index++)
						UltimoMenu = scope.ElementosMenuIzquierda.pop();
					scope.OpcionesMenuIzquierda = scope.ElementosMenuIzquierda[scope.ElementosMenuIzquierda.length-1].subMenus;
					scope.menuActual = menuID;
				}
				if(menuID.indexOf(scope.menuActual) == 0 && scope.menuActual !== menuID){ //adelantar
					console.log("Adelantar");
					var NivelMenuID = $(menuID.split(".")).not(scope.menuActual.split(".")).get();
					var id = scope.menuActual+".";
					do{
						id += NivelMenuID.shift();
						var url = scope.OpcionesMenuIzquierda[scope.OpcionesMenuIzquierda.length-1].url;
						scope.AsignarElementosActuales(id,url);
						id += ".";
					}while(NivelMenuID.length >= 1);
					scope.menuActual = menuID;
				}
				if(scope.menuActual !== menuID){ //cambio de menú
					console.log("Cambio menú");
					//AsignarMarcador(menuID);
					ReiniciarMenu();
					var NivelMenuID = menuID.split(".");
					var id = "";
					scope.OpcionesMenuIzquierda = scope.jsonMenu.menu;
					for(var index in scope.OpcionesMenuIzquierda){
						if(scope.OpcionesMenuIzquierda[index].menuID == NivelMenuID[0]){
							scope.TituloMenu = scope.OpcionesMenuIzquierda[index].nombre;
							break;
						}
					}
					do{
						id += NivelMenuID.shift();
						scope.OpcionesMenuIzquierda = BuscarModulo(scope.OpcionesMenuIzquierda,id);
						id += ".";
					}while(NivelMenuID.length >= 1);
					scope.menuActual = menuID;
				}
			};
			
			scope.ClaseElementoMenu = function(menuId){
				if(menuId.split('.').length == 1)
					return "fa-long-arrow-down";
				if(scope.ElementosMenuIzquierda[scope.ElementosMenuIzquierda.length-1].menuId == menuId)
					return "fa-long-arrow-right";
				if(menuId.split('.').length > 1)
					return "fa-arrows-v";
			};
			
			scope.AsignarElementosActuales = function(menuID,url){
				scope.menuActual = menuID;
				var Res = BuscarModulo(scope.OpcionesMenuIzquierda,menuID);
				if(Res.length > 0)
					scope.OpcionesMenuIzquierda = Res;
				else{
					RedireccionarPagina(url);
					scope.OpcionesMenuIzquierda = [];
				}
			};
			
			var BuscarModulo = function(MenuActual,menuID){
				for(var modulo in MenuActual){
					if(MenuActual[modulo].menuID == menuID){
						ActualizarMenu(MenuActual[modulo]);
						return MenuActual[modulo].subMenus;
					}
				}
				console.warn("!Error!: No se encontró el menú: "+menuID,MenuActual);
			};
			
			var RedireccionarPagina = function(url){
				console.info("Redireccionar a: "+url);
			};
			
			var ActualizarMenu = function(menu){
				scope.ElementosMenuIzquierda.push(menu);
			};
			
			var ReiniciarMenu = function(){
				scope.ElementosMenuIzquierda = [];
			};
			
			var CalcularAltura = function(){
				var NumModulos = scope.jsonMenu.menu.length;
				scope.AlturaElementoMenu = {'height': 100/NumModulos + '%'};
			};
			
			var CargarMenu = function(){
				CalcularAltura();
				scope.AsignarUbicacionMenu("1");
			};
			
			//Listeners
			scope.$watch('jsonMenu', function (jsonMenu) {
				console.log("Cambio de estructura de menú: ",jsonMenu);
				CargarMenu();
			});	
			
			scope.$watch('menuActual', function (menuActual) {
				if(menuActual){
					console.log("Cambio de ubicación de menú: ",menuActual);
					scope.AsignarUbicacionMenu(menuActual);
				}
			});	
			
			scope.$watch('menuAbierto', function (AbrirMenu) {
				console.log("Cambio de apertura de menú: ",AbrirMenu);
				if(AbrirMenu)
					scope.AbrirMenu();
				else
					scope.CerrarMenu();
			});	
			
			scope.$watch('jsonMenu', function (jsonMenu) {
				console.log("Cambio de estructura de menú: ",jsonMenu);
				CargarMenu();
			});	
			
		}
	};
});