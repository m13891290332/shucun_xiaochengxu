$(function () {

	$.getJSON( "json/china.json" ).done(function ( response ) {

		jsMap.config( "#map-01", response );

		jsMap.config( "#map-02", response, {
			areaName: {
				show: true
			}
		});

		jsMap.config( "#map-03", response, {
			multiple: true
		});
		$( "#get-multiple-1" ).on("click", function () {
			console.log( jsMap.multipleValue( "#map-03" ) );
		})
		$( "#get-multiple-2" ).on("click", function () {
			console.log( jsMap.multipleValue( "#map-03" , { type: "object" } ) );
		})

		jsMap.config( "#map-04", response, {
			stroke: {
				width: 2,
				color: "#000"
			}
		});

		jsMap.config( "#map-05", response, {
			fill: {
                basicColor: "#259200",
                hoverColor: "#dee933",
                clickColor: "#3dadb1"
            }
		});

		jsMap.config( "#map-06", response, {
			
			stroke: {
				width: 1,
				color: "#67b6c3"
			},
			fill: {
                basicColor: {
                    ningxia: "#98d091",
                    yunnan: "#98d091",
                    guizhou: "#98d091",
                    hebei:"#98d091",
                    shaanxi:"#98d091",
                    hubei:"#98d091",
                    hunan:"#98d091",
                    guangdong:"#98d091",
                    fujian:"#98d091",
                },
                hoverColor: {
					ningxia: "rgb(225,229,48)",
					yunnan: "rgb(225,229,48)",
					guizhou: "rgb(225,229,48)",
					hebei:"rgb(225,229,48)",
					shaanxi:"rgb(225,229,48)",
					hubei:"rgb(225,229,48)",
					hunan:"rgb(225,229,48)",
					guangdong:"rgb(225,229,48)",
					fujian:"rgb(225,229,48)",
					
                    
                },
                clickColor: {
                    ningxia: "rgb(225,229,48)",
                    yunnan: "rgb(225,229,48)",
                    guizhou: "rgb(225,229,48)",
                    hebei:"rgb(225,229,48)",
                    shaanxi:"rgb(225,229,48)",
                    hubei:"rgb(225,229,48)",
                    hunan:"rgb(225,229,48)",
                    guangdong:"rgb(225,229,48)",
                    fujian:"rgb(225,229,48)",
                }
            }
		});
		
		

		jsMap.config( "#map-07", response, {
			disabled: {
				name: [ "heilongjiang", "jilin", "liaoning" ]
			}
			
		});

		jsMap.config( "#map-08", response, {
			disabled: {
				name: [ "heilongjiang", "jilin", "liaoning" ],
				except: true
			}
		});

		jsMap.config( "#map-09", response, {
			tip: function ( id, name ) {
                return '<div style="background:#eee;padding:15px;"><p>id: ' + id + '</p><p>name: ' + name + '</p></div>';
            }
		});

		var $hoverCallback = $( "#hover-callback" );
		jsMap.config( "#map-10", response, {
			hoverCallback: function ( id, name ) {
				$hoverCallback.text( id + " --- " + name );
			}
		});

		var $clickCallback = $( "#click-callback" );
		jsMap.config( "#map-11", response, {
			clickCallback: function ( id, name ) {
				$clickCallback.text( id + " --- " + name );
			}
		});

	})

})