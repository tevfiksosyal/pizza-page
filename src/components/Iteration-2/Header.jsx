import logo from "../../../public/assets/Iteration-1-assets/logo.svg";
function Header() {
  return (
    <div className="w-[100vw] flex justify-center bg-mainColor p-10">
      <img src={logo} alt="page-logo" />
    </div>
  );
}

export default Header;
