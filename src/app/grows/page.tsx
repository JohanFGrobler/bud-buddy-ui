'use client'

import GrowCard from '@/components/cards/grow/GrowCard';
import styles from '@/app/grows/styles.module.css';
import {useGetGrowsQuery} from '@/app/grows/growSlice'
import {getErrorMessage} from '@/utils/getErrorMessage'

export default function HomePage() {
  const { data: grows, error, isLoading } = useGetGrowsQuery();

  if (isLoading) {
    return <p>Loading grows...</p>;
  }

  if (error) {
    const errorMessage = getErrorMessage(error);
    return <p>Error fetching grows: {errorMessage}</p>;
  }

  if (!grows || grows.length === 0) {
    return <p>No grows found. Start adding some!</p>;
  }

  return (
    <div className={styles.grid}>
      {grows.map((grow, index) => (
        <div className={styles.grid__item} key={index}>
          <GrowCard
            title={grow.name}
            description={grow.notes}
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFI7TLQKrMkIJK0vw0AJzM-vBsoyw2trj2Q&s'}
          />
        </div>
      ))}
    </div>
  );
}
