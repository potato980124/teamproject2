//위원회 페이지
let container = document.querySelector(".commit_map");
let options = {
    center: new kakao.maps.LatLng(35.19076610199633, 129.059325638228),
    level: 2,
};
let map = new kakao.maps.Map(container, options);

let markerPosition = new kakao.maps.LatLng(35.19076610199633, 129.059325638228);
let marker = new kakao.maps.Marker({
    position: markerPosition,
});
marker.setMap(map);
