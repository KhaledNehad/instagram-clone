export interface IPost {
  id: string;
  user: IUser;
  image: string;
  likes: ILike[];
  caption: string;
  comments: IComment[];
  postedAt: string;
  location?: string;
  tags?: string[];
  isLiked?: boolean;
  isBookmarked?: boolean;
}

export interface IComment {
  id: string;
  user: IUser;
  text: string;
  time?: string;
  isLiked?: boolean;
  likes?: number;
}

export interface ILike {
  id: string;
  user: IUser;
  time?: string;
}

export interface IUser {
  id: string;
  username: string;
  avatar: string;
  followers?: number;
  following?: number;
  posts?: IPost[];
  bio?: string;
  location?: string;
  website?: string;
  isFollowed?: boolean;
  isBlocked?: boolean;
}

export interface IStory {
  id: string;
  user: IUser;
  image: string;
  time: string;
  isSeen: boolean;
}
