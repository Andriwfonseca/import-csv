import { dataCsv } from './utils/csv-data';
class ImportCsv {
    constructor() {
        this.loadData();
    }

    public loadData () {
        console.log('Iniciando carregamento do csv');
        for (const item of dataCsv) { 
            console.log(item, 'item')
        }
        console.log('Processo finalizado com sucesso!!');
    }
}

const execute = new ImportCsv();