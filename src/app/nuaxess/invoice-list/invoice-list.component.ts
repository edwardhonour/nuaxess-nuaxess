import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { DataService } from 'app/data.service';
import { FormBuilder } from '@angular/forms';
import { MatYearView } from '@angular/material/datepicker';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit, OnDestroy {
  navigation: Navigation;
  isScreenSmall: boolean;
  term: any;
  p: any;
  formFieldHelpers: string[] = [''];

    data: any;
    selectedProject: string = 'ACME Corp. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    currentYear: any;
    email: any;
    user: any;

    /**
     * Constructor
     */

     constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private _navigationService: NavigationService,
      private _fuseMediaWatcherService: FuseMediaWatcherService,
      private _fuseNavigationService: FuseNavigationService,
      private _dataService: DataService,
      private _formBuilder: FormBuilder
  ) { }

    ngOnInit(): void
    {      

            this._activatedRoute.data.subscribe(({ 
              data, menudata, userdata })=> { 
                this.data=data;
                if (this.data.user.force_logout>0) {
                  localStorage.removeItem('uid');
                  this._router.navigate(['/forced-off',this.data.user.force_logout]);
              }
                this.user=userdata;
                this.navigation=menudata
                console.log(data)
            }) 
            
//            this._dataService.getVerticalMenu()
//            .pipe(takeUntil(this._unsubscribeAll))
//            .subscribe((data: Navigation)=> {             
//                    this.navigation=data
//            })  
    
//            this._dataService.getUser()
//            .pipe(takeUntil(this._unsubscribeAll))
//            .subscribe((user: any)=> {             
//                    this.user=user
//            })  
          
//            this._fuseMediaWatcherService.onMediaChange$
//            .pipe(takeUntil(this._unsubscribeAll))
//            .subscribe(({matchingAliases}) => {
//                // Check if the screen is small
//                this.isScreenSmall = !matchingAliases.includes('md');
//            });
              
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _fixSvgFill(element: Element): void
    {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
             .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
             .forEach((el) => {
                 const attrVal = el.getAttribute('fill');
                 el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
             });
    }

    /**
     * Prepare the chart data from the data
     *
     * @private
     */

    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    getFormFieldHelpersAsString(): string
    {
        return this.formFieldHelpers.join(' ');
    }

    exportInvoice(id: any) {
      window.open(
        "https://myna-api.com/api/invoice_export.php?id="+id, "_blank");
    }

    postForm() {
        this._dataService.postForm("post-add-org", this.data).subscribe((data:any)=>{
          if (data.error_code=="0") {
            this._router.navigate(['/org-dashboard',data.id])
          } else {     
//            this.error=data.error_message
          }
        });
      }

      flipMyNa(m: any) {
        this.data.movedata['id']=m.id;
        if (m.myna_only=='N') {
          this.data.movedata['value']='Y';
        } else {
          this.data.movedata['value']='N';
        }
        this._dataService.postForm("flip-myna", this.data.movedata).subscribe((data:any)=>{
          if (data.error_code=="0") {
            if (m.myna_only=='N') {
              m.myna_only='Y'
            } else {
              m.myna_only='N'
            }   
          } else {     

          }
        });
      }

      flipReady(m: any) {
        this.data.movedata['id']=m.id;
        if (m.ready_to_send=='N') {
          this.data.movedata['value']='Y';
        } else {
          this.data.movedata['value']='N';
        }
        this._dataService.postForm("flip-ready", this.data.movedata).subscribe((data:any)=>{
          if (data.error_code=="0") {
            if (m.ready_to_send=='N') {
              m.ready_to_send='Y'
            } else {
              m.ready_to_send='N'
            }   
          } else {     

          }
        });
      }

      sendInvoice(m: any) {
        if (m.ready_to_send=='N') {
          alert('INVOICE IS NOT READY TO SEND!')
        } else {
           if (confirm("Are you SURE you want to email this invoice?")) {
            window.open(
              "https://myna-api.com/api/pdf1.php?id="+m.company_id+"&display=E"+"&month_id="+this.data.month_id, "_blank");
           }
        }
      }

      showInvoice(id: any) {
        window.open(
          "https://myna-api.com/api/pdf1.php?id="+id+"&display=B"+"&month_id="+this.data.month_id, "_blank");
      }


}
