export interface Iuser {
    id:number
    name: string,
    emaiId:string,
    mobile:number
    education:string
        job: [
            {
            companyname: string,
            designation: string
            }
        ]
}