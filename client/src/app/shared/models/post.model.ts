export interface PostModel {
  user_id: string;
  message: string;
  date: string;
  commentsArray?: {
    userId: string,
    pseudo: string,
    date: Date,
    comment: string
  }[];
}
