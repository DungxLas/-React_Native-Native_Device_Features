const GOOGLE_API_KEY = "AIzaSyBz8JSfnUbjvenDCbwLcuSK3y-iM7SExSg";

export function getMapPreview(lat: any, lng: any) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat}, ${lng}&zoom=14&size=600x300&sensor=false&maptype=HYBRID&markers=color:red|label:S|${lat}, ${lng}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
}
