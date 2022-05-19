const Loader = () => {
  let circleCommonClasses =
    'h-5 w-5 border border-grayDark bg-gray rounded-full ';

  return (
    <div className='flex'>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export default Loader;
