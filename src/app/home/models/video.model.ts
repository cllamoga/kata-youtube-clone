export interface Video {
  kind:          string;
  etag:          string;
  items:         ItemVideo[];
  nextPageToken: string;
  pageInfo:      PageInfo;
}

export interface ItemVideo {
  kind:           string;
  etag:           string;
  id:             string;
  snippet:        Snippet;
  contentDetails: ContentDetails;
  statistics:     Statistics;
  icon?:          string;
}

export interface ContentDetails {
  duration:           string;
  dimension:          string;
  definition:         string;
  caption:            string;
  licensedContent:    boolean;
  contentRating:      ContentRating;
  projection:         string;
  regionRestriction?: RegionRestriction;
}

export interface ContentRating {
}

export interface RegionRestriction {
  blocked: string[];
}

export interface Snippet {
  publishedAt:          string;
  channelId:            string;
  title:                string;
  description:          string;
  thumbnails:           Thumbnails;
  channelTitle:         string;
  tags:                 string[];
  categoryId:           string;
  liveBroadcastContent: string;
  localized:            Localized;
}

export interface Localized {
  title:       string;
  description: string;
}

export interface Thumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres:   Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

export interface Statistics {
  viewCount:     string;
  favoriteCount: string;
  commentCount:  string;
  likeCount?:    string;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}
