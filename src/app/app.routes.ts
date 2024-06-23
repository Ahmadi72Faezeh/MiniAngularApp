import {PostIndexComponent} from "./pages/post/post-index/post-index.component";
import {Routes} from "@angular/router";
import {HomeIndexComponent} from "./pages/home/home-index/home-index.component";
import {EditPostComponent} from "./pages/post/edit-post/edit-post.component";
import {TasksIndexComponent} from "./pages/task/tasks-index/tasks-index.component";
import {StoreIndexComponent} from "./pages/store/store-index/store-index.component";
import {ProductListComponent} from "./pages/store/product-list/product-list.component";

export const routes: Routes = [
    {path: 'posts', component: PostIndexComponent},
    {path: 'home', component: HomeIndexComponent},
    {path: 'edit-post/:id', component: EditPostComponent},
    {path: 'tasks', component: TasksIndexComponent},
    {path: 'store', component: StoreIndexComponent},
    {path: 'products', component: ProductListComponent},
    {path: '**', component: HomeIndexComponent},

];




