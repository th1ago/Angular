import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule
  ],
  providers: [
    NewsService
  ],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {
  newsForm!: FormGroup;
  loading = signal(false)

  constructor(private service: NewsService){
    this.newsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  onSubmit(){
    this.loading.set(true);
    if(this.newsForm.valid){
      this.service.sendData(this.newsForm.value.name, this.newsForm.value.email).subscribe({
        next: () => {
          this.newsForm.reset();
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      })
    }
  }
}
