export class IssueModel {
    constructor(
        public id:string,
        public descripcion:string,
        public severidad:string,
        public responsable:string,
        public status:string = 'Abierta'
    ){

    }
}