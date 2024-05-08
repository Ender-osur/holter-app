//Implementación del patrón de diseño Builder para crear formularios en el aplicativo
class FieldBuilder {
  constructor(id, type, placeholder, register, requiredMessage, errors) {
    this.id = id
    this.type = type
    this.placeholder = placeholder
    this.register = register
    this.requiredMessage = requiredMessage
    this.errors = errors
  }

  buildLabel() {
    return (
      <label
        className="text-xl p-3 rounded block mb-2 bg-transparent text-slate-100 w-full"
        htmlFor={this.id}
      >
        {this.placeholder}
      </label>
    )
  }

  buildInput() {
    return (
      <input 
        id={this.id}
        type={this.type}
        placeholder={this.placeholder}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        {...this.register(this.id, {
          required: {
            value: true,
            message: this.requiredMessage,
          }
        })} 
      />
    )
  }

  buildError() {
    return this.errors[this.id] && (<span className="text-red-500" >{this.errors[this.id].message} </span>)
  }

  build() {
    return (
      <>
        {this.buildLabel()}
        {this.buildInput()}
        {this.buildError()}
      </>
    )
  }
}

export default function formField(props) {
  const fieldBuilder = new FieldBuilder(props.id, props.type, props.placeholder, props.register, props.requiredMessage, props.errors)
  return fieldBuilder.build()
}

