const headers = new Headers();

const initialGet: any = { 
  method: 'GET',
  headers: headers,
  mode: 'cors',
  cache: 'default' 
}

export const getImmobileList = async() => await fetch(process.env.NEXT_PUBLIC_API as string, initialGet)