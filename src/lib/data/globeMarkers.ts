export interface GlobeMarker {
  id: string;
  /** [latitude, longitude] */
  location: [number, number];
  sticker: string;
  /** Short blurb shown in a message-style bubble as this pin rotates into view */
  caption: string;
  /** Which side the bubble opens toward (and its tail points from). Defaults to 'right'. */
  bubbleSide?: 'left' | 'right';
}

// Edit this list to swap in places/interests that matter to you.
// Find coordinates for a place at latlong.net, then pick any emoji for the sticker
// and write a short caption.
export const globeMarkers: GlobeMarker[] = [
  {
    id: 'cornell',
    location: [42.44, -76.5],
    sticker: '🎓',
    caption: 'studying cs at cornell',
    bubbleSide: 'left'
  },
  { id: 'estonia', location: [59.44, 24.75], sticker: '🇪🇪', caption: 'where my family is from' },
  { id: 'golden-bc', location: [51.3, -116.96], sticker: '⛰️', caption: 'favorite ski mountain' },
  { id: 'portillo', location: [-32.84, -70.13], sticker: '🇨🇱', caption: 'worked a summer here!' },
  { id: 'sydney', location: [-33.87, 151.21], sticker: '🇦🇺', caption: 'dream vacation' },
  { id: 'rincon', location: [18.34, -67.25], sticker: '🏄', caption: 'good surf' },
  { id: 'hokkaido', location: [43.06, 141.35], sticker: '🇯🇵', caption: 'dream ski trip' },
  { id: 'antarctica', location: [-77.85, 166.67], sticker: '🇦🇶', caption: 'chilly' }
];
