import { useEffect, useState } from "react";
import SkeletonCard from "../components/SkeletonCard";
import Artists from "../components/Artists";


export default function ArtistsPage() {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setArtists([
        { id: 1, name: "DJ Aryan", category: "DJ", price: "₹15,000/event" },
        { id: 2, name: "Ananya Dance Crew", category: "Dance", price: "₹20,000/event" },
      ]);
      setLoading(false);
    }, 1500); // simulate API delay
  }, []);

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Browse Artists</h1>

      <div className="row">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <SkeletonCard />
              </div>
            ))
          : artists.map((artist) => (
              <div className="col-md-4 mb-4" key={artist.id}>
                <Artists artist={artist} />
              </div>
            ))}
      </div>
    </div>
  );
}
