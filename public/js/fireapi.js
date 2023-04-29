//바다 축제 api
let container = document.querySelector('.fire_map_bg');
let moptions ={
    center: new kakao.maps.LatLng(35.149809712337735, 129.1147848769604),
    level : 2
}

let map = new kakao.maps.Map(container, moptions);

let markerPosition  = new kakao.maps.LatLng(35.149809712337735, 129.1147848769604);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
    