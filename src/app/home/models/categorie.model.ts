export interface Categorie {
  kind:  string;
  etag:  string;
  items: ItemCat[];
}

export interface ItemCat {
  kind?:    Kind;
  etag:    string;
  id:      string;
  snippet: Snippet;
}

export enum Kind {
  YoutubeVideoCategory = "youtube#videoCategory",
}

export interface Snippet {
  title:      string;
  assignable: boolean;
  channelId?:  ChannelID;
}

export enum ChannelID {
  UCBR860B28Hp2BmDPdntcQ = "UCBR8-60-B28hp2BmDPdntcQ",
}
