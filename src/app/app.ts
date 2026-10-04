import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('SegundoPacial_Angular');

  ngOnInit(): void {
    initFlowbite();
  }
}
