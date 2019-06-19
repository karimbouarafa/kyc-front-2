export class Certificat {

    constructor(public cert: string, public client: string, public status: number, 
        public maintien: number, public initiator: string, public profil: string,
        public documents : string[], public description: string,
         public dateCreation: string, public dateProchaineCert: string,
           public other1: string, public other2: string, public docKYC: string) {
    }
  }