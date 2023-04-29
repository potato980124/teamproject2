//바다 축제 api
let container = document.querySelector('.rock_map_bg');
let moptions ={
    center: new kakao.maps.LatLng(35.16912723851739, 128.9731774260056),
    level : 2
}

let map = new kakao.maps.Map(container, moptions);

let markerPosition  = new kakao.maps.LatLng(35.16912723851739, 128.9731774260056);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
    