/**
 * Cloudinary Configuration and Utilities
 * Cloud Name: da5gqs502
 * Supports both Cloudinary publicIds and direct URLs
 */

const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dfperd2up',
  baseUrl: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dfperd2up'}`,
} as const;

/**
 * Cloudinary media type
 */
type MediaType = 'image' | 'video';

/**
 * Cloudinary transformation options
 */
interface TransformOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'jpg' | 'png' | 'webp' | 'mp4';
  crop?: 'fill' | 'fit' | 'scale' | 'thumb';
  gravity?: 'auto' | 'face' | 'center';
}

/**
 * Generate Cloudinary URL for an asset
 * @param assetId - The asset ID (publicId or full URL)
 * @param type - Type of media (image or video)
 * @param options - Transformation options
 * @returns The full URL
 */
export function getCloudinaryUrl(
  assetId: string,
  type: MediaType = 'image',
  options: TransformOptions = {}
): string {
  // If it's a full URL, return it directly
  if (assetId.startsWith('http')) {
    return assetId;
  }

  // Otherwise, build Cloudinary URL
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop,
    gravity,
  } = options;

  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (gravity) transformations.push(`g_${gravity}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);

  const transformString = transformations.length > 0 ? `${transformations.join(',')}/` : '';
  const resourceType = type === 'video' ? 'video' : 'image';

  return `${CLOUDINARY_CONFIG.baseUrl}/${resourceType}/upload/${transformString}${assetId}`;
}

/**
 * Generate optimized image URL
 */
export function getOptimizedImage(publicId: string, options: TransformOptions = {}) {
  return getCloudinaryUrl(publicId, 'image', {
    quality: 'auto',
    format: 'auto',
    crop: 'fill',
    gravity: 'auto',
    ...options,
  });
}

/**
 * Generate optimized video URL
 */
export function getOptimizedVideo(publicId: string, options: TransformOptions = {}) {
  return getCloudinaryUrl(publicId, 'video', {
    quality: 'auto',
    format: 'auto',
    ...options,
  });
}

/**
 * Generate thumbnail for video
 */
export function getVideoThumbnail(publicId: string, options: TransformOptions = {}) {
  return getCloudinaryUrl(publicId, 'video', {
    format: 'jpg',
    quality: 'auto',
    ...options,
  }).replace('/video/upload/', '/video/upload/so_0/'); // so_0 gets first frame
}

/**
 * Get responsive image srcset
 */
export function getResponsiveSrcSet(publicId: string, widths: number[] = [640, 768, 1024, 1280, 1536]) {
  return widths
    .map(width => `${getOptimizedImage(publicId, { width })} ${width}w`)
    .join(', ');
}

export default {
  config: CLOUDINARY_CONFIG,
  getUrl: getCloudinaryUrl,
  getImage: getOptimizedImage,
  getVideo: getOptimizedVideo,
  getVideoThumbnail,
  getResponsiveSrcSet,
};
