export class EmailTemplate {
  name: String;
  email: String;
  subject: String;
  text: String;


  constructor(name: String, email: String, subject: String, text: String) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.text = text;
  }
}
