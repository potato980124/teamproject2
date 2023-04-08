//바다 축제 api
let container = document.querySelector('.sea_map_bg');
let moptions ={
    center: new kakao.maps.LatLng(35.15956257673256, 129.16059320661873),
    level : 2
}

let map = new kakao.maps.Map(container, moptions);

let markerPosition  = new kakao.maps.LatLng(35.15956257673256, 129.16059320661873);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
    