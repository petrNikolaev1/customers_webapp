import expect from 'expect'

import {
    initGoogleMaps,
    getGoogleMaps,
    getCity,
    getAddress
} from '@/util/googleMaps'

test('Init Google Maps', () => {
    expect.assertions(1);
    initGoogleMaps();
    return getGoogleMaps().then(
        google => {
            return expect(google).toEqual(window.google)
        });
});

test('Get address from Google Maps Geocoder', () => {
    expect.assertions(2);
    initGoogleMaps();
    return getGoogleMaps()
        .then(google => {
            expect(google).toEqual(window.google);
            return getAddress({lat: 55.753716, lng: 48.743341})
        })
        .then(address => {
            expect(getCity(address)).toBe('Innopolis')
        })
});



