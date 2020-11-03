import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { LayoutView } from '../model/layout-view.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  mobileLayoutObserver: any;
  desktopLayoutObserver: any;
  layoutView: LayoutView;

  constructor(private breakpointObserver: BreakpointObserver) { 
    this.layoutView = new LayoutView();

    this.mobileLayoutObserver = this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.HandsetPortrait
    ]);

    this.desktopLayoutObserver = this.breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large
    ]);

    this.mobileLayoutObserver.subscribe(
  result => {
  //console.log('Current mobile layout observer BreakpointState : ' + JSON.stringify(result));
  if (result.matches) {
    this.updateLayoutForMobileView();
  }
});

this.desktopLayoutObserver.subscribe(
  result => {
  //console.log('Current desktop layout observer BreakpointState : ' + JSON.stringify(result));
  if (result.matches) {
    this.updateLayoutForDesktopView();
  }
});
  }

  updateLayoutForMobileView() {
    //console.log('Updating the layout for mobile view');
    this.layoutView.isMobile = true;
    this.layoutView.isDesktop = false;
  }

  updateLayoutForDesktopView() {
    //console.log('Updating the layout for desktop view');
    this.layoutView.isMobile = false;
    this.layoutView.isDesktop = true;
  }

  public isMobile(): boolean {
    return this.layoutView.isMobile;
  }

  public isDesktop(): boolean {
    return this.layoutView.isDesktop;
  }
}
