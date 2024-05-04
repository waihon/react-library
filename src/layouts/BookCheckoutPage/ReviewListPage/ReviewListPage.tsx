import { useEffect, useState } from "react";
import ReviewModel from "../../../models/ReviewModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";

export const ReviewListPage = () => {

  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);
  const [totalAmountOfReviews, setTotalAmountOfReviews] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const bookId = (window.location.pathname).split('/')[-1];  // last element

  useEffect(() => {
    const fetchBookReviews = async () => {
      const reviewsUrl: string = `http://localhost:8080/api/reviews/search/findByBookId?bookId=${bookId}&page=${currentPage - 1}&size=${reviewsPerPage}`;

      const responseReviews = await fetch(reviewsUrl);

      if (!responseReviews.ok) {
        throw new Error('Something wwent wrong!');
      }

      const responseJsonReviews = await responseReviews.json();

      const responseData = responseJsonReviews._embedded.reviews;

      setTotalAmountOfReviews(responseJsonReviews.page.totalElements);
      setTotalPages(responseJsonReviews.page.totalPages);
      console.log(responseJsonReviews.page);

      const loadedReviews: ReviewModel[] = [];

      for (const key in responseData) {
        loadedReviews.push({
          id: responseData[key].id,
          userEmail: responseData[key].userEmail,
          date: responseData[key].date,
          rating: responseData[key].rating,
          book_id: responseData[key].bookId,
          reviewDescription: responseData[key].reviewDescription
        });
      }

      setReviews(loadedReviews);
      setIsLoading(false);
    };

    fetchBookReviews().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    })
  }, [bookId, currentPage, reviewsPerPage]);

  if (isLoading) {
    return (
      <SpinnerLoading />
    );
  }

  if (httpError) {
    return (
      <div className='container m-5'>
        <p>{httpError}</p>
      </div>
    );
  }

  const indexOfLastReview: number = currentPage * reviewsPerPage;         // Ex: 3 * 5 = 15
  const indexOfFirstReview: number = indexOfLastReview - reviewsPerPage;  // Ex: 15 - 5 = 10

  let lastItem = (reviewsPerPage * currentPage <= totalAmountOfReviews) ? (reviewsPerPage * currentPage) : totalAmountOfReviews;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>

    </div>
  );

}