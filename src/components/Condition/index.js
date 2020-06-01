const Condition = ({ condition, children, elseCondition = null }) =>
  condition ? children : elseCondition

export default Condition
