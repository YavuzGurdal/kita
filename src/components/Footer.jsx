const Footer = () => {
    return (
        <div id="footer">
            <div className="footerWrapper">
                <p>Address: Zülpicher Str. 50 · 52349 Düren</p>
                <p>
                    E-mail:sekretariat@nelly-puetz-bk.nrw.schule
                </p>
                <p>Telefon: 02421 95410</p>
                <p>Fax: 02421 95410</p>
                <p>&copy; {new Date().getFullYear()} KITA TRAUMLAND. Alle Rechte
                    vorbehalten.</p>
            </div>
        </div>
    )
}

export default Footer