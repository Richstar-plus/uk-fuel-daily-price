import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  // const navigation = useNavigation();
  return (
    <div className="hero">
      <Header />

        <main>
          <Outlet />
        </main>
    </div>
  );
}

