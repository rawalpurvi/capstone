import { Component, OnInit, Input } from '@angular/core';
import { Movie, MoviesService } from 'src/app/services/movies.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
  providers: [DatePipe]
})
export class MovieFormComponent implements OnInit {
  @Input() movie: Movie;
  @Input() isNew: boolean;
  myDate = new Date();

  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private movieService: MoviesService,
    public datepipe: DatePipe
    ) { }

  ngOnInit() {
    if (this.isNew) {
      this.movie = {
        id: -1,
        title: '',
        release_date: this.datepipe.transform(this.myDate, 'yyyy-MM-dd'),
        all_actors: [],
        selected_actors: []
      };
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveClicked() {
    if(!this.movie.title){
      return;
    }
    else{
      this.movieService.saveMovie(this.movie);
      this.closeModal();
    }
  }

  deleteClicked() {
    this.movieService.deleteMovie(this.movie);
    this.closeModal();
  }
}
