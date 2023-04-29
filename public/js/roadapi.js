//바다 축제 api
let container = document.querySelector('.road_map_bg');
let moptions ={
    center: new kakao.maps.LatLng(35.09644992559931, 129.0358759771275),
    level : 2
}

let map = new kakao.maps.Map(container, moptions);

let markerPosition  = new kakao.maps.LatLng(35.09644992559931, 129.0358759771275);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
    