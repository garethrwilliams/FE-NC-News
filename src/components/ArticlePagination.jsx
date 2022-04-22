export default function ArticlePagination({page, setPage, lastPage}) {
  const handlePrevious = () => {
    setPage((current) => {
      return --current;
    });
  };

  const handleNext = () => {
    setPage((current) => {
      return ++current;
    });
  };

  return (
    <>
      <button onClick={handlePrevious} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={lastPage}>
        Next
      </button>
    </>
  );
}
