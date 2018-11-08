import {getLat, getLng} from "./googleMapsRequests";

export const rotationAngle = (a, b) => {
    const lat_1 = getLat(a);
    const lat_2 = getLat(b);

    const lon_1 = getLng(a);
    const lon_2 = getLng(b);

    return Math.degrees(
        Math.atan2(
            Math.cos(Math.radians(lat_2)) *
            Math.sin(Math.radians(lon_2 - lon_1)),

            Math.cos(Math.radians(lat_1)) *
            Math.sin(Math.radians(lat_2)) -
            Math.sin(Math.radians(lat_1)) *
            Math.cos(Math.radians(lat_2)) *
            Math.cos(Math.radians(lon_2 - lon_1))
        )) +
        (lon_2 < lon_1 ? 360 : 0)
};


Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};
