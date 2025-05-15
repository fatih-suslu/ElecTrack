export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white font-semibold py-3">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Fatih Süslü</p>
        <p>
          İletişime geçmek için{" "}
          <a
            href="https://linkedin.com/in/fatih-suslu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold hover:text-blue-600 transition"
          >
            tıklayın!
          </a>
        </p>
      </div>
    </footer>
  );
}
