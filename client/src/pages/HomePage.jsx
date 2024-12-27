import Header from "../components/Shared/Header";
import InfiniteScroll from "../components/Feed/InfiniteScroll";
import FloatingActionButton from "../components/Shared/FloatingActionButton";

const HomePage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <InfiniteScroll />
      <FloatingActionButton />
    </div>
  );
};

export default HomePage;
