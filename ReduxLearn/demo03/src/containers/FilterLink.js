import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

//将 store 中的数据作为 props 绑定到组件上
const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})
//将 Dispatch 作为 props 绑定到组件上
const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setVisibilityFilter(ownProps.filter))
	}
})

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink