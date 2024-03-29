import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { AdminDashboardComponent } from './nuaxess/admin-dashboard/admin-dashboard.component';
import { AuthGuardOriginal } from './auth.guard';
import { DataResolver, EnrollResolver, MenuResolver, UserResolver } from './data.resolver';
import { AddUserComponent } from './nuaxess/add-user/add-user.component';
import { UserListComponent } from './nuaxess/user-list/user-list.component';
import { UserDashboardComponent } from './nuaxess/user-dashboard/user-dashboard.component';
import { AddOrgComponent } from './nuaxess/add-org/add-org.component';
import { OrgListComponent } from './nuaxess/org-list/org-list.component';
import { OrgDashboardComponent } from './nuaxess/org-dashboard/org-dashboard.component';
import { AddCompanyComponent } from './nuaxess/add-company/add-company.component';
import { CompanyListComponent } from './nuaxess/company-list/company-list.component';
import { CompanyDashboardComponent } from './nuaxess/company-dashboard/company-dashboard.component';
import { AddPlanComponent } from './nuaxess/add-plan/add-plan.component';
import { PlanListComponent } from './nuaxess/plan-list/plan-list.component';
import { PlanDashboardComponent } from './nuaxess/plan-dashboard/plan-dashboard.component';
import { AddQuoteComponent } from './nuaxess/add-quote/add-quote.component';
import { QuoteListComponent } from './nuaxess/quote-list/quote-list.component';
import { QuoteDashboardComponent } from './nuaxess/quote-dashboard/quote-dashboard.component';
import { AddQuoteRequestComponent } from './nuaxess/add-quote-request/add-quote-request.component';
import { QuoteRequestListComponent } from './nuaxess/quote-request-list/quote-request-list.component';
import { QuoteRequestDashboardComponent } from './nuaxess/quote-request-dashboard/quote-request-dashboard.component';
import { EditOrgComponent } from './nuaxess/edit-org/edit-org.component';
import { EditPlanComponent } from './nuaxess/edit-plan/edit-plan.component';
import { EditCompanyComponent } from './nuaxess/edit-company/edit-company.component';
import { EditMemberComponent } from './nuaxess/edit-member/edit-member.component';
import { EditUserComponent } from './nuaxess/edit-user/edit-user.component';
import { EditQuoteComponent } from './nuaxess/edit-quote/edit-quote.component';
import { UserEnrollComponent } from './nuaxess/user-enroll/user-enroll.component';
import { BadminComponent } from './nuaxess/badmin/badmin.component';
import { EadminComponent } from './nuaxess/eadmin/eadmin.component';
import { DashboardComponent } from './nuaxess/dashboard/dashboard.component';
import { ActivePlanDashboardComponent } from './nuaxess/active-plan-dashboard/active-plan-dashboard.component';
import { EmployeeDashboardComponent } from './nuaxess/employee-dashboard/employee-dashboard.component';
import { EmployeeIHQComponent } from './nuaxess/employee-ihq/employee-ihq.component';
import { MemberInfoComponent } from './nuaxess/member-info/member-info.component';
import { MemberFamilyComponent } from './nuaxess/member-family/member-family.component';
import { MemberPlansComponent } from './nuaxess/member-plans/member-plans.component';
import { MemberIHQComponent } from './nuaxess/member-ihq/member-ihq.component';
import { MemberProfileComponent } from './nuaxess/member-profile/member-profile.component';
import { MemberMedicationsComponent } from './nuaxess/member-medications/member-medications.component';
import { MemberInsuranceComponent } from './nuaxess/member-insurance/member-insurance.component';
import { InvalidTokenComponent } from './nuaxess/invalid-token/invalid-token.component';
import { ForcedLogoutComponent } from './nuaxess/forced-logout/forced-logout.component';
import { NewSigninComponent } from './nuaxess/new-signin/new-signin.component';
import { MemberLookupComponent } from './nuaxess/member-lookup/member-lookup.component';
import { GuardianLookupComponent } from './nuaxess/guardian-lookup/guardian-lookup.component';
import { EmployeeLookupComponent } from './nuaxess/employee-lookup/employee-lookup.component';
import { AddInvoiceComponent } from './nuaxess/add-invoice/add-invoice.component';
import { InvoiceDashboardComponent } from './nuaxess/invoice-dashboard/invoice-dashboard.component';
import { InvoiceListComponent } from './nuaxess/invoice-list/invoice-list.component';
import { ApaPlanListComponent } from './nuaxess/apa-plan-list/apa-plan-list.component';
import { ApaCompanyDashboardComponent } from './nuaxess/apa-company-dashboard/apa-company-dashboard.component';
import { CensusHistoryComponent } from './nuaxess/census-history/census-history.component';
import { BrokerHomeComponent } from './nuaxess/broker-home/broker-home.component';
import { NuaxessHomeComponent } from './nuaxess/nuaxess-home/nuaxess-home.component';
import { PeoCompanyListComponent } from './nuaxess/peo-company-list/peo-company-list.component';
import { CurrentCensusComponent } from './nuaxess/current-census/current-census.component';
import { CurrentTerminationsComponent } from './nuaxess/current-terminations/current-terminations.component';
import { CurrentAdditionsComponent } from './nuaxess/current-additions/current-additions.component';
import { ActivePlansComponent } from './nuaxess/active-plans/active-plans.component';
import { CensusDashboardComponent } from './nuaxess/census-dashboard/census-dashboard.component';
import { UserSettingsComponent } from './nuaxess/user-settings/user-settings.component';
import { UserProfileComponent } from './nuaxess/user-profile/user-profile.component';
import { UserLogoutComponent } from './nuaxess/user-logout/user-logout.component';
import { FixCompanyComponent } from './nuaxess/fix-company/fix-company.component';
import { AddClientPlanComponent } from './nuaxess/add-client-plan/add-client-plan.component';
import { EditClientPlanComponent } from './nuaxess/edit-client-plan/edit-client-plan.component';
import { DuplicateEmployeesComponent } from './nuaxess/duplicate-employees/duplicate-employees.component';
import { CompanyInvoiceComponent } from './nuaxess/company-invoice/company-invoice.component';
import { VendorListComponent } from './nuaxess/vendor-list/vendor-list.component';
import { EditVendorComponent } from './nuaxess/edit-vendor/edit-vendor.component';
import { VendorDashboardComponent } from './nuaxess/vendor-dashboard/vendor-dashboard.component';
import { CommissionDashboardComponent } from './nuaxess/commission-dashboard/commission-dashboard.component';
import { CommissionListComponent } from './nuaxess/commission-list/commission-list.component';
import { AddBrokerComponent } from './nuaxess/add-broker/add-broker.component';
import { EditBrokerComponent } from './nuaxess/edit-broker/edit-broker.component';
import { BrokerDashboardComponent } from './nuaxess/broker-dashboard/broker-dashboard.component';
import { BrokerListComponent } from './nuaxess/broker-list/broker-list.component';
import { AddEmployeeComponent } from './nuaxess/add-employee/add-employee.component';
import { AddQuotedPlanComponent } from './nuaxess/add-quoted-plan/add-quoted-plan.component';
import { EditQuotedPlanComponent } from './nuaxess/edit-quoted-plan/edit-quoted-plan.component';
import { ReportsComponent } from './nuaxess/reports/reports.component';
import { AddAgencyComponent } from './nuaxess/add-agency/add-agency.component';
import { AgencyListComponent } from './nuaxess/agency-list/agency-list.component';
import { AgencyDashboardComponent } from './nuaxess/agency-dashboard/agency-dashboard.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    {path: '', pathMatch : 'full', redirectTo: 'sign-in'},

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'sign-in'},

    // Auth routes for guests
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'e/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'e', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'forced-off/:id', component: ForcedLogoutComponent },
            {path: 'forced-off', component: ForcedLogoutComponent },
            {path: 'sign-in', component: NewSigninComponent },
            {path: 'error', component: InvalidTokenComponent },
            {path: 'enroll', component: UserEnrollComponent, resolve: { data: EnrollResolver }, }
        ]
    },
    {
        path: '',
        canActivate: [AuthGuardOriginal],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)},
            {path: 'sadmin', component: AdminDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-logout', component: UserLogoutComponent },
            {path: 'reports', component: ReportsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'info', component: MemberInfoComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'family', component: MemberFamilyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'plans', component: MemberPlansComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'ihq', component: MemberIHQComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'medications', component: MemberMedicationsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'previous', component: MemberInsuranceComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'profile', component: MemberProfileComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'badmin', component: BadminComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'badmin', component: EadminComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'dashboard', component: DashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-user', component: AddUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-user/:id', component: AddUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-user/:id/:id2', component: AddUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-list', component: UserListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-list/:id', component: UserListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-dashboard/:id', component: UserDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-dashboard/:id/:id2', component: UserDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-client-plan', component: AddClientPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-client-plan/:id', component: AddClientPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-client-plan/:id/:id2', component: EditClientPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-quoted-plan', component: AddQuotedPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-quoted-plan/:id', component: AddQuotedPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-quoted-plan/:id/:id2', component: EditQuotedPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-org', component: AddOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-org/:id', component: AddOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-org/:id/:id2', component: AddOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'org-list', component: OrgListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'org-dashboard/:id', component: OrgDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-org/:id', component: EditOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-org/:id/:id2', component: EditOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-plan/:id', component: EditPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-company/:id', component: EditCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-member/:id', component: EditMemberComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-user/:id', component: EditUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-org/:id', component: EditQuoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'employee-lookup', component: EmployeeLookupComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-company', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-agency', component: AddAgencyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'agency-list', component: AgencyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'agency-dashboard/:id', component: AgencyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-company', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-company/:id', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-company/:id/:id2', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-list/:id', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-list', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-dashboard/:id', component: CompanyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-fix/:id', component: FixCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'census-history/:id/:id2', component: CensusHistoryComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'apa-company-dashboard/:id', component: ApaCompanyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'apa-company-dashboard/:id/:id2', component: ApaCompanyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'employee-dashboard/:id', component: EmployeeDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'employee-dashboard/:id/:id2', component: EmployeeDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-dashboard/:id/:id2', component: CompanyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-plan', component: AddPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-invoice', component: AddInvoiceComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-invoice/:id', component: AddInvoiceComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'apa-plan-list', component: ApaPlanListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'plan-list', component: PlanListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'plan-dashboard/:id', component: PlanDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'invoice-dashboard/:id', component: InvoiceDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-quote/:id', component: AddQuoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-invoice/:id', component: AddInvoiceComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-list/:id', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-list/:id/:id2', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-list', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-dashboard/:id', component: QuoteDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-dashboard/:id/:id2', component: QuoteDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-quote-request/:id', component: AddQuoteRequestComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-list', component: QuoteRequestListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-list/:id', component: QuoteRequestListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-list/:id/:id2', component: QuoteRequestListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-dashboard/:id', component: QuoteRequestDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-dashboard/:id/:id2', component: QuoteRequestDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'census-dashboard/:id/:id2', component: CensusDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-quote-request/:id', component: EditQuoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'employee-ihq/:id', component: EmployeeIHQComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'active-plan-dashboard/:id', component: ActivePlanDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'peo-company-list', component: PeoCompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },  
            {path: 'current-census', component: CurrentCensusComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-census/:id', component: CurrentCensusComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-terminations', component: CurrentTerminationsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-terminations/:id', component: CurrentTerminationsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-additions', component: CurrentAdditionsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-additions/:id', component: CurrentAdditionsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'active-plans', component: ActivePlansComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },          
            {path: 'member-lookup', component: MemberLookupComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'guardian-lookup', component: GuardianLookupComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'invoice-list', component: InvoiceListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-settings', component: UserSettingsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-profile', component: UserProfileComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'broker-home', component: BrokerHomeComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'nuaxess-home', component: NuaxessHomeComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-broker', component: AddBrokerComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, }, 
            {path: 'edit-broker/:id', component: EditBrokerComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, }, 
            {path: 'broker-dashboard/:id', component: BrokerDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, }, 
            {path: 'invoice-list/:id', component: InvoiceListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'invoice-list/:id/:id2', component: InvoiceListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-invoice/:id/:id2', component: CompanyInvoiceComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'duplicate-employees', component: DuplicateEmployeesComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'vendor-list', component: VendorListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-vendor', component: EditVendorComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-vendor/:id', component: EditVendorComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'vendor-dashboard/:id', component: VendorDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },  
            {path: 'commission-dashboard/:id', component: CommissionDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },  
            {path: 'commission-list', component: CommissionListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },     
            {path: 'broker-list', component: BrokerListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },     
            {path: 'add-employee/:id/:id2', component: AddEmployeeComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },     
            {path: 'enroll', component: UserEnrollComponent, resolve: { data: EnrollResolver }, }
        ]
    },
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
         component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            // Pages
            {path: 'pages', children: [
                {path: 'error', children: [
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.module').then(m => m.Error500Module)}
                ]},
            ]},

            // 
            {path: 'ui', children: [
                {path: 'forms', children: [
                    {path: 'fields', loadChildren: () => import('app/modules/admin/ui/forms/fields/fields.module').then(m => m.FormsFieldsModule)},
                ]},
            ]},
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
