export class Place {
  title: any;
  imageUri: any;
  address: any;
  location: any;
  id: string;
  constructor(title: any, imageUri: any, location: any) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }
    this.id = new Date().toString() + Math.random().toString();
  }
}
