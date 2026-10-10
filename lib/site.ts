export const site = {
  name: "Urduja Security Services Inc.",
  shortName: "Urduja",
  facebook: "https://www.facebook.com/profile.php?id=61561026712608",
  addressLines: ["138 Matalava Center", "Lingayen, Philippines 2401"],
  addressQuery: "138 Matalava Center, Lingayen, Philippines, 2401",
  phoneDisplay: "0917 129 2068",
  phoneTel: "+639171292068",
  email: "urduja.businessdevelopment@gmail.com",
  since: "2002",
  place: "Lingayen",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.addressQuery)}`;
