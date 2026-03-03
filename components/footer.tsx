export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex justify-center">
            <p>Copyright &copy; {currentYear} Lucas Wong Li Hong</p>
        </footer>
    )
}