import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {DialogSuccessComponent} from "../dialog-success/dialog-success.component";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DialogRulesComponent} from "../dialog-rules/dialog-rules.component";

@Component({
  selector: 'app-toastr-test',
  templateUrl: './toastr-test.component.html',
  styleUrls: ['./toastr-test.component.css']
})
export class ToastrTestComponent implements OnInit {
  closeResult = '';
  constructor(private toarts: ToastrService,
              public dialog: MatDialog,
              private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openToarts() {
    this.toarts.success('mes', 'title')
  }
  openDialogSuccess() {
    this.dialog.open(DialogSuccessComponent);
  }
  openDialogRules() {
    this.dialog.open(DialogRulesComponent);
  }

}
