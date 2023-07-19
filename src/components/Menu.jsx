import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Smartphone", doc_count: 11 },
  { id: 2, name: "Electronics", doc_count: 8 },
  { id: 3, name: "Shoes", doc_count: 64 },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {

  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();

  const { loginWithRedirect, logout, isAuthenticate } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }



  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data?.map((item) => (
        <React.Fragment key={item.id}>
          {item?.subMenu ? (
            <li
              className="cursor-pointer flex items-center gap-2 relative"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item?.name}
              <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 shadow-lg">
                  {subMenuData?.map((i) => (
                    <Link key={i.id} to={`/category/${i.id}`}>
                      <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                        {i.name}
                        <span className="opacity-50 text-sm">
                          {i.doc_count}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">
              <Link to={item?.url}>{item?.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}

      {isAuthenticate ? (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>

      )}



      {/* <div>
       
      </div> */}
      {isAuthenticated && (
        <div>
          {/* <img src={user.picture} alt={user.name} /> */}
          {/* <h2>{user.name}</h2> */}
          <p>{user.email}</p>
        </div>
      )}
    </ul>



  );
};

export default Menu;
