export default function Footer() {
  return (
    <footer className="border-t bg-blue-200 py-10 px-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} LionCubs Fitness. All rights reserved.</p>
      <nav className="flex gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground">About</a>
        <a href="#programs" className="hover:text-foreground">Programs</a>
        <a href="#faq" className="hover:text-foreground">FAQs</a>
        <a href="#contact" className="hover:text-foreground">Contact</a>
      </nav>
      </div>
    </footer>
  );
}
