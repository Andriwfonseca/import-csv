import express from 'express';
import { dataCsv } from './utils/csv-data';

export class ImportCsv {
    public app: express.Application;

    constructor() {
        this.app = express();
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

async function sleep (msec: any) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

const execute = new ImportCsv();