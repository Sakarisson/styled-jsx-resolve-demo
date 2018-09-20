import css from 'styled-jsx/css'

const ChildComponent = ({className}) => <div className={className}>
  <p>This text should have a red background</p>
</div>

const { className, styles } = css.resolve`p { background-color: red }`

export default () => <div>
  <ChildComponent className={className} />
  {styles}
</div>
