import React from 'react';
import { FieldProps } from '../interfaces/components';
// Definición de la interfaz para las propiedades del componente
/**
 * Props para el componente FormField.
 *
 * @interface FieldProps
 * @property {string} id - El ID único del campo.
 * @property {string} type - El tipo de input (por ejemplo, 'text', 'email').
 * @property {string} placeholder - El texto de placeholder para el input.
 * @property {any} register - Función de registro de react-hook-form.
 * @property {string} requiredMessage - Mensaje a mostrar si el campo es requerido y no está lleno.
 * @property {any} [errors] - Objeto que contiene los errores del formulario.
 * @property {string} [label] - Etiqueta opcional para el input.
 * @property {string} [styles] - Clases CSS opcionales para aplicar al input.
 * @property {boolean} [validate] - Bandera opcional para validar como email.
 */
// Componente funcional para el campo de formulario
/**
 * Componente de campo de formulario reutilizable.
 *
 * @param {FieldProps} props - Las propiedades del componente.
 * @returns {JSX.Element} - El elemento JSX renderizado.
 */
const FormField: React.FC<FieldProps> = ({
  id,
  type,
  placeholder,
  register,
  requiredMessage,
  errors = {},
  label,
  styles = '',
  validate = false,
}) => {
  // Determinar si hay errores y definir el mensaje de error
  const showError = Boolean(errors[id]);
  const errorMessage = showError ? errors[id].message : placeholder;

  return (
    <div className="form-field">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={errorMessage}
        className={`p-4 pl-8 rounded mb-0 text-[#000e] font-medium text-[17px] antialiased tracking-wide bg-white w-full ${styles}`}
        {...register(id, {
          required: {
            value: true,
            message: requiredMessage,
          },
          validate: validate ? (value: string) => value.includes('@') || 'Invalid email address' : undefined,
        })}
      />
      {showError && <div className="error-message">{errors[id].message}</div>}
      <div className="h-[3px] w-full bg-slate-200"></div>
    </div>
  );
};

export default FormField;
