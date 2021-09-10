export type VideoMetadata = {
  videoId: string;
  title: string;
  channel?: string;
  thumbnail_url?: string;
  views?: number;
  category?: 'trending' | 'related' | 'popular' | 'recommended' | 'latest';
};

export const trendingData: VideoMetadata[] = [
  {
    videoId: 'd68a5f54-fecc-444a-b450-2de1f9d8e8ef',
    title: 'Nobody - Official Trailer (HD)',
    channel: 'Universal Pictures',
    category: 'trending',
    thumbnail_url: 'https://i.ytimg.com/vi/wZti8QKBWPo/maxresdefault.jpg',
    views: 9974653,
  },
  {
    videoId: '75f9f418-3915-418e-8240-eca1ff61e58e',
    title: 'Coming 2 America - Official Trailer',
    channel: 'Amazon Prime VvideoIdeo',
    category: 'trending',
    thumbnail_url: 'https://i.ytimg.com/vi_webp/sY8gUtyeAKE/maxresdefault.webp',
    views: 16170583,
  },
  {
    videoId: 'd9fded79-d655-4d2d-ae03-6ad408a7580c',
    title: "Marvel Studios' Loki | Official Trailer | Disney+",
    channel: 'Marvel Entertainment',
    category: 'trending',
    thumbnail_url: 'https://i.ytimg.com/vi/nW948Va-l10/maxresdefault.jpg',
    views: 15366393,
  },
  {
    videoId: '1c45391e-c44b-4d87-9ad8-5a84d987da02',
    title: 'Official Trailer | The Falcon and the Winter Soldier | Disney+',
    channel: 'Marvel Entertainment',
    category: 'trending',
    thumbnail_url: 'https://i.ytimg.com/vi/IWBsDaFWyTE/maxresdefault.jpg',
    views: 15152805,
  },
  {
    videoId: '257d73a3-4b2f-4586-9541-e888804e432e',
    title: 'THE JACK IN THE BOX 2: Awakening Trailer (2021)',
    channel: 'KinoCheck International',
    category: 'trending',
    thumbnail_url: 'https://i.ytimg.com/vi/VVcT0WpmheM/maxresdefault.jpg',
    views: 62463,
  },
];

// TODO: Mock data for 5 trending videos and 4 related videos
