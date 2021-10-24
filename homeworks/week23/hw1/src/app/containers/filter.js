import { setFilter, deleteAll } from '../action'
import { connect } from 'react-redux'
import Filter from '../component/Filter'
const mapStateToProps = (store) => {
  return {
    state: store.filter.state,
  }
}
export default connect(mapStateToProps, { setFilter, deleteAll })(Filter)
