import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubUsersProvider } from '../../providers/github-users/github-users';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public github: GithubUsersProvider
  ) {}

  ionViewDidLoad() {
    this.github.load().subscribe(users => this.users = users);
  }

}
