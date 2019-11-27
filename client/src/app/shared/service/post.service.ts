import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { PostModel } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

    // CREATION BEHAVIOUR SUBJECT pour la liste de article
  public postList: BehaviorSubject<PostModel[]> = new BehaviorSubject(null);
  public url: string;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  public createPost(newPost: PostModel): Observable<any> {
    return this.http.post<string>('/request/post/create', newPost).pipe(
      tap((postListUpdated) => {
        this.postList.next(postListUpdated);
      })
    );
  }

  public createComment(newComment: any): Observable<any> {
    return this.http.post<any>('/request/post/comment/create', newComment).pipe(
      tap((postListUpdated) => {
        this.postList.next(postListUpdated);
      }),
      switchMap(() => {
        return this.postList;
      })
    );
  }

  public postRoute(userId: string) {
    this.router.navigate(['accueil', 'post', userId]);
  }

  public getPost(userId: any): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId);
    return this.http.get('/request/post/get', {params}).pipe(
      tap((postListUpdated) => {
        this.postList.next(postListUpdated);
      },
      switchMap(() => {
        return this.postList;
      }))
    );
  }

  public deletePost(userId: string, postId: string ): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId)
      .set('postId', postId);
    return this.http.delete('/request/post/delete', {params}).pipe(
      tap((postListUpdated) => {
        this.postList.next(postListUpdated);
      })
    );
  }

}
