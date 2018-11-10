import expect from 'expect'

import {secondsToHours, metersToKm} from '@/util/units'

test('Seconds conversion to hours and minutes', () => {
    expect(secondsToHours(15410)).toEqual([4, 16]);
});

test('Meters conversion to kilometers', () => {
    expect(metersToKm(1215)).toBe(1);
});