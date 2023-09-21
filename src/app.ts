import { dataCsv } from './utils/csv-data';

export class ImportCsv {
    constructor() {
        this.process();
    }

    private async process () {
        await this.loadData();
    }

    public async loadData () {
        console.log('Iniciando carregamento do csv');
        for (const item of dataCsv) { 
            console.log(item, 'item')
        }
        console.log('Processo finalizado com sucesso!!');
    }
}

const execute = new ImportCsv();