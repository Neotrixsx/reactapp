import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

export class MomentDateFormatter extends NgbDateParserFormatter {

  readonly DT_FORMAT = 'MM/DD/YYYY';
  res;
  parse(value: string): NgbDateStruct {
    if (value) {
      value = value.trim();
      const mdt = moment(value, this.DT_FORMAT);
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    if (!date) { return ''; }
    const mdt = moment([date.year, date.month - 1, date.day]);
    if (!mdt.isValid()) { return ''; }
    return mdt.format(this.DT_FORMAT);
  }


  reformat(value) {
    // tslint:disable-next-line: radix
    return this.res = { year: parseInt(value.slice(6, 10)), month: parseInt(value.slice(0, 2)), day: parseInt(value.slice(3, 5)) }
  }
}
