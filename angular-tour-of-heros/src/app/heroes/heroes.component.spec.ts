import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    const getHeroes = () => of(HEROES);
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [
        { provide: HeroService, useValue: { getHeroes } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should show heroes', () => {
    const result = fixture.debugElement.queryAll(By.css('.name'));
    expect(result.length).toBe(9);
    const firstel = result[0]
    expect(firstel.nativeElement.textContent).toContain('Dr. Nice');
    expect(findEl(result, "Bombasto")).not.toBeNull();
    expect(findEl(result, "Dr. IQ")).not.toBeNull();
    expect(findEl(result, "Magma")).not.toBeNull();
  });

  const findEl = (result: DebugElement[], str: string) =>
    result.find(x => x.nativeElement.textContent.includes(str))

});
