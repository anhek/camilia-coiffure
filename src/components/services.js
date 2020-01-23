import React from 'react';
import Service from './service';
import { FiCoffee, FiList, FiMessageCircle } from "react-icons/fi"

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto my-10 text-center max-w-7xl -px-10">
      <Service 
        title="Tarifs des prestations pour l’année 2020"
        text="Pour connaître le prix de nos différentes prestations (coupe, coloration, mèches, balayages, etc…)"
        button="Télécharger le devis"
        link="http://duckduckgo.fr"
        icon={FiList}
      />
      <Service 
        title="Le salon, un espace accueillant et cozy"
        text="Marine, coiffeuse styliste/visagiste est à votre écoute pour vous conseiller et vous guider dans vos envies"
        button="Découvrir le salon"
        link="http://duckduckgo.fr"
        icon={FiCoffee}
      />
      <Service 
        title="Contact, demande d’infos et partenariats"
        text="Besoin d’un renseignement ou souhaitez entrer en contact pour une demande professionnelle ?"
        button="Nous écrire"
        link="http://duckduckgo.fr"
        icon={FiMessageCircle}
      />            
    </div>
  );
}
 
export default Services;