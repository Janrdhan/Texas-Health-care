import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare global {
  interface Window {
    Calendly: any;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Texas-Health-care';

  ngOnInit(): void {
    // Inject Calendly's external widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }

  openCalendly(event: Event): void {
    event.preventDefault(); // Prevent default anchor behavior
    // Access Calendly via the global window object
    (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/jurrajanardhan/30min' });
  }


  onButtonClick() {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    window.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/jurrajanardhan/30min',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: undefined
      });
    };
  }
}
