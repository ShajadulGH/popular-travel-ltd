const Table = (props) => {
  return (
    <div class="flex items-center justify-center">
      <div class="container">
        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead class="text-white">
            <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="p-3 text-left">FLIGHT</th>
              <th class="p-3 text-left">AIRCRAFT</th>
              <th class="p-3 text-left">CLASS</th>
              <th class="p-3 text-left">FARE</th>
              <th class="p-3 text-left">ROUTE</th>
              <th class="p-3 text-left">DEPARTURE</th>
              <th class="p-3 text-left">ARRIVAL</th>
              <th class="p-3 text-left">DURATION</th>
              <th class="p-3 text-left">PRICE</th>
            </tr>
          </thead>
          <tbody class="flex-1 sm:flex-none">
            {/* Mapping through flightoffer*/}
            {props.data.flightOffer &&
              props.data.flightOffer.map((item) => (
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  {/* Getting Flight */}
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {item.itineraries.map((forArrival) =>
                      forArrival.segments.map((seg) => (
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                          <td class="border-grey-light border hover:bg-gray-100 p-3">{`${seg.carrierCode} ${seg.aircraft}`}</td>
                        </tr>
                      ))
                    )}
                  </td>
                  {/* Getting Aircraft */}
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {item.itineraries.map((forArrival) =>
                      forArrival.segments.map((seg) => (
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                          <td class="border-grey-light border hover:bg-gray-100 p-3">
                            {seg.flightNumber}
                          </td>
                        </tr>
                      ))
                    )}
                  </td>
                  {/* Getting Class*/}
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {item.class.map((data) =>
                      data.map((index) => (
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                          <td class="border-grey-light border hover:bg-gray-100 p-3">
                            {index}
                          </td>
                        </tr>
                      ))
                    )}
                  </td>
                  {/* Getting Fare*/}
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {item.fareBasis.map((forFare) =>
                      forFare.map((fare) => (
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                          <td class="border-grey-light border hover:bg-gray-100 p-3">
                            {fare}
                          </td>
                        </tr>
                      ))
                    )}
                  </td>
                  {/* Getting Route */}
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {item.itineraries.map((forArrival) =>
                      forArrival.segments.map((seg) => (
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                          <td class="border-grey-light border hover:bg-gray-100 p-3">{`${seg.departure.iataCode}-${seg.arrival.iataCode}`}</td>
                        </tr>
                      ))
                    )}
                  </td>
                  {/* Getting Depurture*/}
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {item.itineraries.map((forDepurture) =>
                      forDepurture.segments.map((seg) => (
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                          <td class="border-grey-light border hover:bg-gray-100 p-3">
                            {seg.departure.at}
                          </td>
                        </tr>
                      ))
                    )}
                  </td>
                  {/* Getting Arrival */}
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {item.itineraries.map((forArrival) =>
                      forArrival.segments.map((seg) => (
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                          <td class="border-grey-light border hover:bg-gray-100 p-3">
                            {seg.arrival.at}
                          </td>
                        </tr>
                      ))
                    )}
                  </td>

                  {/* Getting Duration*/}
                  {item.itineraries.map((forDuration) => (
                    <td class="border-grey-light border hover:bg-gray-100 p-3">
                      {" "}
                      {forDuration.duration}{" "}
                    </td>
                  ))}

                  {/* Getting Price */}
                  <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td class="border-grey-light border hover:bg-gray-100 p-3">
                      {item.price}
                    </td>
                  </tr>
                  {/* Select Button */}
                  <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td class="border-grey-light border hover:bg-gray-100 p-3">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Select
                      </button>
                    </td>
                  </tr>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
