export interface IPerson {
  firstName: String;
  lastName: String;
  socialSecurityNumber: Number;
  address: String;
  city: String;
  zipCode: Number;
}

export class Person implements IPerson {

  constructor(public firstName: String, public lastName: String,
        public socialSecurityNumber: Number,public address: String, public city: String, public zipCode: Number) {}

}

