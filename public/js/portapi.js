//부산항 축제 api
let container = document.querySelector('.loca_map_bg_port');
let moptions ={
    center: new kakao.maps.LatLng(35.11655171084836, 129.04901508874875),
    level : 2
}

let map = new kakao.maps.Map(container, moptions);

let markerPosition  = new kakao.maps.LatLng(35.11655171084836, 129.04901508874875);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
    