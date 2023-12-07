
export interface ViajeAPI {
    id_viaje : number;
    fecha : string;
    costo : number;
    hora_inicio : string;
    hora_termino : string; 
    calificacion : number;
    desde_long : number;
    desde_lat : number;
    hasta_long : number;
    hasta_lat : number;
    activo : number;
    id_chofer : number;
    pasajeros : number[];
    
}