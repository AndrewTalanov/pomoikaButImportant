const ContactsPage = ({ data }) => {

    return (
        <>
            <h1>Контакты</h1>
            <nav>
                {data}
            </nav>
        </>
    )
}

export default ContactsPage;