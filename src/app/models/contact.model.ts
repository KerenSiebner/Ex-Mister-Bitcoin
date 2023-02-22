export class Contact {

    public _id?: string = ''
    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '') {
    }

    setId?(id: string = 'r101') {
        // Implement your own set Id
        this._id = id
    }
}

// export interface Contact {
//     _id?: string
//     name: string
//     email: string
//     phone: string
// }