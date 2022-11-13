import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const confirmation = swal({
    title: "Your payment was a success",
    text: "Click on 'OK' to get back to the homepage",
    icon: "success",
  } as any).then(() => {
    window.location.href = "/";
  });

  const toHomePage = () => {
    navigate("/");
  };

  return <>{confirmation}</>;
};

export default Confirmation;
