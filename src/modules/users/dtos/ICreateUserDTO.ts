export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  phone: string;
  whatsapp?: string;
}
