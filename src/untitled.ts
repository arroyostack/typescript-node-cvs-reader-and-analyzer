class HoldAnything<TypeOfData>{
    data: TypeOfData;
}

const holding = new HoldAnything<number>();

holding.data = 1234;