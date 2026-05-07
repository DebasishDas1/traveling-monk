import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const whatsappNumber = "7003564123";
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I have a question about your treks`)}`


export const getImageSrc = (url?: string | null): string | null => {
  if (!url) return null;

  const cleanUrl = url.trim();
  if (!cleanUrl) return null;

  try {
    // Handle Google Drive
    const driveMatch =
      cleanUrl.match(/\/d\/(.*?)\//) ||
      cleanUrl.match(/id=(.*?)(?:&|$)/);

    if (driveMatch) {
      return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
    }

    // Validate URL
    new URL(cleanUrl);
    return cleanUrl;
  } catch {
    return null; // invalid URL fallback
  }
};
