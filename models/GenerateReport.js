import BaseModel from '@/models/BaseModel';

class GenerateReport extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.id = data.id;
    }

    get payload() {
        return {
            keterangan: this.desc
        }
    }
}
export default GenerateReport;