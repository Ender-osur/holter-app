export default function validateField(data: any) {
  let token = { passwordError: null || "", emailError: null || "", hasError: false }

  if (data.password !== data.passwordCheck) {
    token.passwordError = 'Las contraseñas no coinciden';
    token.hasError = true;
  }
  if (data.emailCheck !== data.email) {
    token.emailError = 'Los correos electrónicos no coinciden';
    token.hasError = true;
  }
  return token.hasError ? token : false;
}
