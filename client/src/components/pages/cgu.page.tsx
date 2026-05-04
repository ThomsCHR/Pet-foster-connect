import { Link } from "react-router-dom";
import "../../assets/styles/cgu.css";

function CguPage() {
  return (
    <div className="cgu-page">
      <div className="cgu-inner">

        <Link to="/" className="cgu-retour">← Retour à l'accueil</Link>

        <h1 className="cgu-titre">Conditions Générales d'Utilisation</h1>
        <p className="cgu-date">Dernière mise à jour : mai 2025</p>

        <section className="cgu-section">
          <h2>1. Présentation du service</h2>
          <p>
            PetFosterConnect est une plateforme de mise en relation entre des associations de protection animale
            et des bénévoles souhaitant accueillir temporairement des animaux en famille d'accueil.
            Le service est accessible à l'adresse <strong>petfosterconnect.fr</strong>.
          </p>
        </section>

        <section className="cgu-section">
          <h2>2. Acceptation des conditions</h2>
          <p>
            L'utilisation de la plateforme implique l'acceptation pleine et entière des présentes conditions
            générales d'utilisation. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le service.
          </p>
        </section>

        <section className="cgu-section">
          <h2>3. Inscription et comptes</h2>
          <p>
            L'accès à certaines fonctionnalités nécessite la création d'un compte. Vous vous engagez à fournir
            des informations exactes et à maintenir la confidentialité de vos identifiants.
            Deux types de comptes sont disponibles :
          </p>
          <ul>
            <li><strong>Bénévole</strong> : particulier souhaitant accueillir un animal temporairement.</li>
            <li><strong>Association</strong> : structure légalement reconnue disposant d'un numéro SIRET valide.</li>
          </ul>
        </section>

        <section className="cgu-section">
          <h2>4. Responsabilités</h2>
          <p>
            PetFosterConnect agit en tant qu'intermédiaire et n'est pas responsable des engagements pris entre
            associations et bénévoles. Chaque partie est responsable du respect de ses obligations légales
            concernant la garde et le bien-être des animaux.
          </p>
        </section>

        <section className="cgu-section">
          <h2>5. Données personnelles</h2>
          <p>
            Les données collectées (nom, email, téléphone, adresse) sont utilisées uniquement pour le
            fonctionnement du service de mise en relation. Elles ne sont pas transmises à des tiers à des fins
            commerciales. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données en nous contactant par email.
          </p>
        </section>

        <section className="cgu-section">
          <h2>6. Comportement des utilisateurs</h2>
          <p>
            Les utilisateurs s'engagent à ne pas publier de contenu faux, trompeur ou contraire à la législation
            en vigueur. PetFosterConnect se réserve le droit de supprimer tout compte ne respectant pas ces règles.
          </p>
        </section>

        <section className="cgu-section">
          <h2>7. Modification des CGU</h2>
          <p>
            PetFosterConnect se réserve le droit de modifier les présentes conditions à tout moment.
            Les utilisateurs seront informés des changements significatifs. La poursuite de l'utilisation
            du service après modification vaut acceptation des nouvelles conditions.
          </p>
        </section>

        <section className="cgu-section">
          <h2>8. Contact</h2>
          <p>
            Pour toute question relative aux présentes conditions, vous pouvez nous contacter à l'adresse :
            <strong> contact@petfosterconnect.fr</strong>
          </p>
        </section>

      </div>
    </div>
  );
}

export default CguPage;
