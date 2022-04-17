/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SiGooglestreetview } from "react-icons/si";

function Card({ country }) {
  const currencies = country.currencies;
  let currencyValues;
  const values = Object.values(country);
  const nativeName = Object.values(values[0]);
  const official = nativeName[2];
  let officialValuesArr;
  if (!official) {
    return;
  } else {
    officialValuesArr = Object.values(official);
  }

  if (!currencies) {
    return;
  } else {
    currencyValues = Object.values(currencies);
  }
  return (
    <div className="group relative col-span-1 mb-4 flex w-full scale-[.97] transform flex-col gap-2 overflow-hidden rounded-md bg-gray-900 p-2 text-gray-50 transition duration-300 ease-in hover:scale-100">
      <a
        className="group absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 text-center opacity-0 duration-300 group-hover:cursor-pointer group-hover:opacity-100 group-hover:backdrop-blur-sm"
        href={country.maps.googleMaps}
        rel="noreferrer"
        target="_blank"
      >
        <div className="relative mx-auto overflow-hidden rounded-xl p-2">
          <SiGooglestreetview className="z-10 h-24 w-24 text-indigo-400" />
        </div>

        <p>Click to see map of {country.name.common}</p>
      </a>
      <div className="relative h-28 w-full rounded-md">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="h-28 rounded-md object-cover"
        />
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm">{country.name.common}</p>
          <p className="text-xs text-gray-300">
            {officialValuesArr ? officialValuesArr[0].official : null}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-sm">{country.region}</p>
          <p className="text-xs text-gray-300">
            {country.subregion ? <>{country.subregion}</> : null}
          </p>
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-start rounded-md bg-gradient-to-l from-gray-800/20 to-indigo-900 px-4 py-2">
        {country.capital ? (
          <p className="flex w-full gap-1 text-center text-base">
            <span className="font-semibold text-gray-50">Capital:</span>
            <span className="text-gray-300">{country.capital[0]}</span>
          </p>
        ) : null}
        {country.currencies ? (
          <div className="flex w-full gap-1 text-center text-base">
            <span className="font-semibold text-gray-50">Currencies:</span>
            {currencyValues &&
              currencyValues.map((currency, idx) => {
                return (
                  <span className="text-gray-300" key={idx}>
                    {currency.name}({currency.symbol})
                  </span>
                );
              })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
