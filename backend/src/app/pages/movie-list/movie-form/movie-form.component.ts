import { Component, OnInit, Input } from '@angular/core';
import { Movie, MoviesService } from 'src/app/services/movies.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() movie: Movie;
  @Input() isNew: boolean;

  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private movieService: MoviesService
    ) { }

  ngOnInit() {
    if (this.isNew) {
      this.movie = {
        id: -1,
        title: '',
        release_date: '',
        actor: []
      };
      this.assignActor();
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  assignActor(i: number = 0) {
    this.movie.actor.splice(i + 1, 0, {name: ''});
  }

  removeActor(i: number) {
    this.movie.actor.splice(i, 1);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveClicked() {
    this.movieService.saveMovie(this.movie);
    this.closeModal();
  }

  deleteClicked() {
    this.movieService.deleteMovie(this.movie);
    this.closeModal();
  }
}
