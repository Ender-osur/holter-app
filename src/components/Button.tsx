import React from 'react';
import styles from './styles/button.module.css';

// Propiedades del botón
interface ButtonProps {
  id: string;
  content: string;
  type?: 'main' | 'secundary'; // Tipo opcional con dos posibles valores
  disabled: boolean;
  customStyles?: string;
}

/**
 * Componente de botón reutilizable.
 *
 * @param {string} id - El ID único del botón.
 * @param {string} content - El texto que se mostrará en el botón.
 * @param {('main' | 'secundary')} [type='main'] - El tipo de botón (opcional).
 * @param {boolean} disabled - Indica si el botón está deshabilitado.
 * @param {string} customStyles - Permite hacer modificaciones a los estilos propios del botón 
 * @returns {JSX.Element} - El elemento de botón renderizado.
 */
const Button: React.FC<ButtonProps> = ({ id, content, type = 'main', disabled, customStyles }) => {
  // Asignar clase basada en el tipo de botón
  const buttonClass = type === 'main' ? styles.mainButton : styles.secundaryButton;
  
  return (
    <button id={id} className={`${buttonClass} ${customStyles}`} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
