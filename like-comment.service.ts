import { Injectable } from '@angular/core';
import { Likes } from './like-comment/comment';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs/Observable';

@Injectable()
export class LikeCommentService {
  private url='http://localhost:8087/comments/';
  private url1='http://localhost:8087/likes/';
  private url2='http://localhost:8087/dislikes/';
  private url3='http://localhost:8087/comments';
  private url4='http://localhost:8087/comment';

  constructor(private http:HttpClient) { }

  public getComments(status_id:number){
    return this.http.get<Comment[]>(this.url+status_id);
  }
  public addComments(status_id:number,comments:Comment){
    return this.http.post<Comment>(this.url+status_id,comments);
  }
  public updateLikeCount(status_id:number,like:Likes){
    return this.http.post<Likes>(this.url1+status_id,like);
  }
  public updateDislikeCount(status_id:number,like:Likes){
    return this.http.post<Likes>(this.url2+status_id,like);
  }
  public getLikeCount(status_id:number){
    return this.http.get<number>(this.url1+status_id);
  }
  public getDislikeCount(status_id:number){
    return this.http.get<number>(this.url2+status_id);
  }

  
commentLikeIncre(status_id:number,commentId:number){
return this.http.put<number>(this.url3+'/'+status_id+'/'+commentId,{})
} 
commentDislikeIncre(status_id:number,commentId:number){
  return this.http.put<number>(this.url4+'/'+status_id+'/'+commentId,{})
  } 
 


}
