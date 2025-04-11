// import { useCallback, useState } from 'react';
// import { APIProvider, ControlPosition, Map, Marker, useMarkerRef, MapControl } from '@vis.gl/react-google-maps';
// import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

// const CustomLocationPicker = ({ onSelect, setOpenMap }) => {
//   const [markerRef] = useMarkerRef();

//   const [selectedPosition, setSelectedPosition] = useState({ lat: 25.6156852, lng: 85.0782722 });
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [selectedAddress, setSelectedAddress] = useState('');
//   const [geocoder, setGeocoder] = useState(null);

//   const onMapClick = (event) => {
//     setSelectedPosition(event.detail.latLng);
//     getAddressFromLatLng(event.detail.latLng);
//   };
//   const onMapCenterChange = (event) => {
//     setSelectedPosition(event.detail.center);
//     getAddressFromLatLng(event.detail.center);
//   };

//   const getAddressFromLatLng = useCallback(
//     debounce((latLng) => {
//       if (!geocoder) {
//         return;
//       }
//       geocoder.geocode({ location: latLng }, (results, status) => {
//         if (status === 'OK') {
//           if (results[0]) {
//             setSelectedAddress(results[0].formatted_address);
//           } else {
//             setSelectedAddress('No address found');
//           }
//         } else {
//           setSelectedAddress('Geocoder failed due to: ' + status);
//         }
//       });
//     }, 500),
//     [geocoder]
//   );

//   useEffect(() => {
//     if (!geocoder) return;
//     geocoder.geocode({ location: selectedPosition }, (results, status) => {
//       if (status === 'OK') {
//         if (results[0]) {
//           setSelectedAddress(results[0].formatted_address);
//         } else {
//           setSelectedAddress('No address found');
//         }
//       } else {
//         setSelectedAddress('Geocoder failed due to: ' + status);
//       }
//     });
//   }, [geocoder]);

//   return (
//     <APIProvider apiKey={'AIzaSyC6-HTk9TbnPmFXO1ZiVgCwnUSTDL2hSFM'}>
//       <Map
//         className='w-full h-[50vh] rounded-3xl overflow-hidden'
//         defaultCenter={selectedPosition}
//         defaultZoom={10}
//         gestureHandling={'greedy'}
//         disableDefaultUI={true}
//         onClick={onMapClick}
//         onCenterChanged={onMapCenterChange}
//       >
//         <Marker ref={markerRef} position={selectedPosition} />
//       </Map>

//       <MapControl position={ControlPosition.TOP}>
//         <div className='autocomplete-control'>
//           <PlaceAutocompleteClassic onPlaceSelect={setSelectedPlace} />
//         </div>
//       </MapControl>
//       <MapControl position={ControlPosition.BOTTOM}>
//         <AddressDisplay selectedAddress={selectedAddress} lat={selectedPosition.lat} lng={selectedPosition.lng} onSelect={onSelect} setGeocoder={setGeocoder} setOpenMap={setOpenMap} />
//       </MapControl>
//       <MapControl position={ControlPosition.TOP_RIGHT}>
//         <CustomButton
//           btnText='Clear'
//           handleSubmit={() => {
//             setSelectedAddress('');
//             onSelect('', null, null);
//             setOpenMap(false);
//           }}
//         />
//       </MapControl>
//       <MapHandler place={selectedPlace} />
//     </APIProvider>
//   );
// };

// const AddressDisplay = ({ selectedAddress, lat, lng, onSelect, setGeocoder, setOpenMap }) => {
//   const geocoder = useMapsLibrary('geocoding');
//   useEffect(() => {
//     if (geocoder) setGeocoder(new geocoder.Geocoder());
//   }, [geocoder]);

//   return (
//     <div className='bg-green-500 p-4 rounded-3xl mb-3 flex flex-col justify-center items-center text-white'>
//       <p className='text-sm max-w-72'>{selectedAddress}</p>
//       <IconButton
//         onClick={() => {
//           onSelect(selectedAddress, lat, lng);
//           setOpenMap(false);
//         }}
//       >
//         <CheckRoundedIcon className='text-white font-bold' />
//       </IconButton>
//     </div>
//   );
// };

// import React, { useRef, useEffect } from 'react';
// import { useMapsLibrary } from '@vis.gl/react-google-maps';

// export const PlaceAutocompleteClassic = ({ onPlaceSelect }) => {
//   const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
//   const inputRef = useRef();
//   const places = useMapsLibrary('places');

//   useEffect(() => {
//     if (!places || !inputRef.current) return;

//     const options = {
//       fields: ['geometry', 'name', 'formatted_address']
//     };

//     setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
//   }, [places]);

//   useEffect(() => {
//     if (!placeAutocomplete) return;

//     placeAutocomplete.addListener('place_changed', () => {
//       onPlaceSelect(placeAutocomplete.getPlace());
//     });
//   }, [onPlaceSelect, placeAutocomplete]);

//   return (
//     <div className='autocomplete-container pt-3 flex justify-center items-center'>
//       <input
//         className={`shadow-sm dark:bg-slate-900 dark:text-white rounded-md sm:w-52 px-3 py-2 border border-gray-300 dark:border-slate-700 focus:outline-none autofill:bg-white dark:autofill:bg-slate-950 bg-light dark:bg-dark`}
//         ref={inputRef}
//       />
//     </div>
//   );
// };

// import { useMap } from '@vis.gl/react-google-maps';
// import { IconButton } from '@mui/material';
// import { debounce } from 'lodash';
// import CustomButton from './CustomButton';

// const MapHandler = ({ place }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map || !place) return;

//     if (place.geometry?.viewport) {
//       map.fitBounds(place.geometry?.viewport);
//     }
//   }, [map, place]);

//   return null;
// };
// React.memo(MapHandler);

// export default CustomLocationPicker;
