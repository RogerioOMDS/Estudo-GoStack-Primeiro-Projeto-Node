import { uuid } from 'uuidv4'

class Appointment {
    id: string;

    provider: string;

    date: Date;

    constructor({provider , date}: Omit<Appointment, 'id'>) {/* assim não preciso definir a interface e posso omitir a id */
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;