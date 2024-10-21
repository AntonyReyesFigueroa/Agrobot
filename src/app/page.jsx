import Footer from "@/structures/footer/footer";
import Header from "@/structures/header/header";
import Main from "@/structures/main/main";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
