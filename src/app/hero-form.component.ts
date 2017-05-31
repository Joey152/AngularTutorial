import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Fleible', 'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit(): void {
        this.submitted = true;
    }

    newHero(): void {
        this.model = new Hero(42, '', '');
    }
}
