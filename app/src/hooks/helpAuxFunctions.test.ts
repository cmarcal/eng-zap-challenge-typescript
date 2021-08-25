import {verifyBoundBox , validationLatandLon, zapValidBySquareMeters, rulesZap, vivaRealValidByMonthlyCondoFee, rulesVivaReal} from './helpAuxFunctions';
import { mockImmobileList, invalidImmobiles, mockVivaRealList } from './mock';

describe('VerifyBoundBox test', () => {
  it('Should return false', ()=> {
    const mockElement = invalidImmobiles[0].address.geoLocation

    expect(verifyBoundBox(mockElement.location.lat, mockElement.location.lon)).toBeFalsy();
  })

  it('Should return true', ()=> {
    const mockElement = mockImmobileList[1].address.geoLocation
    expect(verifyBoundBox(mockElement.location.lat, mockElement.location.lon)).toBeTruthy();
  }) 
})

describe('ValidationLatandLon test', ()=> {
  it('Should return 2 elements', ()=> {
    expect(validationLatandLon(mockImmobileList)).toHaveLength(2);
  })
  it('Should return 0 elements', ()=> {
    expect(validationLatandLon(invalidImmobiles)).toHaveLength(0);
  })
})

describe('zapValidBySquareMeters test', ()=> {
  const mockElement = mockImmobileList[1]
  it('Should return immobile is valid', ()=> {
    expect(zapValidBySquareMeters(mockElement.usableAreas, Number(mockElement.pricingInfos.price), true)).toBeTruthy();
  })
  it('Should return immobile is invalid', ()=> {
    expect(zapValidBySquareMeters(0, Number(invalidImmobiles[0].pricingInfos.price), true)).toBeFalsy();
  })
})

describe('rulesZap test', ()=> {
  it('Should return 2 elements valid', ()=> {
    const listTreatedLatLon = validationLatandLon(mockImmobileList);
    expect(rulesZap(listTreatedLatLon)).toHaveLength(2);
  })
  it('Should return 0 elements valid', ()=> {
    expect(rulesZap(invalidImmobiles)).toHaveLength(0);
  }) 
})

describe('vivaRealValidByMonthlyCondoFee test', ()=> {
  it('Should return immobile is valid', ()=> {
    const mockElement = mockVivaRealList[0];
    const geoLocation = mockElement.address.geoLocation.location
    expect(vivaRealValidByMonthlyCondoFee(mockElement.pricingInfos.monthlyCondoFee, verifyBoundBox(geoLocation.lat, geoLocation.lon))).toBeTruthy();
  })

  it('Should return immobile is invalid', ()=> {
    const mockElement = invalidImmobiles[0];
    const geoLocation = mockElement.address.geoLocation.location
    expect(vivaRealValidByMonthlyCondoFee('valueIsNotNumeric', verifyBoundBox(geoLocation.lat, geoLocation.lon))).toBeFalsy();
  }) 
})

describe('rulesVivaReal test', ()=> {
  it('Should return 2 elements valid', ()=> {
    const listTreatedLatLon = validationLatandLon(mockVivaRealList);
    expect(rulesVivaReal(listTreatedLatLon)).toHaveLength(3);
  })
  it('Should return 0 elements valid', ()=> {
    expect(rulesVivaReal(invalidImmobiles)).toHaveLength(0);
  }) 
})