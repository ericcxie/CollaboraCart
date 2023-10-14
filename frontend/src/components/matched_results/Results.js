import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function MatchedResults() {
  const series = [
    {
      name: "Developer Edition",
      data: [1500, 1418, 1456, 1526, 1356, 1256],
    },
    {
      name: "Designer Edition",
      data: [643, 413, 765, 412, 1423, 1731],
    },
  ];

  const options = {
    chart: {
      fontFamily: "Inter, sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "01 Oct.",
        "02 Oct.",
        "03 Oct.",
        "04 Oct.",
        "05 Oct.",
        "06 Oct.",
        "07 Oct.",
      ],
    },
  };

  return (
    <div className="flex-initial px-10 py-5 rounded-lg shadow-md container-sm mx-auto hover:shadow-2xl mb-20">
      {/* max-w-lg w-full bg-white rounded-lg shadow p-4 md:p-6 */}
      {/* flex-initial px-10 py-5 rounded-lg shadow-md container-sm mx-auto hover:shadow-2xl */}
      <h2 className="font-bold text-4xl p-4">Summary of Match Results </h2>{" "}
      <p className="text-base font-normal text-gray-500 mb-5">
        {/* <p><span className="text-black text-2xl font-bold">Item Name: </span>
          Printer</p>
            <p>Quantity: 5</p>
            <p>Budget: 1000</p>
            <p>Location: Berlin, Germany</p>
            <p>Business Sector: IT</p>
            <p>Combined Quantity: 9</p>
            <p>Savings: 1800</p>  */}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-white-700 dark:text-black-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Factor 
                    </th>
                    <th scope="col" className="px-6 py-3">
                        
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Matched Value
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-white-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    Quantity
                    </th>
                    <td className="px-6 py-4">
                        
                    </td>
                    <td className="px-6 py-4">
                        5
                    </td>
                </tr>
                <tr className="bg-white dark:bg-white-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    Budget
                    </th>
                    <td className="px-6 py-4">
                        
                    </td>
                    <td className="px-6 py-4">
                        1000
                    </td>
                </tr>
                <tr className="bg-white dark:bg-white-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    Location
                    </th>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4">
                    Berlin, Germany
                    </td>
                </tr>
                <tr className="bg-white dark:bg-white-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    Business Sector
                    </th>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4">
                    IT
                    </td>
                </tr>
                <tr className="bg-white dark:bg-white-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    Combined Quantity
                    </th>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4">
                    9
                    </td>
                </tr>
                <tr className="bg-white dark:bg-white-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    Savings
                    </th>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4">
                    1800
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr className="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" className="px-6 py-3 text-base">Total</th>
                    <td className="px-6 py-3">3</td>
                    <td className="px-6 py-3">21,000</td>
                </tr>
            </tfoot>
        </table>
    </div>
        </p>
    </div>
  );
}
export default MatchedResults;

    // <div className="p-4">
    //   <h1 className="text-xl font-bold mb-4">Match Result</h1>
    //   {optimalMatch ? (
    //     <div>
    //       {/* Display optimal match details here */}
    //       <p>Item Name: {optimalMatch.item}</p>
    //       <p>Quantity: {optimalMatch.quantity}</p>
    //       <p>Budget: {optimalMatch.budget}</p>
    //       <p>Location: {optimalMatch.location}</p>
    //       <p>Business Sector: {optimalMatch.business_sector}</p>
    //       <p>Combined Quantity: {optimalMatch.combined_quantity}</p>
    //       <p>Savings: {optimalMatch.savings}</p>
    //       {/* Add more display fields as required */}
    //     </div>
    //   ) : (
    //     <div>
    //       {/****/}
    //       <p>Item Name: Printer</p>
    //       <p>Quantity: 5</p>
    //       <p>Budget: 1000</p>
    //       <p>Location: Berlin, Germany</p>
    //       <p>Business Sector: IT</p>
    //       <p>Combined Quantity: 9</p>
    //       <p>Savings: 1800</p>
    //     </div>
    //     )}
    //   </div>