const ServiceCard = ({ service }) => {
  const {
    image,
    serviceName,
    serviceArea,
    price,
    serviceProviderName,
    _id,
    Description,
  } = service;
  return (
    <div className="mt-10">
      <div className="max-w-full  bg-secondary bg-opacity-10 border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full overflow-hidden"
            src={image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
              {serviceName}
            </h5>
          </a>
          <h2>{price}</h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {serviceArea}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
