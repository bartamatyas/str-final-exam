import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  filterPhrase: string = '';
  filterKey: string = 'name';

  deleteUser: User = new User;


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
     this.userService.getAll();
     this.users$.subscribe();
  }

  deleteThis(user: User): void {
    this.userService.remove(this.deleteUser).subscribe(
    () => {
             this.userService.getAll();
           }
  )
}

  

}
