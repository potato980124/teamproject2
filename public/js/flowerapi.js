//바다 축제 api
let container = document.querySelector('.flower_map_bg');
let moptions ={
    center: new kakao.maps.LatLng(35.21074208271397, 128.98889780433473),
    level : 2
}

let map = new kakao.maps.Map(container, moptions);

let markerPosition  = new kakao.maps.LatLng(35.21074208271397, 128.98889780433473);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
    