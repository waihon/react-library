import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import ShelfCurrentLoans from "../../../models/ShelfCurrentLoans";

export const Loans = () => {

  const { authState } = useOktaAuth();
  const [httpError, setHttpError] = useState(null);

  // Current Loans
  const [shelfCurrentLoans, setShelfCurrentLoans] = useState<ShelfCurrentLoans[]>([]);
  const [isLoadingUserLoans, setIsLoadingUserLoans] = useState(true);

  useEffect(() => {
    const fetchUserCurrentLoans = async () => {

    };
    fetchUserCurrentLoans().catch((error: any) => {
      setIsLoadingUserLoans(false);
      setHttpError(error.message);
    });
    window.scrollTo(0, 0);
  }, [authState]);

  return (<></>);
}
