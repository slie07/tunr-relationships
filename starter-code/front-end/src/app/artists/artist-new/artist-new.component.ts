import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-new',
  templateUrl: './artist-new.component.html',
  styleUrls: ['./artist-new.component.css']
})
export class ArtistNewComponent implements OnInit {

	newArtist = <any>{};

  constructor(
  	private artistsService : ArtistsService,
    private router : Router
  ) { }

  ngOnInit() {

  }

  saveArtist(newArtist) {
  	console.log("saving artist");
  	console.log(newArtist);
  	this.artistsService.saveArtist(newArtist)
  			.subscribe(response => {
			console.log(response.json());
			let artist = response.json();
			this.router.navigate(["/artists/" + artist.id]);
		})
  }

}
