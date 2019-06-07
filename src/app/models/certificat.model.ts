export class Certificat {

    constructor(public Cert: string, public client: string, public statut: number, 
        public maintien: number, public initiator: string, public profil: string,
        public documents : string[], public description: string,
         public dateCréation: string, public dateProchaineCertification: string,
           public party1: string, public party2: string,) {
    }
  }