/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Rating } from "primereact/rating";
import { Card } from "primereact/card";
import { CiGps } from "react-icons/ci";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
};

const defaultLocation = { lat: 31.5497, lng: 74.3436 }; // Default

const NearbyRestaurants: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [restaurants, setrestaurants] = useState<any[]>([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState<any | null>(
    null
  );
  const [locationDetails, setLocationDetails] = useState<string | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showRestaurants, setShowRestaurants] = useState<boolean>(false);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAt-VNMbVX5LvWFNBvYAEfmErFEk729-jE",
    libraries: ["drawing", "places", "geometry"],
  });

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      autocompleteRef.current = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["geocode"],
          componentRestrictions: { country: "pk" },
        }
      );

      autocompleteRef.current.addListener("place_changed", handlePlaceSelect);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (location) {
      fetchLocationDetails(location.lat, location.lng);
      fetchNearbyrestaurants(location.lat, location.lng);
    }
  }, [location]);

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.geometry) {
      const newLocation = {
        lat: place.geometry.location?.lat() || defaultLocation.lat,
        lng: place.geometry.location?.lng() || defaultLocation.lng,
      };
      setLocation(newLocation);
      map?.setCenter(newLocation);
    }
  };

  const handleMapLoad = (map: google.maps.Map) => {
    setMap(map);
    getCurrentLocation();
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { lat: latitude, lng: longitude };
          setLocation(newLocation);
          map?.setCenter(newLocation);
        },
        (error) => {
          console.error("Error fetching current location:", error);
          setLocation(defaultLocation); // Fallback to default location
          map?.setCenter(defaultLocation); // Center the map to default location
        },
        { timeout: 10000 } // Timeout for geolocation request
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLocation(defaultLocation); // Fallback to default location
      map?.setCenter(defaultLocation); // Center the map to default location
    }
  };

  const fetchLocationDetails = async (lat: number, lng: number) => {
    try {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (results && status === "OK" && results[0]) {
          setLocationDetails(results[0].formatted_address);
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status
          );
          setLocationDetails("Unable to retrieve location details.");
        }
      });
    } catch (error) {
      console.error("Failed to fetch location details:", error);
    }
  };

  const fetchNearbyrestaurants = (lat: number, lng: number) => {
    if (!map) return;

    const service = new google.maps.places.PlacesService(map);
    const request: google.maps.places.PlaceSearchRequest = {
      location: new google.maps.LatLng(lat, lng),
      radius: 5000,
      type: "restaurant",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const formattedrestaurants = results?.map((place) => ({
          id: place.place_id,
          name: place.name,
          lat: place.geometry?.location?.lat() || defaultLocation.lat,
          lng: place.geometry?.location?.lng() || defaultLocation.lng,
          address: place.vicinity || "No address available",
          contact: place.formatted_phone_number || "No contact available",
          cuisine: place.types?.[0] || "Various Cuisine",
          rating: place.rating || 4.5,
          availability: place.opening_hours?.open_now ? "Open Now" : "Closed",
          price_level: place.price_level || "N/A",
          image: place.photos?.[0]?.getUrl({ maxWidth: 150, maxHeight: 100 }),
        }));
        (formattedrestaurants || []).forEach((vet, index) => {
          service.getDetails(
            { placeId: vet.id || "" },
            (placeDetails, placeDetailsStatus) => {
              if (
                placeDetailsStatus ===
                  google.maps.places.PlacesServiceStatus.OK &&
                placeDetails
              ) {
                formattedrestaurants![index].contact =
                  placeDetails.formatted_phone_number || "No contact available";
              } else {
                console.error(
                  "Failed to fetch place details:",
                  placeDetailsStatus
                );
                formattedrestaurants![index].contact = "No contact available";
              }

              // After fetching details for all places, update the state
              if (index === formattedrestaurants!.length - 1) {
                setrestaurants([...formattedrestaurants!]);
              }
            }
          );
        });
      } else {
        console.error("Failed to fetch nearby restaurants:", status);
      }
    });
  };

  const handleFindRestaurants = () => {
    // If the search text is empty, use the current location
    if (!locationDetails?.trim()) {
      getCurrentLocation();
    }
    // Show the map and restaurant cards
    setShowRestaurants(true);
  };

  const handleClick = (vet: any) => {
    setSelectedRestaurants(vet);
  };

  return (
    <>
    <div className="bg-white font-sans leading-normal tracking-normal">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="p-4 px-9">
            {/* Location Search Section */}
            <div className="relative">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-[90%] max-w-[800px]">
                <div className="bg-black p-4 rounded-xl">
                  <div className="relative flex items-center ">
                    <span className="p-input-icon-left w-full ">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20">
                        <Button
                          onClick={getCurrentLocation}
                          className="w-5 h-5 p-button-text p-button-rounded"
                        >
                          <CiGps className=" text-green-400 hover:text-green-500 text-2xl" />
                        </Button>
                      </div>
                      <InputText
                        ref={inputRef}
                        value={locationDetails || ""}
                        placeholder="Enter a location"
                        onChange={(e) => setLocationDetails(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-l-lg"
                      />
                    </span>
                    <Button
                      label="FIND RESTAURANTS"
                      onClick={handleFindRestaurants}
                      className="inline-flex whitespace-nowrap px-6 py-3 bg-green-400 hover:bg-green-500 border-none text-black font-semibold rounded-r-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location || defaultLocation}
                zoom={12}
                onLoad={handleMapLoad}
              >
                {location && (
                  <Marker position={{ lat: location.lat, lng: location.lng }} />
                )}
                {restaurants.map((restaurant) => (
                  <Marker
                    key={restaurant.id}
                    position={{ lat: restaurant.lat, lng: restaurant.lng }}
                    onClick={() => handleClick(restaurant)}
                  />
                ))}

                {selectedRestaurants && (
                  <InfoWindow
                    position={{
                      lat: selectedRestaurants.lat,
                      lng: selectedRestaurants.lng,
                    }}
                    onCloseClick={() => setSelectedRestaurants(null)}
                  >
                    <div className="p-4">
                      <h6 className="text-sm font-bold mb-2">
                        {selectedRestaurants.name}
                      </h6>
                      <p className="text-sm mb-1">
                        {selectedRestaurants.address}
                      </p>
                      <p className="text-sm mb-1">
                        {selectedRestaurants.contact}
                      </p>
                      <p className="text-sm mb-1">
                        Cuisine: {selectedRestaurants.cuisine}
                      </p>
                      <p className="text-sm mb-2">
                        {selectedRestaurants.availability}
                      </p>
                      <Rating
                        value={selectedRestaurants.rating}
                        readOnly
                        stars={5}
                        cancel={false}
                      />
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            )}
            {showRestaurants && (
              <div>
                {/* Title */}
                <h5 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-2 m-8">
                  Restaurants Nearby
                </h5>

                {/* Restaurant Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                  {restaurants.map((restaurant) => (
                    <Card
                      key={restaurant.id}
                      className=" transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                      onClick={() => handleClick(restaurant)}
                    >
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <div className="h-60 p-4 bg-gradient-to-br from-gray-50 to-gray-200">
                        <h6 className="text-md font-bold mb-2">
                          {restaurant.name}
                        </h6>
                        <p className="text-gray-600 mb-2 text-sm">
                          {restaurant.address}
                        </p>
                        <p className="text-gray-600 mb-2 text-sm">
                          {restaurant.contact}
                        </p>

                        <div className="flex items-center justify-between mb-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Rating
                              value={restaurant.rating}
                              readOnly
                              stars={5}
                              cancel={false}
                              className="flex"
                            />
                            <span className="text-gray-600 ml-2">
                              ({restaurant.rating})
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <i className="pi pi-clock text-blue-600" />
                          <span
                            className={
                              restaurant.availability === "Open Now"
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {restaurant.availability}
                          </span>
                        </div>
                        {/* <div className="flex items-center gap-2">
                      <i className="pi pi-info-circle text-blue-600" />
                      <span className="text-gray-600">
                        {restaurant.cuisine}
                      </span>
                    </div> */}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NearbyRestaurants;
