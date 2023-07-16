import css from 'components/title/section.module.css'

const Section = ({ fbTitle, children }) => {
    return (
        <>
            <h2 className={css.title}>{fbTitle}</h2>
            {children}
        </>)
}

export default Section;