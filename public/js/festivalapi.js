//축제 소개 페이지
let container = document.querySelector('.loca_map_bg');
let moptions ={
    center: new kakao.maps.LatLng(35.100837335972834, 129.03241036354348),
    level : 2
}

let map = new kakao.maps.Map(container, moptions);

let markerPosition  = new kakao.maps.LatLng(35.100837335972834, 129.03241036354348);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
