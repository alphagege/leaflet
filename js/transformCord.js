function transformCode(lat,lng){
    // leaflet地图的钟楼坐标
    let leafletCodelat = 34.26093154619375;
    let leafletCodelng = 108.9421533166318;

    // 百度地图的钟楼坐标
    let baiduCodelat = 34.265725;
    let baiduCodelng = 108.95346;
    
    let latSub = baiduCodelat - leafletCodelat;
    let lngSub = baiduCodelng - leafletCodelng;

    return [lat-latSub,lng-lngSub];
}