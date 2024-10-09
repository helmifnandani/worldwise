import Spinner from "./Spinner";
import styles from "./Countrieslist.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function Countrieslist() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clickin on a city on the map" />
    );

  /* Cara BACANYA

  Pertama cities arraynya di loop, di reduce parameternya ada dua, accumulatorArray ini array baru yang dibikin, defaulnya [] karena di state di ujung function, dan currentValue, dalam hal ini element citiets yang lagi di loop

  Waktu loop pertama di cek, kalau cities ini punya county yang lagi di loop nggak, cara cek nya pakai map, terus bikin array baru yang isinya cuma string country. Dalam kasus ini hasil mapnya masih empty array [], karena initial statenya [] dan belum diapa apain. jadi waktu di cek hasil ifnya true, jadi masuk ke returnnya yaitu array accumulatornya di spread, terus tambahin value baru yaitu yang lagi di loop sekarang

  Loop kedua baru mulai cek apa countrynya pernah ditambahkan sebelumnya atau belum, sekarang hasil mapnya adalah ['portugal']. Kalau misal currentValuenya portugal juga jadi di else, dan accumulator arraynya nggak diapa apain. Tapi kalau current valuenya Spain, jadi masuk ke if nya, di spread arraynya, tambah spain. gitu terus sampai semua sudah masuk dan mencegah adanya duplicate

  */

  const countries = cities.reduce(
    (accumulatorArray, currentValue, currentIndex) => {
      if (
        !accumulatorArray.map((el) => el.country).includes(currentValue.country)
      ) {
        return [
          ...accumulatorArray,
          {
            country: currentValue.country,
            emoji: currentValue.emoji,
            id: currentIndex,
          },
        ];
      } else {
        return accumulatorArray;
      }
    },
    []
  );
  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default Countrieslist;
