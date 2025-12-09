import Image from "next/image";
// import banner from "./assets/images/einstine.jpg";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        src="/assets/images/final.png"
        alt="banner"
        width={500}
        height={500}
      ></Image>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "20px 0",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {[
          { name: "useReducer", link: "/useReducer" },
          { name: "useContext", link: "/useContext" },
          { name: "useCallback", link: "/useCallback" },
          { name: "useMemo", link: "/useMemo" },
          { name: "useRef", link: "/useRef" },
          { name: "useImperativeHandle", link: "/useImperativeHandle" },
        ].map((item) => (
          <li
            key={item.name}
            style={{
              background: "#f8f9fa",
              padding: "12px 16px",
              borderRadius: "10px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <a
              href={item.link}
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "#0070f3",
              }}
            >
              {item.name} Hook → {item.link}
            </a>
          </li>
        ))}
      </ul> 
    </div>
  );
}
