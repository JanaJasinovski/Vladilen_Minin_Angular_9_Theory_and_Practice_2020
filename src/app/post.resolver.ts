import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Post, PostsService } from "./posts.service";
import { Observable, delay, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PostResolver implements Resolve<Post> {

    constructor(private postsService: PostsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post | Observable<Post> | Promise<Post> {
        return of(this.postsService.getById(route.params['id'])!)
            .pipe(delay(1500))
    }

}