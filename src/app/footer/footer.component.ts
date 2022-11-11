import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  showToast() {
    navigator.clipboard.writeText('hello@snorkelology.co.uk').then( () => {
      this.toastr.info('Email copied to clipboard', '', {
        closeButton: true,
        tapToDismiss: true,
        positionClass: 'toast-bottom-right'
      });
    })

  }

  ngOnInit(): void {
  }

}
