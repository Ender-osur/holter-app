import styles from "../home.module.css";

//Implementación del patrón de diseño Builder para crear botones
class ButtonBuilder {
  constructor(id, content, ...props) {
    this.id = id
    this.content = content
    this.props = props
  }

  buildButton() {
    return (
      <button className={styles.button} {...this.props}>{this.content}</button>
    )
  }
  build() {
    return (
      <>
        {this.buildButton()}
      </>
    )
  }
}

export default function button(props) {
  const buttonBuilder = new ButtonBuilder(props.id, props.content, props)
  return buttonBuilder.build()
}
