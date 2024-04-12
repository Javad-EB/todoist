const Page405: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex max-w-xl flex-col items-center justify-center rounded-md bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-red-500">
          405 - Method Not Allowed
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The method used to access this resource is not allowed.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="h-32 w-32 animate-ping rounded-full bg-red-500"></div>
        </div>
        <button
          className="btn rounded-md bg-red-500 text-lg font-semibold text-white selection:mt-8 hover:bg-red-900 focus:bg-red-800 focus:outline-none"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Page405;
