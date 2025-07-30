import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  // Suppression de la logique useRef et useEffect pour la couleur.
  // La couleur sera gérée par le CSS via l'attribut data-notification-type.

  return (
    <li data-notification-type={type}>
      {html ? (
        // Si la prop 'html' est fournie, utiliser dangerouslySetInnerHTML
        <span dangerouslySetInnerHTML={html} />
      ) : (
        // Sinon, afficher la prop 'value' comme texte simple
        value
      )}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
};

export default NotificationItem;