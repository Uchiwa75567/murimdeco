/**
 * MurimDeco Media Data from Cloudinary
 * All media assets organized by category
 */

export interface MediaAsset {
  id: string;
  assetId: string; // Can be Cloudinary publicId or direct URL
  type: 'image' | 'video';
  category: string;
  title?: string;
  description?: string;
}

/**
 * Homepage Video
 */
export const homepageVideo: MediaAsset = {
  id: 'accueil',
  assetId: 'accueil_osifqk',
  type: 'video',
  category: 'homepage',
  title: 'Vidéo d\'accueil MurimDeco',
  description: 'Vidéo de présentation de MurimDeco'
};

/**
 * Logo
 */
export const logo: MediaAsset = {
  id: 'logo',
  assetId: 'murimdeco-removebg-preview_tdh8yz',
  type: 'image',
  category: 'logo',
  title: 'MurimDeco Logo'
};

/**
 * 1 An Anniversaire
 */
export const anniversaire1An: MediaAsset[] = [
  {
    id: '1an_annif',
    assetId: 'https://picsum.photos/800/600?random=2',
    type: 'image',
    category: '1an_anniversaire',
    title: '1 An Anniversaire',
    description: 'Décoration pour 1er anniversaire'
  }
];

/**
 * 50ème Anniversaire MurimDeco
 */
export const anniversaire50: MediaAsset[] = [
  {
    id: '50_anniv_1',
    assetId: 'https://picsum.photos/800/600?random=3',
    type: 'image',
    category: '50_anniversaire',
    title: '50ème Anniversaire MurimDeco',
    description: 'Célébration du 50ème anniversaire'
  },
  {
    id: '50_anniv_2',
    assetId: 'https://picsum.photos/800/600?random=4',
    type: 'image',
    category: '50_anniversaire',
    title: '50ème Anniversaire MurimDeco',
    description: 'Célébration du 50ème anniversaire'
  }
];

/**
 * Akanda
 */
export const akanda: MediaAsset[] = [
  {
    id: 'akanda',
    assetId: 'https://picsum.photos/800/600?random=5',
    type: 'image',
    category: 'akanda',
    title: 'Akanda',
    description: 'Projet Akanda'
  }
];

/**
 * Octobre Rose
 */
export const octobreRose: MediaAsset[] = [
  {
    id: 'octobre_rose_1',
    assetId: 'https://picsum.photos/800/600?random=6',
    type: 'image',
    category: 'octobre_rose',
    title: 'Octobre Rose',
    description: 'Campagne Octobre Rose'
  },
  {
    id: 'octobre_rose_2',
    assetId: 'https://picsum.photos/800/600?random=7',
    type: 'image',
    category: 'octobre_rose',
    title: 'Octobre Rose',
    description: 'Campagne Octobre Rose'
  }
];

/**
 * Vidéos MurimDeco
 */
export const murimVideos: MediaAsset[] = [
  {
    id: 'video_1',
    assetId: 'AQOnuAzlLTh4BuaRpZlJ6o95NUdRo2WZPvJkEsfCWkUUVbryJ2QN52jNnhe7pVX5OIRP-TtcimDClrGXCBEyHmC11orVeg95i0pYY_9yWJ15wA_thwecx',
    type: 'video',
    category: 'showcase',
    title: 'Décoration Événementielle',
    description: 'Découvrez nos créations pour événements spéciaux'
  },
  {
    id: 'video_2',
    assetId: 'AQPIfXBdD9at6kRP6nBF7oDzBOWs-Y8KokTOKoRt2LxN3AAL5u3-qu2qEzCuBgebXKA9knAYzIHRKEp-BFQrcIP_giU25CxcukE7BJe_oHsUpw_ryzdrj',
    type: 'video',
    category: 'showcase',
    title: 'Ambiance MurimDeco',
    description: 'L\'atmosphère unique de nos décorations'
  },
  {
    id: 'video_3',
    assetId: 'AQNSg5UudK6XJtZhsXL__XnzofaMrpNHj4uRI7pyC8kvsJD0YUF-aeDexsTqWtulZOnkbRf_hiKo9iA4Zvz7QyCulwDAv_yX0e50c2S8pJ6T3g_fcjpvs',
    type: 'video',
    category: 'showcase',
    title: 'Réalisations Clients',
    description: 'Témoignages visuels de nos projets réussis'
  },
  {
    id: 'video_4',
    assetId: 'AQNl6xsbAL4Kb9Mcc0T_95biaoKCHOwt__WDiKLO333Pw83Jt78zDLGSNs--M2ZjblA3myGHgTek8P-FKLnjKMuz4Q0XdhhwNMrp6TBgdES2vA_w0l3vo',
    type: 'video',
    category: 'showcase',
    title: 'Innovation Décorative',
    description: 'Nos dernières tendances en décoration'
  },
  {
    id: 'video_5',
    assetId: 'AQM8ASAjHh1-R4l9IbJDxzwpELVvnphXihKbiFejtI27P923xcjUfErzNq5Yt6t8JgH19jX1RGbyUSs_3hJlYQ2JYTEeiAV6HAnW_22YO8g49Q_ijhx1l',
    type: 'video',
    category: 'showcase',
    title: 'Équipe MurimDeco',
    description: 'Rencontrez l\'équipe derrière vos événements'
  }
];

/**
 * All Gallery Images (combined from all categories)
 */
export const allGalleryImages: MediaAsset[] = [
  ...anniversaire1An,
  ...anniversaire50,
  ...akanda,
  ...octobreRose
];

/**
 * All Media Assets
 */
export const allMediaAssets: MediaAsset[] = [
  homepageVideo,
  logo,
  ...allGalleryImages,
  ...murimVideos
];

/**
 * Get media by category
 */
export function getMediaByCategory(category: string): MediaAsset[] {
  return allMediaAssets.filter(asset => asset.category === category);
}

/**
 * Get media by type
 */
export function getMediaByType(type: 'image' | 'video'): MediaAsset[] {
  return allMediaAssets.filter(asset => asset.type === type);
}

/**
 * Get media by ID
 */
export function getMediaById(id: string): MediaAsset | undefined {
  return allMediaAssets.find(asset => asset.id === id);
}
