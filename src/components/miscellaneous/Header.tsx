import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-lime-600 w-full h-[10vh] justify-between px-5 py-3">
      <div className="text-center text-2xl text-white">VideoTube</div>
      <div className="w-[400px]">
        <Input placeholder="Search" />
      </div>
      <div className="flex justify-end items-center gap-4">
        <Link to="/login">
          <Button className="text-white">Login</Button>
        </Link>
        <Link to="/signup">
          <Button className="text-white">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
