import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';
// import { Observable } from 'rxjs/internal/Observable';

// SERVICES
import { PostService } from 'src/app/shared/service/post.service';
import { UserService } from 'src/app/shared/service/user.service';

// MODEL
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  public postForm: FormGroup ;
  public commentForm: FormGroup ;
  public currentUser: User;
  public isCurrentUser = false;
  public newPost: {user_id: string, message: string, date: string};
  public newComment: { postId: string, userId: string, pseudo: string, date: Date, comment: string };
  public date: any;
  public postArray;
  public userId: string;
  public displayedUser: User;
  public areFriends: boolean;
  public allUsersArray: User[];
  private sub1: Subscription;
  private sub2: Subscription;
  private sub3: Subscription;
  private sub4: Subscription;
  private sub5: Subscription;
  private sub6: Subscription;
  private sub7: Subscription;
  private sub8: Subscription;



  constructor(
    private userService: UserService,
    private postService: PostService,
    private fb: FormBuilder,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.postForm = this.fb.group({
      message: [ '', [Validators.required]]
    });

    this.commentForm = this.fb.group({
      message: [ '', [Validators.required]]
    });


    // RECUPERATION ID
    this.sub1 = this.userService.currentUser.subscribe(
      currentUser => {
        this.currentUser = currentUser;

        this.sub2 = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
          this.userId = paramMap.get('id');

          // Le current User est-il le rédacteur des posts?
          this.sub3 = this.userService.getAllUsers().subscribe( allUsersArray => {
            this.allUsersArray = allUsersArray;
            if (this.allUsersArray) {
              this.allUsersArray.forEach( elmt => {
                if (elmt._id === this.userId) {
                  if (this.currentUser &&  elmt._id === this.currentUser._id ) {
                    this.isCurrentUser = true;
                    this.displayedUser = elmt;
                    this.areFriends = this.displayedUser.friends.includes(this.currentUser._id);
                  } else {
                    if (this.currentUser) {
                      this.isCurrentUser = false;
                      this.displayedUser = elmt;
                      this.areFriends = this.displayedUser.friends.includes(this.currentUser._id);
                    }
                  }
                  // Récupération des posts en bdd
                  this.sub4 = this.postService.getPost(this.userId).subscribe(
                    (postArray) => {
                      this.postArray = postArray;
                    }
                  );
                }
              });
            }

          });
        });

      }
      );

    // Mise a jour du behaviour subject postList
    this.sub5 = this.postService.postList.subscribe( postListUpdated => {
      this.postArray = postListUpdated;
    });
  }

  public createPost(): void {
    this.date = new Date();
    this.newPost = {
      // tslint:disable-next-line: no-string-literal
      user_id: this.currentUser['_id'],
      message: this.postForm.value.message,
      date: this.date
    };
    this.sub6 = this.postService.createPost(this.newPost).subscribe( (postListUpdated) => {
      this.postForm.reset();
    }, err => {
      console.log('impossible de crée un post', err);
    });
  }

  public createComment(post) {
    this.date = new Date();
    this.newComment = {
      postId : post._id,
      userId : this.currentUser._id,
      pseudo : this.currentUser.pseudo,
      date: this.date,
      comment : this.commentForm.value.message
    };
    this.sub7 = this.postService.createComment(this.newComment).subscribe((postListUpdated) => {
      this.postArray = postListUpdated;
      this.commentForm.reset();
    }, err => {
      console.log('impossible de crée un commentaire', err);
    });
  }

  public getProfileUser() {
    this.userService.getProfile(this.displayedUser._id);
  }

  public deletePost(userId: string, postId: string) {
    this.sub8 = this.postService.deletePost(userId, postId).subscribe(
      (postListUpdated) => {
        this.postArray = postListUpdated;
      }
    );
  }

  ngOnDestroy() {
    if ( this.sub1 ) {
      this.sub1.unsubscribe();
    }
    if ( this.sub2 ) {
      this.sub2.unsubscribe();
    }
    if ( this.sub3 ) {
      this.sub3.unsubscribe();
    }
    if ( this.sub4 ) {
      this.sub4.unsubscribe();
    }
    if ( this.sub5 ) {
      this.sub5.unsubscribe();
    }
    if ( this.sub6 ) {
      this.sub6.unsubscribe();
    }
    if ( this.sub7 ) {
      this.sub7.unsubscribe();
    }
    if ( this.sub8 ) {
      this.sub8.unsubscribe();
    }
  }

}
