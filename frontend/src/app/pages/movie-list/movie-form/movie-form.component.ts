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
        release_date: 'YYYY-MM-DD',
        actors: [],
        all_actors: [],
        selected_actors: []
      };
    }
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
