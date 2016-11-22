angular.module('dashboardApp', ['leaflet-directive'])
  .controller('DashboardController', function($scope, $timeout, $http) {
    var dashboard = this;
    $scope.api = [];
    $scope.tiles = {}
    $scope.markers = []



    angular.extend($scope, {
                    center: {
                        lat: -66,
                        lng: 139,
                        zoom: 9,
                    },
                    tiles: {
                        url: "http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default//GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg",
	                      attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
                    }
                });

    $scope.$watch("center.zoom", function(zoom) {
         if (zoom > 9) {
           $scope.tiles.attribution = 'Tiles © Esri - Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
           $scope.tiles.url = "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
         }else{
           $scope.tiles.url = "http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default//GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg";
           $scope.tiles.attribution =  'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (https://earthdata.nasa.gov) with funding provided by NASA/HQ.';

         }
     });


    $scope.title = "OCTANIS 1 MISSION DATA";
    $scope.clock = "...";
    $scope.tickInterval = 1000

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);

    //get dumontdurville local data
    $http.get('http://api.geonames.org/timezoneJSON?lat=-66.6906611&lng=139.8969550&username=octanis')
	  .success(function(data, status, headers, config) {
      $scope.sunset = data.sunset.substr(11, 5);
      $scope.sunrise = data.sunrise.substr(11, 5);
	  });

    //get message data
    $http.get('http://bitmorse.com/constellation_dashboard/api.php')
    .success(function(data, status, headers, config) {
      $scope.api = data;


      //transform GLOBAL_POSITION_INT to markers
      data.GLOBAL_POSITION_INT.forEach(function(g){

        var marker = {
          lat: g.Fields.M.lat.N / 1e7,
          lng: g.Fields.M.lon.N / 1e7,
          focus: false,
          message: "Iridium Received: "+g.IridiumMeta.M.transmit_time.S+"<br>MOMSN: "+g.IridiumMeta.M.momsn.N+"<br>Iridium CEP: "+g.IridiumMeta.M.iridium_cep.N+"<br>Time since boot (ms): "+g.Fields.M.time_boot_ms.N,

          icon: {
            type: 'extraMarker',
            icon: 'fa-flag-o',
            markerColor: 'yellow',
            prefix: 'fa',
            shape: 'penta'
          }
        };

        $scope.markers.push(marker);

      });

      //transform GPS_RAW_INT to markers
      var i=0;
      data.GPS_RAW_INT.forEach(function(g){

        var marker = {
          lat: g.Fields.M.lat.N / 1e7,
          lng: g.Fields.M.lon.N / 1e7,
          focus: false,
          message: "Iridium Received: "+g.IridiumMeta.M.transmit_time.S+"<br>MOMSN: "+g.IridiumMeta.M.momsn.N+"<br>Iridium CEP: "+g.IridiumMeta.M.iridium_cep.N+"<br> Satellites visible: "+g.Fields.M.satellites_visible.N+"<br> Altitude: "+g.Fields.M.alt.N / 1000+"m<br> Fix type: "+g.Fields.M.fix_type.N+"<br>EPH / EPV: "+g.Fields.M.eph.N+" / "+g.Fields.M.epv.N,

          icon: {
            type: 'extraMarker',
            icon: 'fa-flag-o',
            markerColor: 'yellow',
            prefix: 'fa',
            shape: 'penta'
          }
        };

        if(i==(data.GPS_RAW_INT.length-1)){
          $scope.center = {
              lat: g.Fields.M.lat.N / 1e7,
              lng: g.Fields.M.lon.N / 1e7,
              zoom: 9
          }
          marker.focus = true;
        }

        $scope.markers.push(marker);
        i++;

      });
    });



  });
