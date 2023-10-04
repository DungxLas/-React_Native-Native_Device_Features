const GOOGLE_API_KEY = "AIzaSyBz8JSfnUbjvenDCbwLcuSK3y-iM7SExSg";

export function getMapPreview(lat: any, lng: any) {
  lat = 40.712776;
  lng = -74.005974;
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat}, ${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:green%7Clabel:S%7C${lat}, ${lng}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
}
