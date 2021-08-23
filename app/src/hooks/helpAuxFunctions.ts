import { ImmobileDTO } from 'src/services/IServices';

export const validationLatandLon = (data: Array<ImmobileDTO>): Array<ImmobileDTO> => {

  return data.filter(elt => elt.address.geoLocation.location.lat !== 0 && elt.address.geoLocation.location.lon !== 0)
}