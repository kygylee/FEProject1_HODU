var mapContainer = document.getElementById('s_contents_address_map'), 
    mapOption = {
        center: new kakao.maps.LatLng(33.4423464, 126.5714548), 
        level: 3 
    };


var s_contents_address_map = new kakao.maps.Map(mapContainer, mapOption);


var markerPosition  = new kakao.maps.LatLng(33.4423464, 126.5714548);


var marker = new kakao.maps.Marker({
    position: markerPosition
});


marker.setMap(s_contents_address_map);


var mapTypeControl = new kakao.maps.MapTypeControl();



s_contents_address_map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);


var zoomControl = new kakao.maps.ZoomControl();
s_contents_address_map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);