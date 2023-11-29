import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeItem from "./components/HomeItem";

function App() {
  return (
    <>
    <Header/>
        <main>
          <div className="items-container">
            <HomeItem />
          </div>
        </main>
        <Footer/>
    </>
  );
}

export default App;
