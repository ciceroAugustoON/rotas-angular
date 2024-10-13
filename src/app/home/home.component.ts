import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  login : string = ''
  
  constructor(private route: ActivatedRoute, private router : Router) { }

  cadastrar() {
    this.router.navigate(['/cadastrar'])
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.login = params.get('name')!;
    });
  }
}
