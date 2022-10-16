import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent implements OnInit {
  gross:string = '';
  netPay:number= 0;
  nssf:string = "1080";
  taxable:number=0;
  personalRelief:string = "2400";
  taxBeforeRelief:number=0;
  insurance:String = "210";
  nhif:String = "1400";
  paye:number=0;
 
calculate()
{
  this.taxable = parseInt(this.gross) - parseInt(this.nssf);
  this.taxBeforeRelief = this.taxamount()
  this.paye = this.payeCalculation();
  this.netPay = this.netPayCalculation()
}
taxamount():number{
    if(this.taxable > 24000){
      let newTaxable = (this.taxable-24000);
      if(newTaxable > 8333){
      newTaxable = newTaxable-8333;
      this.taxBeforeRelief =2400 + 2083.25+(newTaxable * 30/100);
      } else {
        this.taxBeforeRelief = 2400 + (newTaxable*25/100);
        // console.log('tax=>',this.taxBeforeRelief)
      }
     return this.taxBeforeRelief; 
   
    }else{
    this.taxBeforeRelief = 0;
    return this.taxBeforeRelief;
}   

}
payeCalculation():number{
  if(this.taxBeforeRelief > 2610){
    return this.paye = (this.taxBeforeRelief - ( parseInt(this.personalRelief) ));
}else {
    return this.paye = 0;
} 
}
netPayCalculation():number{
  return this.netPay = this.taxable -(parseInt(this.nssf)  + (this.taxBeforeRelief) + 210);
 
}

  constructor() { }

 
  
  ngOnInit(): void {
  }

}

