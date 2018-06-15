export class Company {
  public name: string;
  public address: string;
  public city: string;
  public country: string;
  public email: string;
  public phoneNumber: string;

  constructor(name: string, address: string, city: string, country: string, email: string, phoneNumber: string) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.country = country;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
