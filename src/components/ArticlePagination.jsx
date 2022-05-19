export default function ArticlePagination({
  page,
  setPage,
  lastPage,
  setLastPage,
}) {
  const handlePrevious = () => {
    setPage((current) => {
      setLastPage(false);
      return --current;
    });
  };

  const handleNext = () => {
    setPage((current) => {
      return ++current;
    });
  };

  return (
    <div className='my-4 ml-0'>
      <button
        className={`${
          page === 1 ? 'text-grayLight' : 'text-white hover:bg-grayDark'
        } bg-gray border border-gray rounded mb-2 ml-2 px-2 
      }`}
        onClick={handlePrevious}
        disabled={page === 1}
      >
        Previous
      </button>
      <span> </span>
      <button
        className={`${
          lastPage ? 'text-grayLight' : 'text-white hover:bg-grayDark'
        } bg-gray border border-gray rounded mb-2 ml-2 px-2 
      }`}
        onClick={handleNext}
        disabled={lastPage}
      >
        Next
      </button>
    </div>
  );
}
