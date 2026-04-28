function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 ">
        
        <h3 className="text-lg font-semibold mx-auto">
          © {new Date().getFullYear()}  ~/Naimlab
        </h3>
        </div>
    </footer>
  );
}

export default Footer;