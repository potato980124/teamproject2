
//축제소개 페이지2
let container = document.querySelector('.loca_map_bg2');
let options ={
    center: new kakao.maps.LatLng(35.1537727634193,129.118519972498),
    level : 2
}
let map = new kakao.maps.Map(container, options);

let markerPosition  = new kakao.maps.LatLng(35.1537727634193,129.118519972498);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);