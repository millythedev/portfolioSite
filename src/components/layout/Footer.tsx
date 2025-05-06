import { NAV_ITEMS } from "../../lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-sourceCode text-xl">
              <span className="text-primary">&lt;</span>
              <span className="mx-1">Emilio Joe Cleveland</span>
              <span className="text-primary">/&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Entry Level Programmer/Developer
            </p>
          </div>

          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-muted-foreground">
            <p>&copy; {year} Emilio Joe Cleveland. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
