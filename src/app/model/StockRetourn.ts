export interface StockRetourn {
    id:number;
    date: Date;
    datevalide: Date;
    motif: string;
    dg_caisserecep: {
        "id": number

    } ;
    dg_caisseretour: {
        "id": number

    } ;

    gs_statutStock: {
        "id": 1

    } ;

    dg_user: {
        "id": number

    }

}
