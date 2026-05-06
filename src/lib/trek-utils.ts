import { Trek, trekData } from "./treks";

export const getFeaturedTreks = (): Trek[] => {
  // Logic: Return top 3 treks or those marked as featured
  // For now, returning the first 3 from the main dataset
  return trekData.slice(0, 3);
};
