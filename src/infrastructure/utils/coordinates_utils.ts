export type CoordinatesModel = {
  latitude: number;
  longitude: number;
};

export function calculateDistance(
  origins: CoordinatesModel,
  destination: CoordinatesModel
): number {
  const R = 6371e3; // metres
  const φ1 = (origins.latitude * Math.PI) / 180; // φ, λ in radians
  const φ2 = (destination.latitude * Math.PI) / 180;
  const Δφ = ((destination.latitude - origins.latitude) * Math.PI) / 180;
  const Δλ = ((destination.longitude - origins.longitude) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres
}
