import { ImmobileDTO } from 'src/services/IServices';

export const validationLatandLon = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => {

  return data.filter(elt => elt.address.geoLocation.location.lat !== 0 && elt.address.geoLocation.location.lon !== 0)
}


export const rulesZap = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => {
  const rentalPrice = process.env.NEXT_PUBLIC_RENTAL_OLX;
  const salePrice = process.env.NEXT_PUBLIC_SALE_OLX;



  const tratedList = data.reduce((acc: Array<ImmobileDTO>, currentValue: ImmobileDTO) => {
    if(currentValue.pricingInfos.businessType === 'SALE') {
      if(Number(currentValue.pricingInfos.price) >= Number(salePrice))
        acc.push(currentValue)
    }
    if(currentValue.pricingInfos.businessType === 'RENTAL') {
      if(Number(currentValue.pricingInfos.price) >= Number(rentalPrice))
        acc.push(currentValue)
    }
    return acc
  }, [])

  return tratedList;
}

export const rulesVivaReal = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => { 
  const rentalPrice = process.env.NEXT_PUBLIC_RENTAL_VIVAREAL;
  const salePrice = process.env.NEXT_PUBLIC_SALE_VIVAREAL;

  const tratedList = data.reduce((acc: Array<ImmobileDTO>, currentValue: ImmobileDTO) => {
    if(currentValue.pricingInfos.businessType === 'SALE') {
      if(Number(currentValue.pricingInfos.price) >= Number(salePrice))
        acc.push(currentValue)
    }
    if(currentValue.pricingInfos.businessType === 'RENTAL') {
      if (Number(currentValue.pricingInfos.price) >= Number(rentalPrice))
        acc.push(currentValue)
    }
    return acc
  }, [])

  return tratedList;
}