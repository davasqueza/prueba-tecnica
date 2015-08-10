var app = angular.module('myapp', ["ngAnimate","ui.bootstrap"]);

app.controller('MainCtrl', ['$scope','$http','$filter', function($scope,$http,$filter) {
	this.JSONMenu = {"menu":
		[
			{
				"menuID":"1",
				"nombre":"Menú 1",
				"FAicono": "camera",
				"subMenus":[
				{
					"menuID":"1.1",
					"nombre":"Sub-Menú 1.1",
					"url":"menu11",
					"subMenus":[
						{
							"menuID":"1.1.1",
							"nombre":"Sub-Menú 1.1.1",
							"url":"menu111",
							"subMenus":[]
						},
						{
							"menuID":"1.1.2",
							"nombre":"Sub-Menú 1.1.2",
							"url":"menu112",
							"subMenus":[]
						}
					]
				},
				{
					"menuID":"1.2",
					"nombre":"Sub-Menú 1.2",
					"url":"menu12",
					"subMenus":[]
				}
				]
			},
			{
				"menuID":"2",
				"nombre":"Menú 2",
				"FAicono": "cog",
				"subMenus":[{
					"menuID":"2.1",
					"nombre":"Sub-Menú 2.1",
					"url":"home",
					"subMenus":[]
				}]
			}
		]
	};
	
	this.AbrirMenu = false;
	this.DatosClima;
	
	this.CargarDatosClima = function(){
		var Ctrl = this;
		$http.get("https://api.forecast.io/forecast/5436bf331c317e405208625224c81659/37.8267,-122.423")
		.success(function(json){
			Ctrl.DatosClima = json;
		})
		.error(function(){
			alert("Hubo un error al intentar cargar los datos del clima, usando datos locales");
			Ctrl.DatosClima = {"latitude":37.8267,"longitude":-122.423,"timezone":"America/Los_Angeles","offset":-7,"currently":{"time":1439219197,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","nearestStormDistance":25,"nearestStormBearing":76,"precipIntensity":0,"precipProbability":0,"temperature":60.19,"apparentTemperature":60.19,"dewPoint":56.04,"humidity":0.86,"windSpeed":9.1,"windBearing":260,"visibility":6.53,"cloudCover":0.66,"pressure":1013.53,"ozone":316.66},"minutely":{"summary":"Mostly cloudy for the hour.","icon":"partly-cloudy-day","data":[{"time":1439219160,"precipIntensity":0,"precipProbability":0},{"time":1439219220,"precipIntensity":0,"precipProbability":0},{"time":1439219280,"precipIntensity":0,"precipProbability":0},{"time":1439219340,"precipIntensity":0,"precipProbability":0},{"time":1439219400,"precipIntensity":0,"precipProbability":0},{"time":1439219460,"precipIntensity":0,"precipProbability":0},{"time":1439219520,"precipIntensity":0,"precipProbability":0},{"time":1439219580,"precipIntensity":0,"precipProbability":0},{"time":1439219640,"precipIntensity":0,"precipProbability":0},{"time":1439219700,"precipIntensity":0,"precipProbability":0},{"time":1439219760,"precipIntensity":0,"precipProbability":0},{"time":1439219820,"precipIntensity":0,"precipProbability":0},{"time":1439219880,"precipIntensity":0,"precipProbability":0},{"time":1439219940,"precipIntensity":0,"precipProbability":0},{"time":1439220000,"precipIntensity":0,"precipProbability":0},{"time":1439220060,"precipIntensity":0,"precipProbability":0},{"time":1439220120,"precipIntensity":0,"precipProbability":0},{"time":1439220180,"precipIntensity":0,"precipProbability":0},{"time":1439220240,"precipIntensity":0,"precipProbability":0},{"time":1439220300,"precipIntensity":0,"precipProbability":0},{"time":1439220360,"precipIntensity":0,"precipProbability":0},{"time":1439220420,"precipIntensity":0,"precipProbability":0},{"time":1439220480,"precipIntensity":0,"precipProbability":0},{"time":1439220540,"precipIntensity":0,"precipProbability":0},{"time":1439220600,"precipIntensity":0,"precipProbability":0},{"time":1439220660,"precipIntensity":0,"precipProbability":0},{"time":1439220720,"precipIntensity":0,"precipProbability":0},{"time":1439220780,"precipIntensity":0,"precipProbability":0},{"time":1439220840,"precipIntensity":0,"precipProbability":0},{"time":1439220900,"precipIntensity":0,"precipProbability":0},{"time":1439220960,"precipIntensity":0,"precipProbability":0},{"time":1439221020,"precipIntensity":0,"precipProbability":0},{"time":1439221080,"precipIntensity":0,"precipProbability":0},{"time":1439221140,"precipIntensity":0,"precipProbability":0},{"time":1439221200,"precipIntensity":0,"precipProbability":0},{"time":1439221260,"precipIntensity":0,"precipProbability":0},{"time":1439221320,"precipIntensity":0,"precipProbability":0},{"time":1439221380,"precipIntensity":0,"precipProbability":0},{"time":1439221440,"precipIntensity":0,"precipProbability":0},{"time":1439221500,"precipIntensity":0,"precipProbability":0},{"time":1439221560,"precipIntensity":0,"precipProbability":0},{"time":1439221620,"precipIntensity":0,"precipProbability":0},{"time":1439221680,"precipIntensity":0,"precipProbability":0},{"time":1439221740,"precipIntensity":0,"precipProbability":0},{"time":1439221800,"precipIntensity":0,"precipProbability":0},{"time":1439221860,"precipIntensity":0,"precipProbability":0},{"time":1439221920,"precipIntensity":0,"precipProbability":0},{"time":1439221980,"precipIntensity":0,"precipProbability":0},{"time":1439222040,"precipIntensity":0,"precipProbability":0},{"time":1439222100,"precipIntensity":0,"precipProbability":0},{"time":1439222160,"precipIntensity":0,"precipProbability":0},{"time":1439222220,"precipIntensity":0,"precipProbability":0},{"time":1439222280,"precipIntensity":0,"precipProbability":0},{"time":1439222340,"precipIntensity":0,"precipProbability":0},{"time":1439222400,"precipIntensity":0,"precipProbability":0},{"time":1439222460,"precipIntensity":0,"precipProbability":0},{"time":1439222520,"precipIntensity":0,"precipProbability":0},{"time":1439222580,"precipIntensity":0,"precipProbability":0},{"time":1439222640,"precipIntensity":0,"precipProbability":0},{"time":1439222700,"precipIntensity":0,"precipProbability":0},{"time":1439222760,"precipIntensity":0,"precipProbability":0}]},"hourly":{"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","data":[{"time":1439218800,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":59.96,"apparentTemperature":59.96,"dewPoint":56.03,"humidity":0.87,"windSpeed":8.95,"windBearing":260,"visibility":6.39,"cloudCover":0.67,"pressure":1013.51,"ozone":316.83},{"time":1439222400,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":62.07,"apparentTemperature":62.07,"dewPoint":56.05,"humidity":0.81,"windSpeed":10.3,"windBearing":258,"visibility":7.6,"cloudCover":0.61,"pressure":1013.73,"ozone":315.32},{"time":1439226000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":63.93,"apparentTemperature":63.93,"dewPoint":56.15,"humidity":0.76,"windSpeed":10.63,"windBearing":259,"visibility":8.46,"cloudCover":0.62,"pressure":1013.89,"ozone":313.98},{"time":1439229600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":65.67,"apparentTemperature":65.67,"dewPoint":56.55,"humidity":0.72,"windSpeed":11.22,"windBearing":264,"visibility":8.41,"cloudCover":0.68,"pressure":1014,"ozone":313.02},{"time":1439233200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.57,"apparentTemperature":67.57,"dewPoint":57.16,"humidity":0.69,"windSpeed":11.57,"windBearing":267,"visibility":8.49,"cloudCover":0.52,"pressure":1014.07,"ozone":312.69},{"time":1439236800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":69.36,"apparentTemperature":69.36,"dewPoint":57.76,"humidity":0.67,"windSpeed":12.71,"windBearing":271,"visibility":8.69,"cloudCover":0.46,"pressure":1014.03,"ozone":312.74},{"time":1439240400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":70.7,"apparentTemperature":70.7,"dewPoint":58.03,"humidity":0.64,"windSpeed":13.86,"windBearing":274,"visibility":8.89,"cloudCover":0.43,"pressure":1013.84,"ozone":312.63},{"time":1439244000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":71.36,"apparentTemperature":71.36,"dewPoint":58.22,"humidity":0.63,"windSpeed":14.85,"windBearing":277,"visibility":8.98,"cloudCover":0.52,"pressure":1013.47,"ozone":312.17},{"time":1439247600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":71.17,"apparentTemperature":71.17,"dewPoint":58.17,"humidity":0.64,"windSpeed":15.53,"windBearing":281,"visibility":8.96,"cloudCover":0.56,"pressure":1013.01,"ozone":311.55},{"time":1439251200,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":70.37,"apparentTemperature":70.37,"dewPoint":58.13,"humidity":0.65,"windSpeed":15.76,"windBearing":283,"visibility":8.97,"cloudCover":0.64,"pressure":1012.71,"ozone":310.81},{"time":1439254800,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":69.26,"apparentTemperature":69.26,"dewPoint":58.14,"humidity":0.68,"windSpeed":15.23,"windBearing":284,"visibility":8.81,"cloudCover":0.73,"pressure":1012.59,"ozone":309.86},{"time":1439258400,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.36,"apparentTemperature":67.36,"dewPoint":58.04,"humidity":0.72,"windSpeed":14,"windBearing":284,"visibility":8.4,"cloudCover":0.76,"pressure":1012.59,"ozone":308.78},{"time":1439262000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":65.15,"apparentTemperature":65.15,"dewPoint":57.98,"humidity":0.78,"windSpeed":12.96,"windBearing":283,"visibility":7.65,"cloudCover":0.91,"pressure":1012.67,"ozone":307.84},{"time":1439265600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":63.87,"apparentTemperature":63.87,"dewPoint":57.99,"humidity":0.81,"windSpeed":11.75,"windBearing":283,"visibility":7.28,"cloudCover":0.92,"pressure":1012.9,"ozone":307.13},{"time":1439269200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":63.05,"apparentTemperature":63.05,"dewPoint":58.26,"humidity":0.84,"windSpeed":11.02,"windBearing":283,"visibility":6.47,"cloudCover":0.86,"pressure":1013.21,"ozone":306.56},{"time":1439272800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":62.18,"apparentTemperature":62.18,"dewPoint":58.22,"humidity":0.87,"windSpeed":10.3,"windBearing":284,"visibility":6.29,"cloudCover":0.86,"pressure":1013.4,"ozone":306.17},{"time":1439276400,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":61.69,"apparentTemperature":61.69,"dewPoint":58.06,"humidity":0.88,"windSpeed":9.87,"windBearing":285,"visibility":6.11,"cloudCover":0.96,"pressure":1013.4,"ozone":306.02},{"time":1439280000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":61.48,"apparentTemperature":61.48,"dewPoint":57.92,"humidity":0.88,"windSpeed":9.24,"windBearing":283,"visibility":7.19,"cloudCover":0.93,"pressure":1013.3,"ozone":306.06},{"time":1439283600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":61.2,"apparentTemperature":61.2,"dewPoint":57.84,"humidity":0.89,"windSpeed":8.62,"windBearing":281,"visibility":8.08,"cloudCover":0.91,"pressure":1013.23,"ozone":306.15},{"time":1439287200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":60.99,"apparentTemperature":60.99,"dewPoint":57.7,"humidity":0.89,"windSpeed":8,"windBearing":278,"visibility":8.22,"cloudCover":0.92,"pressure":1013.22,"ozone":306.17},{"time":1439290800,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":60.96,"apparentTemperature":60.96,"dewPoint":57.77,"humidity":0.89,"windSpeed":7.53,"windBearing":275,"visibility":7.62,"cloudCover":0.94,"pressure":1013.24,"ozone":306.25},{"time":1439294400,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":60.89,"apparentTemperature":60.89,"dewPoint":58.04,"humidity":0.9,"windSpeed":6.98,"windBearing":267,"visibility":6.63,"cloudCover":0.96,"pressure":1013.35,"ozone":306.59},{"time":1439298000,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":60.91,"apparentTemperature":60.91,"dewPoint":58.3,"humidity":0.91,"windSpeed":6.86,"windBearing":265,"visibility":4.63,"cloudCover":0.97,"pressure":1013.56,"ozone":307.1},{"time":1439301600,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":61.36,"apparentTemperature":61.36,"dewPoint":58.53,"humidity":0.9,"windSpeed":6.84,"windBearing":263,"visibility":2.38,"cloudCover":0.99,"pressure":1013.86,"ozone":307.88},{"time":1439305200,"summary":"Foggy","icon":"fog","precipIntensity":0,"precipProbability":0,"temperature":61.48,"apparentTemperature":61.48,"dewPoint":59.04,"humidity":0.92,"windSpeed":6.87,"windBearing":261,"visibility":1,"cloudCover":0.99,"pressure":1014.17,"ozone":309.4},{"time":1439308800,"summary":"Foggy","icon":"fog","precipIntensity":0,"precipProbability":0,"temperature":62.35,"apparentTemperature":62.35,"dewPoint":59.54,"humidity":0.91,"windSpeed":6.89,"windBearing":258,"visibility":1.05,"cloudCover":1,"pressure":1014.5,"ozone":312.24},{"time":1439312400,"summary":"Foggy","icon":"fog","precipIntensity":0,"precipProbability":0,"temperature":63.37,"apparentTemperature":63.37,"dewPoint":59.81,"humidity":0.88,"windSpeed":7,"windBearing":254,"visibility":1.97,"cloudCover":1,"pressure":1014.81,"ozone":315.83},{"time":1439316000,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":64.52,"apparentTemperature":64.52,"dewPoint":60.01,"humidity":0.85,"windSpeed":7.32,"windBearing":253,"visibility":3.14,"cloudCover":0.98,"pressure":1014.99,"ozone":318.9},{"time":1439319600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":65.95,"apparentTemperature":65.95,"dewPoint":60.22,"humidity":0.82,"windSpeed":8.16,"windBearing":254,"visibility":4.6,"cloudCover":0.87,"pressure":1014.98,"ozone":320.82},{"time":1439323200,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.45,"apparentTemperature":67.45,"dewPoint":60.25,"humidity":0.78,"windSpeed":9.27,"windBearing":257,"visibility":6.32,"cloudCover":0.71,"pressure":1014.82,"ozone":322.22},{"time":1439326800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":68.48,"apparentTemperature":68.48,"dewPoint":60.18,"humidity":0.75,"windSpeed":10.22,"windBearing":260,"visibility":7.57,"cloudCover":0.57,"pressure":1014.6,"ozone":323.62},{"time":1439330400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":68.83,"apparentTemperature":68.83,"dewPoint":59.97,"humidity":0.73,"windSpeed":11.08,"windBearing":262,"visibility":7.97,"cloudCover":0.48,"pressure":1014.33,"ozone":325.74},{"time":1439334000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.71,"apparentTemperature":67.71,"dewPoint":58.78,"humidity":0.73,"windSpeed":11.87,"windBearing":265,"visibility":7.92,"cloudCover":0.41,"pressure":1014.05,"ozone":327.85},{"time":1439337600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":65.94,"apparentTemperature":65.94,"dewPoint":57.43,"humidity":0.74,"windSpeed":12.13,"windBearing":267,"visibility":7.81,"cloudCover":0.37,"pressure":1013.9,"ozone":328.36},{"time":1439341200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":64.03,"apparentTemperature":64.03,"dewPoint":56.65,"humidity":0.77,"windSpeed":11.57,"windBearing":270,"visibility":7.96,"cloudCover":0.38,"pressure":1013.95,"ozone":326.09},{"time":1439344800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":62.39,"apparentTemperature":62.39,"dewPoint":56.53,"humidity":0.81,"windSpeed":10.55,"windBearing":274,"visibility":8.06,"cloudCover":0.41,"pressure":1014.11,"ozone":322.22},{"time":1439348400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":61.23,"apparentTemperature":61.23,"dewPoint":56.66,"humidity":0.85,"windSpeed":9.58,"windBearing":277,"visibility":7.61,"cloudCover":0.45,"pressure":1014.38,"ozone":318.59},{"time":1439352000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":60.25,"apparentTemperature":60.25,"dewPoint":56.58,"humidity":0.88,"windSpeed":8.53,"windBearing":276,"visibility":6,"cloudCover":0.47,"pressure":1014.77,"ozone":315.61},{"time":1439355600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":59.06,"apparentTemperature":59.06,"dewPoint":56.09,"humidity":0.9,"windSpeed":7.42,"windBearing":272,"visibility":3.83,"cloudCover":0.49,"pressure":1015.24,"ozone":312.88},{"time":1439359200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":57.83,"apparentTemperature":57.83,"dewPoint":55.39,"humidity":0.92,"windSpeed":6.61,"windBearing":268,"visibility":2.38,"cloudCover":0.52,"pressure":1015.6,"ozone":310.98},{"time":1439362800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":57.68,"apparentTemperature":57.68,"dewPoint":55.57,"humidity":0.93,"windSpeed":6.23,"windBearing":265,"visibility":2.31,"cloudCover":0.57,"pressure":1015.76,"ozone":310.33},{"time":1439366400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":57.75,"apparentTemperature":57.75,"dewPoint":55.85,"humidity":0.93,"windSpeed":5.99,"windBearing":262,"visibility":2.95,"cloudCover":0.64,"pressure":1015.82,"ozone":310.51},{"time":1439370000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":57.66,"apparentTemperature":57.66,"dewPoint":55.9,"humidity":0.94,"windSpeed":5.76,"windBearing":261,"visibility":3.58,"cloudCover":0.69,"pressure":1015.89,"ozone":310.78},{"time":1439373600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":57.23,"apparentTemperature":57.23,"dewPoint":55.63,"humidity":0.94,"windSpeed":5.69,"windBearing":264,"visibility":3.82,"cloudCover":0.74,"pressure":1015.98,"ozone":310.89},{"time":1439377200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":56.74,"apparentTemperature":56.74,"dewPoint":55.24,"humidity":0.95,"windSpeed":5.68,"windBearing":268,"visibility":4.04,"cloudCover":0.79,"pressure":1016.08,"ozone":311.09},{"time":1439380800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":56.56,"apparentTemperature":56.56,"dewPoint":55.01,"humidity":0.95,"windSpeed":5.5,"windBearing":270,"visibility":4.6,"cloudCover":0.82,"pressure":1016.26,"ozone":311.37},{"time":1439384400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":56.59,"apparentTemperature":56.59,"dewPoint":54.96,"humidity":0.94,"windSpeed":4.91,"windBearing":267,"visibility":5.92,"cloudCover":0.84,"pressure":1016.57,"ozone":311.91},{"time":1439388000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":56.99,"apparentTemperature":56.99,"dewPoint":55.12,"humidity":0.93,"windSpeed":4.06,"windBearing":261,"visibility":7.58,"cloudCover":0.84,"pressure":1016.97,"ozone":312.54},{"time":1439391600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":57.8,"apparentTemperature":57.8,"dewPoint":55.17,"humidity":0.91,"windSpeed":3.65,"windBearing":256,"visibility":8.75,"cloudCover":0.79,"pressure":1017.34,"ozone":312.76}]},"daily":{"summary":"No precipitation throughout the week, with temperatures rising to 80°F on Saturday.","icon":"clear-day","data":[{"time":1439190000,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1439212921,"sunsetTime":1439262648,"moonPhase":0.88,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":59.15,"temperatureMinTime":1439215200,"temperatureMax":71.36,"temperatureMaxTime":1439244000,"apparentTemperatureMin":59.15,"apparentTemperatureMinTime":1439215200,"apparentTemperatureMax":71.36,"apparentTemperatureMaxTime":1439244000,"dewPoint":57.41,"humidity":0.79,"windSpeed":10.3,"windBearing":271,"visibility":7.62,"cloudCover":0.64,"pressure":1013.06,"ozone":315.23},{"time":1439276400,"summary":"Foggy in the morning.","icon":"fog","sunriseTime":1439299374,"sunsetTime":1439348979,"moonPhase":0.91,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":57.83,"temperatureMinTime":1439359200,"temperatureMax":68.83,"temperatureMaxTime":1439330400,"apparentTemperatureMin":57.83,"apparentTemperatureMinTime":1439359200,"apparentTemperatureMax":68.83,"apparentTemperatureMaxTime":1439330400,"dewPoint":58.22,"humidity":0.85,"windSpeed":8.6,"windBearing":268,"visibility":5.67,"cloudCover":0.74,"pressure":1014.18,"ozone":315.15},{"time":1439362800,"summary":"Mostly cloudy in the morning.","icon":"partly-cloudy-day","sunriseTime":1439385826,"sunsetTime":1439435308,"moonPhase":0.94,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":56.56,"temperatureMinTime":1439380800,"temperatureMax":73.52,"temperatureMaxTime":1439420400,"apparentTemperatureMin":56.56,"apparentTemperatureMinTime":1439380800,"apparentTemperatureMax":73.52,"apparentTemperatureMaxTime":1439420400,"dewPoint":55.47,"humidity":0.78,"windSpeed":7.72,"windBearing":273,"visibility":7.83,"cloudCover":0.39,"pressure":1017.05,"ozone":309},{"time":1439449200,"summary":"Partly cloudy in the morning.","icon":"partly-cloudy-day","sunriseTime":1439472279,"sunsetTime":1439521636,"moonPhase":0.97,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":57.55,"temperatureMinTime":1439467200,"temperatureMax":75.95,"temperatureMaxTime":1439499600,"apparentTemperatureMin":57.55,"apparentTemperatureMinTime":1439467200,"apparentTemperatureMax":75.95,"apparentTemperatureMaxTime":1439499600,"dewPoint":53.73,"humidity":0.69,"windSpeed":8.61,"windBearing":273,"visibility":10,"cloudCover":0.13,"pressure":1018.17,"ozone":300.05},{"time":1439535600,"summary":"Partly cloudy in the morning.","icon":"partly-cloudy-day","sunriseTime":1439558732,"sunsetTime":1439607963,"moonPhase":0.01,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":58.22,"temperatureMinTime":1439557200,"temperatureMax":74.12,"temperatureMaxTime":1439589600,"apparentTemperatureMin":58.22,"apparentTemperatureMinTime":1439557200,"apparentTemperatureMax":74.12,"apparentTemperatureMaxTime":1439589600,"dewPoint":52.56,"humidity":0.66,"windSpeed":4.43,"windBearing":256,"cloudCover":0.06,"pressure":1016.06,"ozone":291.99},{"time":1439622000,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1439645184,"sunsetTime":1439694289,"moonPhase":0.04,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":62.51,"temperatureMinTime":1439636400,"temperatureMax":79.88,"temperatureMaxTime":1439679600,"apparentTemperatureMin":62.51,"apparentTemperatureMinTime":1439636400,"apparentTemperatureMax":79.88,"apparentTemperatureMaxTime":1439679600,"dewPoint":51.94,"humidity":0.54,"windSpeed":2.45,"windBearing":270,"cloudCover":0,"pressure":1013.29,"ozone":286.17},{"time":1439708400,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1439731637,"sunsetTime":1439780613,"moonPhase":0.07,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":65.22,"temperatureMinTime":1439791200,"temperatureMax":78.76,"temperatureMaxTime":1439762400,"apparentTemperatureMin":65.22,"apparentTemperatureMinTime":1439791200,"apparentTemperatureMax":78.76,"apparentTemperatureMaxTime":1439762400,"dewPoint":52.03,"humidity":0.53,"windSpeed":4.64,"windBearing":236,"cloudCover":0.01,"pressure":1011.78,"ozone":276.08},{"time":1439794800,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1439818089,"sunsetTime":1439866937,"moonPhase":0.1,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":60.55,"temperatureMinTime":1439877600,"temperatureMax":71.83,"temperatureMaxTime":1439845200,"apparentTemperatureMin":60.55,"apparentTemperatureMinTime":1439877600,"apparentTemperatureMax":71.83,"apparentTemperatureMaxTime":1439845200,"dewPoint":52.44,"humidity":0.64,"windSpeed":5.97,"windBearing":231,"cloudCover":0.03,"pressure":1011.35,"ozone":276.69}]},"flags":{"sources":["nwspa","isd","nearest-precip","fnmoc","sref","rtma","rap","nam","cmc","gfs","madis","lamp","darksky"],"isd-stations":["724943-99999","745039-99999","745065-99999","994016-99999","999999-23272"],"madis-stations":["AU915","C5988","C8158","C9629","D5422","D7213","D9579","E0426","E1227","E6067","FTPC1","OKXC1","PPXC1","PXOC1","RCMC1","SFOC1"],"lamp-stations":["KAPC","KCCR","KHWD","KLVK","KNUQ","KOAK","KPAO","KSFO","KSQL"],"darksky-stations":["KMUX","KDAX"],"units":"us"}};
			Ctrl.DatosClima.currently.time = $filter("date")(Ctrl.DatosClima.currently.time,"MM/dd/yyyy - h:mma");
		});
	};
	
	this.CargarDatosClima();
	
}]);