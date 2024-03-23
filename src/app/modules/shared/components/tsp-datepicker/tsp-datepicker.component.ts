import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IMonth } from '../../models/datepicker.models';

@Component({
  selector: 'tsp-datepicker',
  templateUrl: './tsp-datepicker.component.html',
  styleUrls: ['./tsp-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TspDatepickerComponent),
      multi: true
    }
  ]
})

export class TspDatepickerComponent implements OnInit, ControlValueAccessor {

  @Input() disabled: boolean = false;


  constructor() { }


  // yearsList: string[] = ['1300', '1301', '1302', '1303', '1304', '1305', '1306', '1307', '1308', '1309', '1310', '1311', '1312', '1313', '1314', '1315', '1316', '1317', '1318', '1319', '1320', '1321', '1322', '1323', '1324', '1325', '1326', '1327', '1328', '1329', '1330', '1331', '1332', '1333', '1334', '1335', '1336', '1337', '1338', '1339', '1340', '1341', '1342', '1343', '1344', '1345', '1346', '1347', '1348', '1349', '1350', '1351', '1352', '1353', '1354', '1355', '1356', '1357', '1358', '1359', '1360', '1361', '1362', '1363', '1364', '1365', '1366', '1367', '1368', '1369', '1370', '1371', '1372', '1373', '1374', '1375', '1376', '1377', '1378', '1379', '1380', '1381', '1382', '1383', '1384', '1385', '1386', '1387', '1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395', '1396', '1397', '1398', '1399', '1400', '1401', '1402'];
  // yearsList = Array.range(1280, 1402, 1);
  yearsList = Array.from(Array(123).keys()).map(x => x + 1280).reverse();
  
  monthsList: IMonth[] = [
    {
      monthName: 'فروردین',
      monthNumber: '01'
    },
    {
      monthName: 'اردیبهشت',
      monthNumber: '02'
    },
    {
      monthName: 'خرداد',
      monthNumber: '03'
    },
    {
      monthName: 'تیر',
      monthNumber: '04'
    },
    {
      monthName: 'مرداد',
      monthNumber: '05'
    },
    {
      monthName: 'شهریور',
      monthNumber: '06'
    },
    {
      monthName: 'مهر',
      monthNumber: '07'
    },
    {
      monthName: 'آبان',
      monthNumber: '08'
    },
    {
      monthName: 'آذر',
      monthNumber: '09'
    },
    {
      monthName: 'دی',
      monthNumber: '10'
    },
    {
      monthName: 'بهمن',
      monthNumber: '11'
    },
    {
      monthName: 'اسفند',
      monthNumber: '12'
    },

  ];
  daysList: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  defaultDaysList: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  daysList30: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  esfandDaysList: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'];
  year: string | undefined;
  month: number | undefined;
  day: string | undefined;
  value: any;



  ngOnInit() {

  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onChange: any = () => {};
  onTouched: any = () => {};


  onDayValueChange(event: any) {
    let value = `${this.year}-${this.month}-${this.day}`;
    // this.value = this.toTimeStamp(value);
    this.value = value;
    // this.value = value;
    // console.log(this.value);
    this.onChange(this.value);
  }

  onMonthValueChange(event: any) {
    let value = `${this.year}-${this.month}-${this.day}`;
    this.value = value;
    if( this.month === 12 ) {
      console.log(this.chekYear(Number(this.year)));
      if(this.chekYear(Number(this.year))) {
        this.daysList = this.daysList30;
      } else {
        this.daysList = this.esfandDaysList;
      }
    } else if( (this.month as number) <= 6 ) {
      this.daysList = this.defaultDaysList;
    } else if( (this.month as number) > 6){
      this.daysList = this.daysList30;
    }
    // this.onDayValueChange(this.day);
    this.onChange(this.value);
  }

  onYearValueChange(event: any) {
    let value = `${this.year}-${this.month}-${this.day}`;
    this.value = value;
    // this.onDayValueChange(this.day);
    this.onChange(this.value);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  chekYear(year: number) {
    return year / 4 === 3;
  }

  toTimeStamp(jalaliDate: any) {
    // let gregorianDate = moment.from(jalaliDate, 'fa', 'YYYY-MM-DD').format('YYYY-MM-DD');
    // console.log(gregorianDate);
    
    // let value = new Date(gregorianDate).getTime();
    // console.log(value);
    
    // return value;
  }




}
