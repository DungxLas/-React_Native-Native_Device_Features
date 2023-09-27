class Place {
  title: any;
  imageUri: any;
  address: any;
  location: any;
  id: string;
  constructor(title: any, imageUri: any, address: any, location: any) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 0.141241, lng: 127.121 }
    this.id = new Date().toString() + Math.random().toString();
  }
}
