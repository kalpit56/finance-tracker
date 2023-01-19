import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
})
export class DetailsPagePage {
  @ViewChild('chart') doughnutChart: ElementRef;


  amountRemaining = 2500;
  amountPaid = 1000;
  totalAmount = 3500
  merchantName = "Photgraphy";
  chart: any;

  private data = {
    datasets: [{
      label: 'Amount Paid',
      data: [this.amountPaid, this.totalAmount - this.amountPaid],
      backgroundColor: [
        'rgb(0, 255, 0)',
        'rgb(255, 0, 0)',
      ],
      hoverOffset: 4
    }]
  };

  constructor(private router: Router) {
    
   }

  ngAfterViewInit() {
    // this.chart = new Chart(this.doughnutChart.nativeElement, {
    //   type: 'doughnut',
    //   data: this.data,
    //   options: {
    //     rotation: -90,
    //     circumference: 180,
    //   }
    // })
  }

  back() {
    this.router.navigate(['/']);
  }
  

}
