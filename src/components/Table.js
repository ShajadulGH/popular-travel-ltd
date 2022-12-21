const Table = (props) => {
  return (
    <div class="overflow-scroll">
      <table class="w-full overflow-scroll">
        <thead class="text-white">
          <tr class="bg-teal-400 ">
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
        <tbody class="">
          {/* Mapping through flightoffer*/}
          {props.data.flightOffer &&
            props.data.flightOffer.map((item) => (
              <tr class="">
                {/* Getting Flight */}
                <td class="border-grey-light border bg-gray-100 p-3">
                  {item.itineraries.map((forArrival) =>
                    forArrival.segments.map((seg) => (
                      <tr class="">
                        <td class="border-grey-light border bg-gray-100 p-3">{`${seg.carrierCode} ${seg.aircraft}`}</td>
                      </tr>
                    ))
                  )}
                </td>
                {/* Getting Aircraft */}
                <td class="border-grey-light border bg-gray-100 p-3">
                  {item.itineraries.map((forArrival) =>
                    forArrival.segments.map((seg) => (
                      <tr class="">
                        <td class="border-grey-light border bg-gray-100 p-3">
                          {seg.flightNumber}
                        </td>
                      </tr>
                    ))
                  )}
                </td>
                {/* Getting Class*/}
                <td class="border-grey-light border bg-gray-100 p-3">
                  {item.class.map((data) =>
                    data.map((index) => (
                      <tr class="">
                        <td class="border-grey-light border bg-gray-100 p-3">
                          {index}
                        </td>
                      </tr>
                    ))
                  )}
                </td>
                {/* Getting Fare*/}
                <td class="border-grey-light border bg-gray-100 p-3">
                  {item.fareBasis.map((forFare) =>
                    forFare.map((fare) => (
                      <tr class="">
                        <td class="border-grey-light border bg-gray-100 p-3">
                          {fare}
                        </td>
                      </tr>
                    ))
                  )}
                </td>
                {/* Getting Route */}
                <td class="border-grey-light border bg-gray-100 p-3">
                  {item.itineraries.map((forArrival) =>
                    forArrival.segments.map((seg) => (
                      <tr class="">
                        <td class="border-grey-light border bg-gray-100 p-3">{`${seg.departure.iataCode}-${seg.arrival.iataCode}`}</td>
                      </tr>
                    ))
                  )}
                </td>
                {/* Getting Depurture*/}
                <td class="border-grey-light border bg-gray-100 p-3">
                  {item.itineraries.map((forDepurture) =>
                    forDepurture.segments.map((seg) => (
                      <tr class="">
                        <td class="border-grey-light border bg-gray-100 p-3">
                          {seg.departure.at}
                        </td>
                      </tr>
                    ))
                  )}
                </td>
                {/* Getting Arrival */}
                <td class="border-grey-light border bg-gray-100 p-3">
                  {item.itineraries.map((forArrival) =>
                    forArrival.segments.map((seg) => (
                      <tr class="">
                        <td class="border-grey-light border bg-gray-100 p-3">
                          {seg.arrival.at}
                        </td>
                      </tr>
                    ))
                  )}
                </td>

                {/* Getting Duration*/}
                {item.itineraries.map((forDuration) => (
                  <td class="border-grey-light border bg-gray-100 p-3">
                    {" "}
                    {forDuration.duration}{" "}
                  </td>
                ))}

                {/* Getting Price */}
                <tr class="">
                  <td class="border-grey-light border bg-gray-100 p-3">
                    {item.price}
                  </td>
                </tr>
                {/* Select Button */}
                <tr class="">
                  <td class="border-grey-light border bg-gray-100 p-3">
                    <button class=" bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                      Select
                    </button>
                  </td>
                </tr>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
