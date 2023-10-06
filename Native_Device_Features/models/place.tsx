export class Place {
  title: any;
  imageUri: any;
  address: any;
  location: { lat: any; lng: any; };
  id: any;
  constructor(title: string, imageUri: undefined, location: { address: any; lat: any; lng: any; }, id: undefined) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // { lat: 0.141241, lng: 127.121 }
    this.id = id;
  }
}