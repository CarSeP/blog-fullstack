function Logo() {

  return (
    <div className="flex items-center space-x-8">
      <a className="flex items-center space-x-3 group" href="#">
        <div className="w-8 h-8 rounded bg-parchment-900 flex items-center justify-center text-parchment-50 font-serif text-xl font-medium tracking-tight group-hover:bg-terracotta transition-colors shadow-sm">
          B
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-semibold tracking-tight text-parchment-900 leading-none">
            Blog
          </span>
          <span className="text-[9px] font-sans tracking-widest text-parchment-800/60 uppercase mt-0.5">
            Placeholder Text
          </span>
        </div>
      </a>
    </div>
  );
}

export default Logo;
