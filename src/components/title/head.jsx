// import PropTypes from 'prop-types';
import css from 'components/title/head.module.css'

const Head = ({ pageTitle }) => {
    return (
        <h1 className={css.title}>{pageTitle}</h1>
    )
}

export default Head;

// Title.PropTypes = {
//     pageTitle: PropTypes.string
// }