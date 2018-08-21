import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[myColor]' })
export class ColorDirective {

    constructor(private el: ElementRef) { }

    @HostListener('window:click', ['$event'])
    windowClick($event) {
        console.log("ColorDirective HostListener :");
        console.log($event);
    }

    @HostListener('window:keydown', ['$event'])
    windowKeydown($event) {
        console.log("ColorDirective windowKeydown :");
        console.log($event);
        console.log("key : " + $event.key);
        if ($event.key === "ArrowUp") {
            this.changeColor("red")
        } else if ($event.key === "ArrowDown") {
            this.changeColor("blue")
        } else if ($event.key === "ArrowRight") {
            this.changeColor("green")
        } else if ($event.key === "ArrowLeft") {
            this.changeColor("grey")
        }
    }

    private changeColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}