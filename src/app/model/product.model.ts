export class Product {

  constructor(
    public id: number=0,
    public name: string='',
    public category: string='',
    public photo:string='',
    public description?: string,
    public color: Color[]=[],
    public sizes: Size[]=[],
    public price:number=0.0){}
}


export class Size{
  constructor(
    public name: string='',
    public isSelected:boolean=false,
    public isActive:boolean=true
  ){}
}

export class Color{
  constructor(
    public name:string='',
    public isSelected: boolean=false,
    public isActive: boolean=true
  ){}
}
