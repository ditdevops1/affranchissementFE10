import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';



export  function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                // url: 'http://localhost:8080/auth',
                // realm: 'Digital_post',
                // clientId: 'front-end',
                url:"http://10.14.14.232:8180/auth/",
                realm:"Digital-Poste",
                clientId:"FrontEnd_paiementDeMasse",
            } ,
            initOptions : {
                onLoad: 'login-required',//check-sso
                checkLoginIframe: false
            }

        }) 
    
}
