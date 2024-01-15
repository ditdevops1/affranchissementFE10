import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { KeycloakService } from 'keycloak-angular';
import { ActivatedRoute } from '@angular/router';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
    role?:string ;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
},/*{
        path: '/components',
        title: 'Components',
        type: 'sub',
        icontype: 'apps',
        collapse: 'components',
        children: [
            {path: 'buttons', title: 'Buttons', ab:'B'},
            {path: 'grid', title: 'Grid System', ab:'GS'},
            {path: 'panels', title: 'Panels', ab:'P'},
            {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
            {path: 'notifications', title: 'Notifications', ab:'N'},
            {path: 'icons', title: 'Icons', ab:'I'},
            {path: 'typography', title: 'Typography', ab:'T'}
        ]
    },{
        path: '/forms',
        title: 'Forms',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'forms',
        children: [
            {path: 'regular', title: 'Regular Forms', ab:'RF'},
            {path: 'extended', title: 'Extended Forms', ab:'EF'},
            {path: 'validation', title: 'Validation Forms', ab:'VF'},
            {path: 'wizard', title: 'Wizard', ab:'W'}
        ]
    },*/ {
    path: '/tables',
    title: 'Produits',
    type: 'sub',
    icontype: 'redeem',
    collapse: 'tables',
    children: [
        // {path: 'regular', title: 'Regular Tables', ab:'RT'},
        // {path: 'extended', title: 'Extended Tables', ab:'ET'},
        { path: 'datatables.net', title: 'Datatables.net', ab: 'DT',role:''}
    ]
},

{
    path: '/commande',
    title: 'Commande',
    type: 'sub',
    icontype: 'add_business',
    collapse: 'commande',
   // hidden:  this.gestionUtil(["ROLE_SUPERADMIN","ROLE_RECEVEUR","ROLE_GUICHET","ROLE_ARRIERE","ROLE_RESPONSABLE_ANNEXE","ROLE_GRANDE_CAISSE","ROLE_DCP"]),
    children: [
        { path: 'passer-commande', title: 'Passer Commande', ab: 'PC',role:'ROLE_RECEVEUR' },
        { path: 'diligenter-commande', title: 'Diligenter Commande', ab: 'DC',role:'ROLE_CAVEAU'},
        { path: 'approuver-commande', title: 'Approuver Commande', ab: 'AC',role:'ROLE_RECEVEUR'},
        { path: 'retour-stock', title: 'Retour Stock', ab: 'RS',role:'ROLE_RECEVEUR'},
        { path: 'approuver-retour', title: 'Approuver Retour', ab: 'AR',role:'ROLE_RECEVEUR'}



    ]
},


    {
        path: '/stock',
        title: 'Stock',
        type: 'sub',
        icontype: 'add_business',
        collapse: 'stock',
        // hidden:  this.gestionUtil(["ROLE_SUPERADMIN","ROLE_RECEVEUR","ROLE_GUICHET","ROLE_ARRIERE","ROLE_RESPONSABLE_ANNEXE","ROLE_GRANDE_CAISSE","ROLE_DCP"]),
        children: [
            { path: 'stock-receveur', title: 'Stock Receveur', ab: 'SR',role:'ROLE_RECEVEUR' },
            { path: 'stock-autrecaisse', title: 'Stock Autre Caisse', ab: 'SAC',role:'ROLE_RECEVEUR' }




        ]
    }

    /*,{
        path: '/maps',
        title: 'Maps',
        type: 'sub',
        icontype: 'place',
        collapse: 'maps',
        children: [
            {path: 'google', title: 'Google Maps', ab:'GM'},
            {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
            {path: 'vector', title: 'Vector Map', ab:'VM'}
        ]
    },{
        path: '/widgets',
        title: 'Widgets',
        type: 'link',
        icontype: 'widgets'

    },{
        path: '/charts',
        title: 'Charts',
        type: 'link',
        icontype: 'timeline'

    },{
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'date_range'
    },{
        path: '/pages',
        title: 'Pages',
        type: 'sub',
        icontype: 'image',
        collapse: 'pages',
        children: [
            {path: 'pricing', title: 'Pricing', ab:'P'},
            {path: 'timeline', title: 'Timeline Page', ab:'TP'},
            {path: 'login', title: 'Login Page', ab:'LP'},
            {path: 'register', title: 'Register Page', ab:'RP'},
            {path: 'lock', title: 'Lock Screen Page', ab:'LSP'},
            {path: 'user', title: 'User Page', ab:'UP'}
        ]
    }*/
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    listrole;
    hasAccess ;

    public menuItems: any[];
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    tok;

    public constructor(public keycloak: KeycloakService , public route : ActivatedRoute) {
     

       

      console.log("Sawda",  this.isCaveau())
        console.log("routeinfo: "+ROUTES[2].children[0].path)


    }

    gestionUtil(rolearray: Array<String>) {
        console.log(this.listrole)
        let menut = true
        const length = rolearray.length - 1
        console.log(length)
        if (typeof this.listrole === "object") {
            let taille = this.listrole.length - 1
            for (let i = 0; i <= length; i++) {
                for (let j = 0; j <= taille; j++) {
                    console.log(rolearray[i])
                    //if(testlist.find(role=>role===rolearray[i])!=undefined){
                    if (this.listrole[j] === rolearray[i]) {
                        menut = false
                        console.log('found ya')
                    }

                }
            }
        }
        else if (typeof this.listrole != "object") {
            for (let i = 0; i <= length; i++) {
                if (this.listrole === rolearray[i]) {
                    menut = false
                    console.log('found ya')
                }
            }
        }
        return menut

    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    } 



    isCaveau(){
        this.hasAccess =  false 
     if(this.keycloak.getUserRoles().includes("ROLE_CAVEAU")){
         this.hasAccess = true
     }

     return this.hasAccess
        

           }

    isReceveur(){
        this.hasAccess =  false
        if(this.keycloak.getUserRoles().includes("ROLE_RECEVEUR")){
            this.hasAccess = true
        }

        return this.hasAccess


    }
}
