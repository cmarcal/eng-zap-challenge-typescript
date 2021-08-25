import { ImmobileDTO } from 'src/services/IServices';

const rentalZapValue = Number(3500)
const saleZapValue = Number(600000)
const rentalVivaRealValue = Number(4000)
const saleVivaRealValue = Number(700000)

export const validationLatandLon = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => {
  return data.filter(elt => elt.address.geoLocation.location.lat !== 0 && elt.address.geoLocation.location.lon !== 0)
}

export const verifyBoundBox = (lat: number, lon: number) => {
  const verifyLatBoundingBox = (): boolean => {
    const minlat = -23.568704;
    const maxlat = -23.546686;
    return (lat >= minlat && lat <= maxlat)
  }
  
  const verifyLonBoundingBox = (): boolean => {
    const minlon = -46.693419;
    const maxlon = -46.641146;
    return (lon >= minlon && lon <= maxlon)
  }

  return verifyLatBoundingBox() && verifyLonBoundingBox()

}

export const zapValidBySquareMeters = (squareMeters: number, valueImmobile: number, isBoundBox: boolean): boolean => {
  if(squareMeters === 0) return false;
  const conditionalValueZap = isBoundBox ? (rentalZapValue - (rentalZapValue * 0.1)) : rentalZapValue;

  const valueBySquareMeters = valueImmobile / squareMeters;

  return parseInt(valueBySquareMeters.toString()) >= conditionalValueZap;
}

export const rulesZap = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => {

  const tratedList = data.reduce((acc: Array<ImmobileDTO>, currentValue: ImmobileDTO) => {
    const {usableAreas, pricingInfos: {businessType, price}, address: {geoLocation: {location: {lon, lat}}} } = currentValue;
    const priceNumber = Number(price)

    if(businessType === 'SALE') {
      const isBoundBox = verifyBoundBox(lat, lon);
      const validSquareMeter =  zapValidBySquareMeters(usableAreas, priceNumber, isBoundBox);
      if(priceNumber >= saleZapValue && validSquareMeter)
        acc.push(currentValue)
    }
    if(businessType === 'RENTAL') {
      if(priceNumber >= rentalZapValue)
        acc.push(currentValue)
    }
    return acc
  }, [])

  return tratedList;
}

export const vivaRealValidByMonthlyCondoFee = (monthlyCondoFee: string, isBoundBox: boolean): boolean => {
  const validMonthlyCondoFee = Number(monthlyCondoFee)
  if (isNaN(validMonthlyCondoFee)) return false;
  const percentvalue = isBoundBox ? 0.5: 0.3;

  return validMonthlyCondoFee <= rentalVivaRealValue * percentvalue;

}

export const rulesVivaReal = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => { 
  const tratedList = data.reduce((acc: Array<ImmobileDTO>, currentValue: ImmobileDTO) => {
    const { pricingInfos: {businessType, price, monthlyCondoFee}, address: {geoLocation: {location: {lon, lat}}} } = currentValue;
    const priceNumber = Number(price)
    
    if(businessType === 'SALE') {
      if(priceNumber >= saleVivaRealValue)
        acc.push(currentValue)
    }
    
    if(businessType === 'RENTAL') {
      const isBoundBox = verifyBoundBox(lat, lon);
      const validMonthlyCondoFee = vivaRealValidByMonthlyCondoFee(monthlyCondoFee, isBoundBox)
      if (priceNumber >= rentalVivaRealValue && validMonthlyCondoFee)
        acc.push(currentValue)
    }
    return acc
  }, [])

  return tratedList;
}