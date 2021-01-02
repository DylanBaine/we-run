import GeoLocation from "../location/GeoLocation";

describe("GeoLocation", () => {
  it("calculates to zero when same place", () => {
    const location1 = new GeoLocation(85, -85);
    const location2 = new GeoLocation(85, -85);
    const diff = location1.getDifferenctFromLocationInFeet(location2);
    expect(diff).toBe(0);
  });

  it("calculates differences between locations", () => {
    /*
  "latitude": 41.028308942952215,
  "longitude": -85.14250195593121,
  "timestamp": 1608498016996.5564,
  */

    const location1 = new GeoLocation(41.028295489997625, -85.14243490070584);
    const location2 = new GeoLocation(41.02831799540764, -85.14244101949515);
    const diff = location1.getDifferenctFromLocationInFeet(location2);
    expect(Math.round(diff)).toBe(8);
  });
});
