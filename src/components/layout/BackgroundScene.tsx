export function BackgroundScene() {
  return (
    <div className="bg-scene">
      {/* Capa 1 – grano/asfalto */}
      <div className="bg-grain" />

      {/* Capa 2 – gradiente de profundidad */}
      <div className="bg-depth" />

      {/* Capa 3 – bandas curvas SVG */}
      <svg
        className="bg-stripes"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.0" />
            <stop offset="15%" stopColor="#f97316" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#ea580c" stopOpacity="1.0" />
            <stop offset="85%" stopColor="#f97316" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#92400e" stopOpacity="0.0" />
            <stop offset="20%" stopColor="#92400e" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#b45309" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="gGray1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b7280" stopOpacity="0.0" />
            <stop offset="25%" stopColor="#9ca3af" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#6b7280" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6b7280" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="gGray2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b7280" stopOpacity="0.0" />
            <stop offset="30%" stopColor="#9ca3af" stopOpacity="0.28" />
            <stop offset="80%" stopColor="#6b7280" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6b7280" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gGray3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b7280" stopOpacity="0.0" />
            <stop offset="40%" stopColor="#9ca3af" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6b7280" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="gShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.0" />
            <stop offset="30%" stopColor="#fde68a" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Bandas grises más lejanas (muy sutiles) */}
        <path
          d="M -80 580  Q 500 200 1540 -30"
          stroke="url(#gGray3)"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M -80 630  Q 500 240 1540  20"
          stroke="url(#gGray3)"
          strokeWidth="11"
          fill="none"
        />

        {/* Bandas grises intermedias */}
        <path
          d="M -80 690  Q 500 300 1540  80"
          stroke="url(#gGray2)"
          strokeWidth="18"
          fill="none"
        />
        <path
          d="M -80 745  Q 500 350 1540 130"
          stroke="url(#gGray1)"
          strokeWidth="26"
          fill="none"
        />

        {/* Banda naranja oscura (amber) */}
        <path
          d="M -80 810  Q 500 420 1540 200"
          stroke="url(#gAmber)"
          strokeWidth="22"
          fill="none"
        />

        {/* Banda gris entre naranja oscura y brillante */}
        <path
          d="M -80 850  Q 500 460 1540 240"
          stroke="url(#gGray1)"
          strokeWidth="30"
          fill="none"
        />

        {/* Banda naranja brillante principal */}
        <path
          d="M -80 910  Q 500 530 1540 310"
          stroke="url(#gOrange)"
          strokeWidth="52"
          fill="none"
        />
        {/* Brillo interior */}
        <path
          d="M -80 905  Q 500 525 1540 305"
          stroke="url(#gShine)"
          strokeWidth="14"
          fill="none"
        />

        {/* Borde oscuro debajo */}
        <path
          d="M -80 940  Q 500 565 1540 345"
          stroke="rgba(10,10,15,0.6)"
          strokeWidth="10"
          fill="none"
        />

        {/* Banda gris ancha inferior */}
        <path
          d="M -80 970  Q 500 600 1540 385"
          stroke="url(#gGray1)"
          strokeWidth="40"
          fill="none"
        />
      </svg>

      {/* Capa 4 – destello esquina superior derecha */}
      {/* <div className="bg-flare" />
      <div className="bg-flare-rays">
        <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="rayGrad" cx="100%" cy="0%" r="100%">
              <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#fcd34d" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </radialGradient>
          </defs>
          <line
            x1="870"
            y1="10"
            x2="0"
            y2="600"
            stroke="url(#rayGrad)"
            strokeWidth="3"
            opacity="0.35"
          />
          <line
            x1="870"
            y1="10"
            x2="100"
            y2="590"
            stroke="url(#rayGrad)"
            strokeWidth="2"
            opacity="0.25"
          />
          <line
            x1="870"
            y1="10"
            x2="250"
            y2="580"
            stroke="url(#rayGrad)"
            strokeWidth="4"
            opacity="0.3"
          />
          <line
            x1="870"
            y1="10"
            x2="400"
            y2="550"
            stroke="url(#rayGrad)"
            strokeWidth="2"
            opacity="0.2"
          />
          <line
            x1="870"
            y1="10"
            x2="0"
            y2="350"
            stroke="url(#rayGrad)"
            strokeWidth="2"
            opacity="0.2"
          />
          <line
            x1="870"
            y1="10"
            x2="0"
            y2="180"
            stroke="url(#rayGrad)"
            strokeWidth="3"
            opacity="0.25"
          />
          <line
            x1="870"
            y1="10"
            x2="500"
            y2="500"
            stroke="url(#rayGrad)"
            strokeWidth="1.5"
            opacity="0.15"
          />
          <line
            x1="870"
            y1="10"
            x2="820"
            y2="200"
            stroke="rgba(255,240,160,0.4)"
            strokeWidth="1.5"
          />
          <line
            x1="870"
            y1="10"
            x2="750"
            y2="20"
            stroke="rgba(255,240,160,0.3)"
            strokeWidth="1.5"
          />
          <line
            x1="870"
            y1="10"
            x2="870"
            y2="120"
            stroke="rgba(255,240,160,0.35)"
            strokeWidth="1"
          />
        </svg>
      </div> */}

      {/* Capa 5 – viñeta */}
      <div className="bg-vignette" />
    </div>
  );
}
