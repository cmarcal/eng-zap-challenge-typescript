import { ImmobileDTO } from 'src/services/IServices';

export const validationLatandLon = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => {
  return data.filter(elt => elt.address.geoLocation.location.lat !== 0 && elt.address.geoLocation.location.lon !== 0)
}


const verifyBoundBox = (lat: number, lon: number) => {
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

const zapValidBySquareMeters = (squareMeters: number, valueImmobile: number, isBoundBox: boolean): boolean => {
  if(squareMeters === 0) return false;
  const valueZap = Number(process.env.NEXT_PUBLIC_RENTAL_ZAP)
  const conditionalValueZap = isBoundBox ? (valueZap - (valueZap * 0.1)) : valueZap;

  const valueBySquareMeters = valueImmobile / squareMeters;

  return parseInt(valueBySquareMeters.toString()) >= conditionalValueZap;
}

export const rulesZap = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => {
  const rentalPrice = Number(process.env.NEXT_PUBLIC_RENTAL_ZAP);
  const salePrice = Number(process.env.NEXT_PUBLIC_SALE_ZAP);

  const tratedList = data.reduce((acc: Array<ImmobileDTO>, currentValue: ImmobileDTO) => {
    const {usableAreas, pricingInfos: {businessType, price}, address: {geoLocation: {location: {lon, lat}}} } = currentValue;
    const priceNumber = Number(price)

    if(businessType === 'SALE') {
      const isBoundBox = verifyBoundBox(lat, lon);
      const validSquareMeter =  zapValidBySquareMeters(usableAreas, priceNumber, isBoundBox);
      if(priceNumber >= salePrice && validSquareMeter)
        acc.push(currentValue)
    }
    if(businessType === 'RENTAL') {
      if(priceNumber >= rentalPrice)
        acc.push(currentValue)
    }
    return acc
  }, [])

  return tratedList;
}

const vivaRealValidByMonthlyCondoFee = (monthlyCondoFee: string, isBoundBox: boolean): boolean => {
  const validMonthlyCondoFee = Number(monthlyCondoFee)
  if (isNaN(validMonthlyCondoFee)) return false;
  const valueVivaReal = Number(process.env.NEXT_PUBLIC_RENTAL_VIVAREAL)
  const percentvalue = isBoundBox ? 0.5: 0.3;


  return validMonthlyCondoFee <= valueVivaReal * percentvalue;

}

export const rulesVivaReal = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => { 
  const rentalPrice = Number(process.env.NEXT_PUBLIC_RENTAL_VIVAREAL);
  const salePrice = Number(process.env.NEXT_PUBLIC_SALE_VIVAREAL);

  const tratedList = data.reduce((acc: Array<ImmobileDTO>, currentValue: ImmobileDTO) => {
    const { pricingInfos: {businessType, price, monthlyCondoFee}, address: {geoLocation: {location: {lon, lat}}} } = currentValue;
    const priceNumber = Number(price)

    
    if(businessType === 'SALE') {
      if(priceNumber >= salePrice)
        acc.push(currentValue)
    }
    if(businessType === 'RENTAL') {
      const isBoundBox = verifyBoundBox(lat, lon);
      const validMonthlyCondoFee = vivaRealValidByMonthlyCondoFee(monthlyCondoFee, isBoundBox)
      if (priceNumber >= rentalPrice && validMonthlyCondoFee)
        acc.push(currentValue)
    }
    return acc
  }, [])

  return tratedList;
}