//Implementación del patrón de diseño Builder para crear formularios en el
class FieldBuilder {
  constructor(id, type, placeholder, register, requiredMessage, errors, label, styles) {
    this.id = id
    this.type = type
    this.placeholder = placeholder
    this.register = register
    this.requiredMessage = requiredMessage
    this.errors = errors
    this.label = label
    this.styles = styles,
    this.errorMessage = '',
    this.showError = false,
    this.timer = null
  }

  buildLabel() {
    return (
      <label
        className=""
        htmlFor={this.id}
      >
        {this.label}
      </label>
    )
  }

  buildInput() {
    if (this.errors[this.id]) {
      this.errorMessage = this.errors[this.id].message;
      this.showError = true;

      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.showError = false;
      }, 2000);
    }

    return (
      <>
        <input 
          id={this.id}
          type={this.type}
          placeholder={this.showError ? this.errorMessage : this.placeholder}
          className={`p-4 rounded block mb-0 text-[#5e5e] font-medium text-[17px] antialiased tracking-wide bg-white w-[450px] ${this.styles}`}
          {...this.register(this.id, {
            required: {
              value: true,
              message: this.requiredMessage,
            }
          })} 
        />
        <div className="h-[3px] w-[420px] bg-slate-200">

        </div>
      </>
    )
  }


  build() {
    return (
      <>
        {this.buildLabel()}
        {this.buildInput()}
      </>
    )
  }
}

export default function formField(props) {
  const fieldBuilder = new FieldBuilder(props.id, props.type, props.placeholder, props.register, props.requiredMessage, props.errors, props.label, props.styles)
  return fieldBuilder.build()
}

